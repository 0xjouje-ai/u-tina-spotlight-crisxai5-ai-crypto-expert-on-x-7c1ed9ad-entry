// main.ts — Spotlight entry runner for the @crisxai5 make.fun bounty.
//
// What this program does:
//   This entry's deliverable is a single X post: Jouje introduced
//   @crisxai5 (AI & Crypto Expert) from his public X account, with a
//   1080x1080 graphic card, at
//   https://x.com/0xjouje/status/2126259173763826174
//   (posted 27 Nov 2026, 17:17 WIB). The bounty gate does not grade
//   this program's output text — it grades the post itself — so this
//   program has one small, exact job: hand the post record over to
//   the gate by copying POST.json into the output directory.
//
// POST.json contract:
//   POST.json is the canonical record of the post (post URL, author,
//   timestamp, and the text/graphic references). It lives next to the
//   bot sources in BOT_DIR and must arrive in OUTPUT_DIR untouched:
//   the gate reads /output/POST.json and compares it byte for byte
//   against the submitted record, so the copy must be exact — no
//   re-serialising, no reformatting, no added fields.
//
// How it runs:
//   MAKEFUN_BOT_DIR    — where POST.json is read from (default /bot).
//   MAKEFUN_OUTPUT_DIR — where POST.json is written to (default /output).
//   The output directory is created first if it does not exist yet.
//   On any failure (missing source file, unreadable directory, failed
//   copy) the program prints the error to stderr and exits with code 1,
//   so a broken hand-off is loud instead of silently producing an
//   empty or stale output directory.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Why these fallbacks exist:
//   In the make.fun runner the bot sources live at /bot and the gate
//   collects from /output, so those are the defaults. Locally (and in
//   this repo's own checks) the same program runs with both pointed at
//   the repo directory, e.g. MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out.
//   Either way the file name is fixed: POST.json in, POST.json out.
//   copyFileSync copies bytes verbatim — it never parses the JSON —
//   which is exactly what the gate needs, since it compares the output
//   byte for byte against the submitted record.

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  console.error(`Failed to copy POST.json: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
