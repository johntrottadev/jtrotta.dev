#!/usr/bin/env bun
/**
 * Drift guard for the résumé variants.
 *
 *   bun run resume:check
 *
 * Three variants each carry their own copy of the contact line, education, and
 * certifications. Nothing stops a phone-number change or a new cert from landing
 * in one file and not the others. This checks that the shared blocks still match,
 * and that no variant has quietly lost a role or a date range.
 *
 * Exits non-zero on any drift so it can gate a commit.
 */
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const files = readdirSync(scriptDir)
  .filter((f) => f.startsWith("resume-") && f.endsWith(".html"))
  .sort();

if (files.length < 2) {
  console.error(`Nothing to compare: found ${files.length} variant(s).`);
  process.exit(1);
}

/** Blocks that must be byte-identical across every variant. */
const SHARED: Record<string, RegExp> = {
  contact: /class="contact">([\s\S]*?)<\/div>/,
  education: /Education<\/div>\s*<p class="block">([\s\S]*?)<\/p>/,
  certifications: /Certifications<\/div>\s*<p class="block">([\s\S]*?)<\/p>/,
};

/** Structure that must be present and identical — a dropped role reads as a gap. */
const STRUCTURE: Record<string, RegExp> = {
  roles: /class="role-title">([\s\S]*?)<\/span>/g,
  dates: /class="role-meta">([\s\S]*?)<\/span>/g,
};

const parsed = files.map((f) => {
  const html = Bun.file(join(scriptDir, f)).text();
  return { file: f, html };
});

const contents = await Promise.all(parsed.map(async (p) => ({ file: p.file, html: await p.html })));

let failures = 0;
const fail = (msg: string) => {
  console.error(`  DRIFT  ${msg}`);
  failures++;
};

for (const [name, re] of Object.entries(SHARED)) {
  const values = contents.map((c) => ({ file: c.file, value: c.html.match(re)?.[1]?.trim() ?? null }));
  const missing = values.filter((v) => v.value === null);
  for (const m of missing) fail(`${name}: block not found in ${m.file}`);
  const present = values.filter((v) => v.value !== null);
  const baseline = present[0];
  if (!baseline) continue;
  for (const v of present.slice(1)) {
    if (v.value !== baseline.value) {
      fail(`${name}: ${v.file} differs from ${baseline.file}`);
    }
  }
}

for (const [name, re] of Object.entries(STRUCTURE)) {
  const lists = contents.map((c) => ({
    file: c.file,
    items: [...c.html.matchAll(re)].map((m) => m[1]!.trim()),
  }));
  const baseline = lists[0]!;
  for (const l of lists.slice(1)) {
    if (l.items.join("|") !== baseline.items.join("|")) {
      fail(`${name}: ${l.file} does not match ${baseline.file}`);
      console.error(`         ${baseline.file}: ${baseline.items.join(" · ")}`);
      console.error(`         ${l.file}: ${l.items.join(" · ")}`);
    }
  }
}

console.log(`Checked ${files.length} variants: ${files.join(", ")}`);
if (failures === 0) {
  console.log("Shared blocks and role structure are consistent.");
  process.exit(0);
}
console.error(`\n${failures} drift issue(s) found.`);
process.exit(1);
