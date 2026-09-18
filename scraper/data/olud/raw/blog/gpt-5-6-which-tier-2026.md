# GPT-5.6: which tier? The effort level matters more | olud.ai

> GPT-5.6 Sol, Terra and Luna shipped the same day at $30, $15 and $6 per million output tokens. At maximum effort they span 7.7 intelligence points; the effort levels inside Luna alone span 24.6. Numbers and a decision grid.

_Source: https://olud.ai/blog/gpt-5-6-which-tier-2026/_

---

[AI Tools](https://olud.ai/#freetools)
[Projects](https://olud.ai/#projects)
[Directory](https://olud.ai/#tools)

[🏆 Leaderboard](https://olud.ai/#leaderboard)
[📡 News](https://olud.ai/#news)
[✨ Prompts](https://olud.ai/#prompts)
[⚖️ Compare Models](https://olud.ai/compare/)
[🔧 Tools](https://olud.ai/tools/)
[📦 Projects](https://olud.ai/projects/)
[🚀 Spaces](https://olud.ai/spaces/)

[Blog](https://olud.ai/blog/)

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / GPT-5.6 tiers

Model analysis

## Which GPT-5.6 tier? The wrong question

Sol, Terra and Luna shipped on the same day at $30, $15 and $6 per million output tokens. At maximum effort they sit 7.7 intelligence points apart. The six effort levels inside Luna alone sit 24.6 points apart.

Updated 28 July 2026·9 min read·No paywall

### TL;DR — the short version

**GPT-5.6 is not one model, and not three either. It is three tiers, each exposing six effort levels — eighteen measured configurations under one name.**

**The tier sets your unit price. The effort level sets almost everything else.**

**Across the three tiers at maximum effort the intelligence index spans 7.7 points. Inside the cheapest tier alone it spans 24.6.**

**Maximum effort is not always the best setting: Sol at xhigh scores 78.3 on coding against 77.4 at max, and starts answering 48.96 seconds sooner.**

### Three tiers, one release date

All three GPT-5.6 tiers carry the same release date, 9 July 2026. They differ by a factor of five in price and by one word in name. Here they are at maximum effort, the way leaderboards list them.

| Tier | Intelligence | Coding | $ / 1M in | $ / 1M out | Tokens / s | First token |
| --- | --- | --- | --- | --- | --- | --- |
| **GPT-5.6 Sol (max)** | 58.9 | 77.4 | $5 | $30 | 90.2 | 87.13 s |
| **GPT-5.6 Terra (max)** | 55.0 | 76.7 | $2.5 | $15 | 165.4 | 151.8 s |
| **GPT-5.6 Luna (max)** | 51.2 | 71.4 | $1 | $6 | 220.4 | 84.29 s |

Read that table alone and the decision looks linear. Terra costs exactly half of Sol on both input and output tokens and gives up 3.9 points of intelligence. Luna costs a fifth of Sol and gives up 7.7. Pick a budget, accept the matching haircut, move on.

Two details spoil the story. Terra at maximum effort takes 151.8 seconds to produce its first token, longer than Sol at 87.13 and longer than Luna at 84.29 — the middle tier is the slowest to answer. And throughput runs in the opposite direction to price. Both are symptoms of the same thing: every row above is measured at maximum effort, and maximum effort is a request parameter, not a product.

GPT-5.6 Sol, Terra and Luna compared on output price per million tokens

The three tiers at maximum effort: $30, $15 and $6 per million output tokens. Redrawn daily from live pricing.

### Six effort levels, and they move more than the tiers do

Each tier is benchmarked at six settings: max, xhigh, high, medium, low and Non-reasoning. That is eighteen rows, and the full grid is the only honest way to look at this family.

| Configuration | Intelligence | Coding | Tokens / s | First token |
| --- | --- | --- | --- | --- |
| Sol · $5 / $30 | | | | |
| max | 58.9 | 77.4 | 90.2 | 87.13 s |
| xhigh | 57.7 | 78.3 | 85.1 | 38.17 s |
| high | 55.9 | 77.2 | 81.8 | 8.65 s |
| medium | 53.6 | 76.3 | 85.7 | 7.08 s |
| low | 49.4 | 69.7 | 80.5 | 2.5 s |
| Non-reasoning | 41.2 | 65.1 | 79.3 | 0.85 s |
| Terra · $2.5 / $15 | | | | |
| max | 55.0 | 76.7 | 165.4 | 151.8 s |
| xhigh | 51.6 | 70.6 | 136.7 | 9.55 s |
| high | 49.0 | 67.1 | 130.2 | 4.24 s |
| medium | 45.6 | 64.7 | 136.3 | 1.59 s |
| low | 40.5 | 58.1 | 129.8 | 1.28 s |
| Non-reasoning | 34.0 | 52.3 | 134.9 | 0.67 s |
| Luna · $1 / $6 | | | | |
| max | 51.2 | 71.4 | 220.4 | 84.29 s |
| xhigh | 49.1 | 68.6 | 209 | 25.94 s |
| high | 46.1 | 63.3 | 211.7 | 7.66 s |
| medium | 38.1 | 50.7 | 197.9 | 2.52 s |
| low | 33.3 | 44.2 | 202.8 | 1.64 s |
| Non-reasoning | 26.6 | 39.3 | 201.3 | 0.65 s |

Eighteen configurations, three price points

Now measure the two axes against each other. Between tiers at maximum effort the intelligence index moves 7.7 points, from 58.9 down to 51.2. Inside a single tier, effort moves it further: 17.7 points on Sol, from 58.9 down to 41.2; 21.0 points on Terra, from 55.0 down to 34.0; 24.6 points on Luna, from 51.2 down to 26.6.

The dial nobody argues about in a procurement meeting moves the score more than three times as far as the one everybody argues about. Buying up from Luna to Sol multiplies your unit price by five and buys 7.7 points; staying on Luna and moving the effort parameter costs nothing per token and covers 24.6 points of range.

The tier is the only half of this decision that changes what a token costs. The expensive half has the smaller effect, and the free half decides what you actually get.

### Maximum effort is not the best setting

On Sol’s coding index, xhigh scores 78.3 and max scores 77.4. The faster setting is the better programmer by 0.9 points, and 78.3 is the highest coding index anywhere in this article — above Claude Opus 5 at 78.0, and well above Claude Fable 5 at 76.5, which lists at $50 per million output tokens.

It also arrives sooner: 38.17 seconds to first token against 87.13, a difference of 48.96 seconds on every call. Paying Sol prices at maximum effort to write code buys a slightly worse result and more than twice the wait. One row further down, Sol at medium still scores 76.3 and starts in 7.08 seconds. Across Sol’s top four settings the coding index spans 2.0 points while time to first token spans 7.08 to 87.13 seconds, and Luna repeats the pattern: xhigh gives up 2.1 points against max, 49.1 against 51.2, and starts 58.35 seconds earlier.

Terra is the one genuine exception. Going from max to xhigh costs it 3.4 points of intelligence and 6.1 points of coding, 76.7 down to 70.6 — a collapse rather than a rounding error — in exchange for a first token in 9.55 seconds instead of 151.8.

### Throughput runs backwards to the price list

Once generation starts, the cheapest tier is the fastest. Luna sustains 220.4 tokens per second, Terra 165.4, Sol 90.2. The tier that costs five times more delivers text at roughly two fifths of the speed.

The grid also shows where each kind of speed lives. Throughput barely responds to effort: across its six settings Luna stays between 197.9 and 220.4 tokens per second, Terra between 129.8 and 165.4, Sol between 79.3 and 90.2. Latency responds to nothing else, running from 0.85 to 87.13 seconds on Sol, 0.67 to 151.8 on Terra and 0.65 to 84.29 on Luna.

Throughput is a property of the tier; latency is a property of the effort level. If the answer starts too late, changing tier will not fix it and changing effort will.

### Where the tiers genuinely differ

Composite indices hide the shape of a model. Here are the individual benchmarks for the three tiers at maximum effort, which is where the published breakdowns exist.

| Benchmark | Sol | Terra | Luna |
| --- | --- | --- | --- |
| GPQA | 94.1 | 92.5 | 91.1 |
| Humanity’s Last Exam | 47.2 | 41.8 | 37.2 |
| IFBench | 72.7 | 71.2 | — |
| Long Context Reasoning | 73.7 | 74 | 74 |
| SciCode | 56.1 | 53.9 | 52.5 |
| Terminal-Bench | 88.0 | 88.0 | 80.9 |
| Terminal-Bench Hard | 65.9 | 57.6 | — |
| τ-Bench Banking | 33 | 31.8 | 27.2 |
| τ²-Bench | 85.1 | 86.3 | — |

The tiers separate on hard reasoning and little else. Humanity’s Last Exam is the widest gap at 10.0 points, 47.2 down to 37.2; GPQA is the narrowest at 3.0 points, 94.1 down to 91.1. Two rows invert the price order outright: on Long Context Reasoning both Terra and Luna score 74 against Sol’s 73.7, and on τ²-Bench Terra scores 86.3 against Sol’s 85.1.

The Terminal-Bench pair is the most useful line here for anyone building agents. On the standard set Terra matches Sol exactly at 88.0, at half the price; on the hard set the two split apart, 65.9 against 57.6. Terra is Sol’s equal on shell work until the shell work gets difficult, which is precisely when you notice.

And one number to keep everybody honest: the best of the three tiers scores 33 on τ-Bench Banking. The strongest configuration in this family answers a realistic multi-turn banking task correctly about a third of the time, and no composite index will tell you that.

GPT-5.6 Sol against Claude Opus 5 and Kimi K3: output price per million tokens

Sol at $30 per million output tokens, next to the model above it and the open-weight model below it.

### The crossovers that decide real invoices

Because effort moves further than tier, configurations cross. Luna at xhigh scores 49.1 and Terra at high scores 49.0 — one tenth of a point apart, $6 against $15 per million output tokens, 209 tokens per second against 130.2. There is no reading of that pair in which Terra wins. The same holds one notch down: Luna at high scores 46.1 against Terra at medium on 45.6, and runs at 211.7 tokens per second against 136.3.

One notch up, the trade reverses and becomes a latency question. Terra at xhigh scores 51.6 and starts in 9.55 seconds; Luna at max scores 51.2 and starts in 84.29. Here the extra $9 per million output tokens buys 74.74 seconds off every first response, not capability.

The most expensive crossover is at the top. If your threshold is 55 points, Terra at max reaches exactly 55.0 after waiting 151.8 seconds, while Sol at high reaches 55.9 after 8.65 — 143.15 seconds earlier and 0.9 points higher, at $30 instead of $15. The rule that falls out of the grid: find the cheapest tier that reaches your target score at some effort level, then buy the effort rather than the tier, unless latency rather than score is the binding constraint.

### Against the rest of the board

None of this happens in isolation. Here is the same morning’s snapshot with the neighbours included.

| Model | Intelligence | Coding | $ / 1M out | Tokens / s | First token |
| --- | --- | --- | --- | --- | --- |
| **Claude Opus 5** | 60.7 | 78.0 | $25 | 62.8 | 31.35 s |
| **Claude Fable 5** | 59.9 | 76.5 | $50 | 71.3 | 80.07 s |
| **GPT-5.6 Sol (max)** | 58.9 | 77.4 | $30 | 90.2 | 87.13 s |
| **Kimi K3** | 57.1 | 76.2 | $15 | 32.9 | 125.71 s |
| **Claude Opus 4.8** | 55.7 | 74.3 | $25 | 65 | 37.44 s |
| **GPT-5.6 Terra (max)** | 55.0 | 76.7 | $15 | 165.4 | 151.8 s |
| **GPT-5.5 (xhigh)** | 54.8 | 74.9 | $30 | — | — |
| **Grok 4.5 (high)** | 53.8 | 72.4 | $6 | 61.2 | 10.85 s |
| **GPT-5.6 Luna (max)** | 51.2 | 71.4 | $6 | 220.4 | 84.29 s |

Every GPT-5.6 tier has a direct competitor at or below its own price, and in each case the competitor is ahead on the composite index.

Sol at max, at $30 per million output tokens, is the dearest GPT-5.6 configuration listed, and Claude Opus 5 beats it on both indices for less money: 60.7 against 58.9 on intelligence, 78.0 against 77.4 on coding, $25 against $30, and 31.35 seconds to first token against 87.13. Sol’s answer to that is one specific cell of the grid, xhigh coding at 78.3.

Terra at max shares its $15 output price with Kimi K3, which scores 57.1 against 55.0 on intelligence and 76.2 against 76.7 on coding, ships open weights, and carries 2.8 trillion parameters with a 1,048,576-token context window. Kimi is even quicker off the mark, 125.71 seconds to first token against 151.8. What Terra buys at that price is sustained throughput, 165.4 tokens per second against 32.9, and that is the only reason to prefer it.

Luna at max shares its $6 with Grok 4.5 at high effort, which scores 53.8 against 51.2 and 72.4 against 71.4, and starts answering in 10.85 seconds against 84.29. Luna’s counter-argument is throughput again: 220.4 tokens per second against 61.2, more than three times as much text per second once it has started.

One row deserves its own sentence. GPT-5.5 at xhigh still lists at $30 per million output tokens for 54.8 on intelligence and 74.9 on coding, so the previous generation’s upper setting costs twice what Terra at max costs and loses to it on both indices.

GPT-5.6 Luna against Grok 4.5: same output price per million tokens

Same $6 per million output tokens. One starts in 10.85 seconds, the other sustains 220.4 tokens per second.

### The decision grid

Every row below names a configuration rather than a tier, and every row is decided by a number from the tables above.

| Binding constraint | Configuration | The number that decides |
| --- | --- | --- |
| Hardest reasoning | **Sol (max)** | 47.2 on HLE |
| Writing code | **Sol (xhigh)** | 78.3 coding |
| Top score without the wait | **Sol (high)** | 55.9 in 8.65 s |
| Shell agents, half price | **Terra (max)** | 88.0 Terminal-Bench |
| Mid score, fast first token | **Terra (xhigh)** | 51.6 in 9.55 s |
| Long-context retrieval | **Luna (max)** | 74 vs Sol’s 73.7 |
| Capped budget, agentic work | **Luna (xhigh)** | 49.1 at $6 |
| Streaming chat | **Luna (high)** | 211.7 tokens / s |
| Bulk extraction | **Luna (Non-reasoning)** | 0.65 s to first token |
| You need the weights | **Kimi K3** | 57.1 at Terra’s $15 |
| Top of the board | **Claude Opus 5** | 60.7 and 78.0 at $25 |

**Terra at max is a trap unless the job runs unattended.** Terminal-Bench 88.0 at $15 is the best price on shell competence in this family, but 151.8 seconds to first token is the longest wait of all eighteen configurations, and Terminal-Bench Hard drops to 57.6 against Sol’s 65.9.

**Luna at Non-reasoning is only for tasks with no reasoning in them.** It answers in 0.65 seconds at 201.3 tokens per second, and it scores 26.6 on intelligence and 39.3 on coding. Anything with a decision in it belongs at high instead, 46.1, which costs exactly the same per token.

#### These numbers change every morning

Prices, throughput and benchmark indices for every model we track, rebuilt daily. Free, no sign-up.

[Open the comparator →](https://olud.ai/compare/)

### The bottom line

The question in the title has a small answer. Moving across the three GPT-5.6 tiers at maximum effort changes the intelligence index by 7.7 points and your unit price by a factor of five. The question nobody puts on the procurement slide has a large answer: moving the effort parameter inside the cheapest tier alone changes the index by 24.6 points and your unit price by nothing.

So do it in that order. Find your target score, find the cheapest tier that reaches it at some effort level, then spend the effort — and check the setting above and below the one you assumed, because on Sol’s coding index maximum effort is not the maximum score. Then put your tier next to whatever else lists around that price: at Sol’s $30 there is a higher-scoring model for $5 less, and at Terra’s $15 there is one that ships its weights.

Composite indices from [Artificial Analysis](https://artificialanalysis.ai/): Intelligence and Coding are both composite scores aggregated from individual benchmarks, not single measurements. Prices, throughput and time to first token fused by olud.ai from public sources and rebuilt every morning. Figures in this article were read from the snapshot of 28 July 2026, covering 874 measured models — check the [live leaderboard](https://olud.ai/leaderboard.html) for today’s.
