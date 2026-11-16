// ai-excited-01-r2: copy the entry image byte-for-byte into the output
// directory. Deterministic by construction: no timestamps, no randomness,
// no network — the same input bytes always produce the same output bytes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry image not found next to main.ts: ${source}`);
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.png"));
