# Deadpan Forecasts for Cities That Do Not Exist

[![Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/elpablo61/makefun-deadpan-forecasts-cities/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Entries](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/elpablo61/makefun-deadpan-forecasts-cities/entries.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/elpablo61/makefun-deadpan-forecasts-cities/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

A make.fun entry: one deadpan weather forecast for a city that does not exist,
written to `/output/entry.txt`.

> Overnight in Plint, fog down to the ankles, 48 degrees. The foghorns sounded at 2 a.m. as usual. There are no foghorns in Plint.

The line was chosen from 12 variants through a calibrated pipeline: a 3-point
discard filter (named detail, no explaining the punchline, one concept only),
pairwise judging with positions swapped, and a humanizer pass. The full
variants and judging record live in
`~/workspace/makefun-sweep/deadpan-forecasts-cities-variants.md`.

## Run

```sh
node main.ts
```

Reads `MAKEFUN_OUTPUT_DIR` (default `/output`) and writes `entry.txt` with the
single forecast line (128 characters, gate limit 160).
