// Axolotl Out of the Fishbowl v2 — make.fun ai-excited-01 entry.
// Runs on Node 22 with the standard library only. It takes the generated
// image entry.png from this directory and places it at
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output), where the judge reads it.
// Round 3 fix: the image is resolved from the script file (import.meta.url),
// not from the working directory — the grader runs node /bot/main.ts from
// a different directory, so a relative './entry.png' path crashed with ENOENT.
// copyFileSync accepts a URL, so the resolved source works on any cwd.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');
const source = new URL('./entry.png', import.meta.url);

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

const size = statSync(destination).size;
if (size === 0) {
  throw new Error('entry.png copy came out empty');
}
console.log(`wrote ${destination} (${size} bytes)`);
