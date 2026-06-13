#!/usr/bin/env bun
/**
 * Regenerate the one-page resume PDF from resume.html via headless Chrome.
 *
 *   bun run resume:pdf                 # writes to ~/Downloads/John_Trotta_Senior_Product_Manager.pdf
 *   bun run resume:pdf ./out.pdf       # writes to a custom path
 *
 * Edit resume.html (same directory) to change content, then rerun.
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

const html = join(scriptDir, "resume.html");
const out = resolve(
  process.argv[2] ??
    join(homedir(), "Downloads", "John_Trotta_Senior_Product_Manager.pdf"),
);
// Persistent profile: reused across runs so Chrome skips first-run profile
// setup. One-shot print exits cleanly, so there's no lock to worry about.
const profile = join("/tmp", "chrome-resume-profile");

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

const ok = await waitForStableFile(out, 30_000);

// Terminate Chrome (main process + any helpers bound to this profile).
proc.kill();
Bun.spawnSync(["pkill", "-9", "-f", `user-data-dir=${profile}`]);

if (!ok) {
  console.error("Failed: PDF not written within timeout.");
  console.error(await new Response(proc.stderr).text());
  process.exit(1);
}
console.log(`Resume PDF written: ${out}`);
