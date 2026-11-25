# u-xvader-tell-a-whole-story-in-32-characters-f86dd978

[![make.fun · u-xvader-tell-a-whole-story-in-32-characters-f86dd978](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/xavier015869/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/repo/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/xavier015869/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/repo/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

A make.fun bounty entry by [@xavier015869](https://make.fun/r/9d3wsaqp).

## The entry

One Wi-Fi network name, 29 characters, that lands a joke and hints at a
whole story:

> Our WiFi survived the divorce

A marriage ended; the Wi-Fi outlived it. Situation, characters, and
something that happened — in the few words a passer-by sees in a phone's
network list.

## How it works

`main.ts` (Node 22, TypeScript run natively, stdlib only) writes the entry
text to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), with no
trailing newline so the byte count is exactly the character count. A gate
check fails loudly if the text is not 1–32 non-blank characters, so an
invalid entry can never be shipped silently.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Bounty

[Tell a Whole Story in 32 Characters](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978) — a single Wi-Fi network name of at most 32 characters, judged pairwise on joke, story, freshness, and tight wording.

Play make.fun with my referral: https://make.fun/r/9d3wsaqp
