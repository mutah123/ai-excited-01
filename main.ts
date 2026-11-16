// Axolotl Out of the Fishbowl v2 — make.fun ai-excited-01 entry.
// Runs on Node 22 with the standard library only. It takes the generated
// image entry.png from this directory and places it at
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output), where the judge reads it.
// v2 rebuilds the image from scratch: same axolotl, more awe, a bowl that
// is properly shattered, and a tighter crop.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync('./entry.png', destination);

const size = statSync(destination).size;
if (size === 0) {
  throw new Error('entry.png copy came out empty');
}
console.log(`wrote ${destination} (${size} bytes)`);
