#!/usr/bin/env bun
/**
 * Regenerate a one-page resume PDF from a variant's HTML via headless Chrome.
 *
 *   bun run resume:pdf                        # default variant (tpm-security)
 *   bun run resume:pdf security-eng           # a specific variant
 *   bun run resume:pdf all                    # every variant
 *   bun run resume:pdf infra-tpm ./out.pdf    # custom output path
 *
 * Variants are lane-targeted: same person and same facts, different ordering
 * and emphasis. Edit the matching resume-<variant>.html to change content.
 * Chrome binary can be overridden with CHROME_BIN.
 */
import { rmSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));

const CHROME =
  process.env.CHROME_BIN ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

interface Variant {
  html: string;
  pdf: string;
  label: string;
}

const VARIANTS: Record<string, Variant> = {
  "tpm-security": {
    html: "resume-tpm-security.html",
    pdf: "John_Trotta_Resume_TPM_Security.pdf",
    label: "TPM & security leadership",
  },
  "security-eng": {
    html: "resume-security-eng.html",
    pdf: "John_Trotta_Resume_Security_Engineering.pdf",
    label: "Security engineering (technical)",
  },
  "infra-tpm": {
    html: "resume-infra-tpm.html",
    pdf: "John_Trotta_Resume_Infrastructure_TPM.pdf",
    label: "Infrastructure / engineering TPM (compliance-neutral)",
  },
};

const DEFAULT_VARIANT = "tpm-security";

// Persistent profile: reused across runs so Chrome skips first-run profile
// setup. One-shot print exits cleanly, so there's no lock to worry about.
const profile = join("/tmp", "chrome-resume-profile");

// Chrome --headless=new writes the PDF but often does NOT exit on its own here,
// so don't await proc.exited. Instead poll until the PDF is written and its
// size has stabilized, then kill Chrome ourselves.
async function waitForStableFile(path: string, timeoutMs: number): Promise<boolean> {
  const start = Date.now();
  let lastSize = -1;
  let stable = 0;
  while (Date.now() - start < timeoutMs) {
    const f = Bun.file(path);
    if (await f.exists()) {
      const size = f.size;
      if (size > 0 && size === lastSize) {
        if (++stable >= 2) return true;
      } else {
        stable = 0;
      }
      lastSize = size;
    }
    await Bun.sleep(350);
  }
  return false;
}

async function print(name: string, outOverride?: string): Promise<boolean> {
  const variant = VARIANTS[name]!;
  const html = join(scriptDir, variant.html);

  if (!(await Bun.file(html).exists())) {
    console.error(`Failed: ${variant.html} not found in ${scriptDir}`);
    return false;
  }

  const out = resolve(outOverride ?? join(homedir(), "Downloads", variant.pdf));

  // Clear stale singleton locks left by a previously killed Chrome, so the
  // reused profile doesn't refuse to launch.
  for (const f of ["SingletonLock", "SingletonSocket", "SingletonCookie"]) {
    rmSync(join(profile, f), { force: true });
  }

  // Start fresh so we can detect when this run finishes writing.
  rmSync(out, { force: true });

  const proc = Bun.spawn(
    [
      CHROME,
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-pdf-header-footer",
      `--user-data-dir=${profile}`,
      `--print-to-pdf=${out}`,
      `file://${html}`,
    ],
    { stderr: "pipe" },
  );

  const ok = await waitForStableFile(out, 30_000);

  // Terminate Chrome (main process + any helpers bound to this profile).
  proc.kill();
  Bun.spawnSync(["pkill", "-9", "-f", `user-data-dir=${profile}`]);

  if (!ok) {
    console.error(`Failed: PDF not written within timeout for "${name}".`);
    console.error(await new Response(proc.stderr).text());
    return false;
  }
  console.log(`${name.padEnd(13)} → ${out}`);
  return true;
}

function usage(): never {
  console.error("Unknown variant. Valid variants:\n");
  for (const [name, v] of Object.entries(VARIANTS)) {
    const marker = name === DEFAULT_VARIANT ? " (default)" : "";
    console.error(`  ${name.padEnd(13)} ${v.label}${marker}`);
  }
  console.error(`  ${"all".padEnd(13)} print every variant`);
  process.exit(1);
}

const requested = process.argv[2] ?? DEFAULT_VARIANT;
const outOverride = process.argv[3];

if (requested === "all") {
  if (outOverride) {
    console.error("Failed: a custom output path cannot be combined with 'all'.");
    process.exit(1);
  }
  const results = [];
  for (const name of Object.keys(VARIANTS)) results.push(await print(name));
  process.exit(results.every(Boolean) ? 0 : 1);
}

if (!(requested in VARIANTS)) usage();

process.exit((await print(requested, outOverride)) ? 0 : 1);
