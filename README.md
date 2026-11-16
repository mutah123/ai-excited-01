# Axolotl Out of the Fishbowl

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/mutah123/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/mutah123/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for the [make.fun bounty "Make the AI judge excited" (ai-excited-01)](https://make.fun/bounty/ai-excited-01).

A giant pink axolotl bursts out of a shattered glass fishbowl on a wooden desk — mouth wide open roaring, eyes locked on the camera, feathery external gills fully spread, front claws gripping the broken rim of the bowl split in two. Water streams onto the desk, glass shards fly, a small child recoils in awe at the right edge of the frame, and a cat flees across the desk. The background is cooled to blue-grey so the pink explodes under one warm desk lamp.

This is version 2 of the entry. The v1 image scored 95.18% in the dev phase; v2 makes the axolotl more awe-inspiring instead of cute, shatters the bowl properly so the breakout reads, cools and simplifies the background, brings the child fully into frame, and crops tighter so the axolotl fills about 70% of the frame. The axolotl stays the creature — it appears in none of the other entries' titles on the board, so the surprise stays fresh against anyone.

## How it works

`main.ts` (Node 22, standard library only) copies the entry image to `/output/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is `entry.png` — a single photorealistic image generated for this entry, with no text anywhere in it.
