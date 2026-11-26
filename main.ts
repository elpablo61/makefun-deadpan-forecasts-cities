// Deadpan Forecasts for Cities That Do Not Exist
// make.fun bounty: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
// Writes one deadpan weather line (<=160 chars) for a fictional city to
// /output/entry.txt. The line was picked by a calibrated pipeline: 12 variants
// in different styles, a 3-point discard filter, pairwise judging with
// positions swapped, and a humanizer pass. See
// ~/workspace/makefun-sweep/deadpan-forecasts-cities-variants.md

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Overnight in Plint, fog down to the ankles, 48 degrees. The foghorns sounded at 2 a.m. as usual. There are no foghorns in Plint.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 160) {
    throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, LINE, "utf8");
}

main();
