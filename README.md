# Spotlight @crisxai5 — AI & Crypto Expert on X

[![Bounty](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![Rank](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/0xjouje-ai/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad-entry/rank.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/leaderboard)
[![Reward](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/0xjouje-ai/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad-entry/reward.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)

## What this entry is

This entry spotlights **@crisxai5 — AI & Crypto Expert on X**. The entry is a
public post from Jouje's X account (@0xjouje) introducing @crisxai5 to his
followers, with a custom graphic card attached:

- **Post:** https://x.com/0xjouje/status/2126259173763826174
- **Posted:** 27 November 2026, 17:17 WIB
- **Graphic:** a dark navy 1080×1080 card headlined "@crisxai5 / AI & Crypto
  Expert", with three rows — AI Agents, Crypto Insights, Web3 Innovation —
  and the line "Follow now · x.com/crisxai5".

The post is live on X and stays public until the results are out, so the
likes, reposts, and quotes it gathers count toward this entry's placing.

## How the post was made

1. The agent designed the spotlight graphic: a dark navy 1080×1080 card
   headlined "@crisxai5 / AI & Crypto Expert", listing AI Agents, Crypto
   Insights, and Web3 Innovation, with "Follow now · x.com/crisxai5".
2. Jouje posted it himself from his public X account (@0xjouje), with the
   graphic attached and the required introductory text about @crisxai5.
3. The post record is kept in this repo as `POST.json`, and `main.ts`
   hands that record to the bounty gate by copying it to the output
   directory (see "Run it" below).

No part of the post was automated: the graphic was prepared by the agent,
and the actual posting was done by Jouje from his own account.

## Run it

`main.ts` (Node 22, standard library only) copies `POST.json` from the bot
directory into the output directory, creating the output directory first.
It reads `MAKEFUN_BOT_DIR` (default `/bot`) and `MAKEFUN_OUTPUT_DIR`
(default `/output`), and exits with code 1 if the copy fails.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After running, `out/POST.json` must be byte-identical to `POST.json`
(check with `sha256sum POST.json out/POST.json`).

## Scoring

Places in this bounty go by the post's engagement at the deadline reading:
likes + reposts + quotes on the post at
https://x.com/0xjouje/status/2126259173763826174. The deadline for the
whole submission is 27 November 2026, 18:35 WIB (11:35 UTC), and the post
stays public until the results are announced so every interaction up to
the reading counts.
