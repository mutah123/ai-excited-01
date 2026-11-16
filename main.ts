// Axolotl Out of the Fishbowl — make.fun ai-excited-01 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file; the program copies it to
// /output/entry.png, where the judge reads it. Nothing else is written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);

// Confirm the copy landed whole before the grader reads it.
const { size } = statSync(dest);
if (size === 0) throw new Error('entry.png copy came out empty');
console.log(`wrote ${dest} (${size} bytes)`);
