# Opus 5 vs Fable 5: the newer model wins and costs half as much | olud.ai

> Claude Opus 5 scores 60.7 on intelligence at $25 per million output tokens. Claude Fable 5 scores 59.9 at $50. Fable 5 still wins two benchmarks, and the effort dial inside Opus 5 matters more than either.

_Source: https://olud.ai/blog/opus-5-vs-fable-5-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Opus 5 vs Fable 5

Model comparison

## Opus 5 against Fable 5 — newer, better, half the price

Claude Opus 5 shipped forty-five days after Claude Fable 5. It scores higher on both composite indices and costs exactly half as much per token. That should not happen, and the reason it does is more interesting than the ranking.

Updated 28 July 2026·9 min read·No paywall

### TL;DR — the short version

**Opus 5 scores 60.7 on intelligence and 78.0 on coding for $5 in and $25 out per million tokens. Fable 5 scores 59.9 and 76.5 for $10 in and $50 out.** Same vendor, newer model, 2× the price for fewer points.

**Fable 5 is not beaten everywhere.** It is quicker in sustained throughput at 71.3 tokens per second against 62.8, and it wins Humanity’s Last Exam and SciCode outright.

**The setting matters more than the model.** Opus 5 at medium effort already scores 56.3, above Opus 4.8 at its maximum effort, and it starts answering in 9.83 seconds instead of 37.44. That dial moves your latency and your bill further than the choice between these two models does.

### The two models, side by side

Both figures below come from the same daily snapshot, read at 05:30 on 28 July 2026 across 874 measured models. Intelligence and Coding are composite indices from Artificial Analysis; throughput, time to first token and price we track alongside them. Prices are dollars per million tokens.

| Metric | Claude Opus 5 | Claude Fable 5 |
| --- | --- | --- |
| **Released** | 24 July 2026 | 9 June 2026 |
| **Intelligence** | 60.7 | 59.9 |
| **Coding** | 78.0 | 76.5 |
| **$ / 1M input** | $5 | $10 |
| **$ / 1M output** | $25 | $50 |
| **Tokens / s** | 62.8 | 71.3 |
| **Time to first token** | 31.35 s | 80.07 s |

The price line is worth reading twice. It is not roughly half, it is exactly half: $5 against $10 on input, $25 against $50 on output. Nothing in the two score columns justifies that ratio — the gap is **0.8 points of intelligence** and **1.5 points of coding**, both in favour of the cheaper model.

Claude Opus 5 versus Claude Fable 5: intelligence score and output price per million tokens

Two models from the same vendor, forty-five days apart. Redrawn daily from live pricing.

One caveat before the benchmarks: both models run an adaptive-reasoning configuration, so neither is a plain single-pass model. The Opus 5 column is its maximum-effort setting, one of five we track; Fable 5 has a single measured configuration, which scores 59.9. That last point becomes the whole argument further down.

### The benchmark split is not one-sided

Composite indices are averages, and averages hide the shape of a model. Here is the same pair on the nine individual benchmarks in our snapshot.

| Benchmark | Claude Opus 5 | Claude Fable 5 |
| --- | --- | --- |
| **GPQA** | 93.2 | 92.6 |
| **Humanity’s Last Exam** | 52.6 | 53.3 |
| **Long Context Reasoning** | 70 | 70 |
| **SciCode** | 55.7 | 60.2 |
| **Terminal-Bench** | 89.1 | 84.6 |
| **Terminal-Bench Hard** | not measured | 62.9 |
| **IFBench** | not measured | 63.5 |
| **τ-Bench Banking** | 30.3 | 26.8 |
| **τ²-Bench** | not measured | 98.5 |

Opus 5 takes Terminal-Bench by 4.5 points, 89.1 against 84.6. It takes GPQA by 0.6, 93.2 against 92.6. And it takes τ-Bench Banking by 3.5, 30.3 against 26.8 — on a benchmark where the better of the two still gets under a third of a realistic banking-agent task right.

Fable 5 takes Humanity’s Last Exam, 53.3 against 52.6. And it takes SciCode by 4.5 points, 60.2 against 55.7 — the exact size of the gap Opus 5 opened on Terminal-Bench, in the other direction. On Long Context Reasoning they are identical at 70.

Three of the nine rows have no Opus 5 number at all: Terminal-Bench Hard, IFBench and τ²-Bench. Fable 5 posts 62.9, 63.5 and 98.5 on them. A missing measurement is not a low score and we will not treat it as one — but if your workload looks like instruction following or multi-turn tool use, Fable 5 is the one with published evidence and Opus 5 is the one you have to test yourself.

So the honest summary of the head-to-head is: Opus 5 wins the two composites and three of the six benchmarks where both are measured, Fable 5 wins two, one is a tie, and three are unresolved. That is a much narrower result than “the newer model is better,” and it still comes at half the price.

### Fable 5 is genuinely faster — and genuinely slower

Speed is two different numbers and they disagree here. Once Fable 5 is generating, it generates faster: **71.3 tokens per second against 62.8**, a lead of 8.5 tokens per second. But it takes far longer to say anything at all: **80.07 seconds to first token against 31.35**.

Which of those you care about depends entirely on what you are building. A batch pipeline that summarises ten thousand documents overnight cares about throughput and will finish sooner on Fable 5. A coding agent that makes forty sequential tool calls pays the first-token cost forty times, and on that shape of work Fable 5 starts 48.72 seconds later on every one of them, before a single token of useful output appears.

### The effort dial moves more than the model choice

Opus 5 exposes an effort setting, and each of its five tiers is measured separately. This is where the actual decision lives, because the spread inside Opus 5 is larger than the spread between Opus 5 and Fable 5.

| Setting | Intelligence | Coding | Tokens / s | Time to first token |
| --- | --- | --- | --- | --- |
| **Opus 5, max effort** | 60.7 | 78.0 | 62.8 | 31.35 s |
| **Opus 5, xhigh effort** | 60.1 | 77.0 | 56.9 | 22.36 s |
| **Opus 5, high effort** | 58.9 | 76.5 | 59.1 | 14.56 s |
| **Opus 5, medium effort** | 56.3 | 74.3 | 59.3 | 9.83 s |
| **Opus 5, low effort** | 50.6 | 66.9 | 59.7 | 3.01 s |
| **Opus 4.8, max effort** | 55.7 | 74.3 | 65 | 37.44 s |

Read the throughput column first, because it is the surprise. It barely moves: 62.8, 56.9, 59.1, 59.3, 59.7. Turning the effort down does not make Opus 5 generate faster. What collapses is time to first token, from **31.35 seconds at max to 3.01 seconds at low**. The effort setting is a thinking-time dial, not a speed dial.

Now the row that should change how you configure things. **Opus 5 at medium effort scores 56.3**. **Opus 4.8 at its maximum effort scores 55.7.** The new model, deliberately throttled to the middle of its range, is 0.6 points ahead of the previous generation running flat out — and it starts answering in 9.83 seconds instead of 37.44. On coding the two land on exactly the same figure, 74.3 against 74.3.

Claude Opus 5, Claude Fable 5 and Claude Opus 4.8: intelligence score against output price

Opus 5, Fable 5 and Opus 4.8 — two of the three share a price.

Opus 4.8 is priced identically to Opus 5, at $5 in and $25 out. So on this pair the upgrade is free in list price and worth 5 points of intelligence at the top of the range: 60.7 against 55.7. There is no version of the arithmetic where staying on 4.8 at max effort is the efficient choice.

### Opus 5 does not beat Fable 5 at every setting

The headline comparison uses Opus 5 at maximum effort, and that framing flatters it. Drop it one notch and the result reverses.

**Opus 5 at high effort (58.9) falls below Fable 5’s measured 59.9.** Configured that way, the cheaper newer model loses the composite by a point. On coding the two are level: 76.5 and 76.5.

The setting that actually wins the comparison on both axes is xhigh: **60.1 intelligence against 59.9, 77.0 coding against 76.5, first token in 22.36 seconds against 80.07**, at half the posted price. That is the configuration to quote if you are replacing Fable 5 in a running system — not max, which buys 0.6 more points of intelligence for nine more seconds of latency before output starts.

The effort tiers do not change the posted price per token, so the bill moves through how many tokens the model spends before it answers, not through the rate card. Our snapshot measures that spend indirectly, as time to first token, and across the five Opus 5 settings that runs from 31.35 seconds down to 3.01.

### What this means for a real invoice

Three practical conclusions, in the order a team usually needs them.

**If you are on Fable 5 today, move to Opus 5 at xhigh effort.** You gain 0.2 points of intelligence and 0.5 of coding, you cut first-token latency from 80.07 seconds to 22.36, and the rate card halves on both input and output. The one thing you give up is sustained throughput, 56.9 tokens per second against 71.3, which matters for bulk generation and not much else.

**If you are choosing a setting rather than a model, medium is the underrated one.** At 56.3 intelligence and 74.3 coding it is above the previous flagship’s ceiling, and 9.83 seconds to first token is inside the range where an interactive tool still feels responsive. Max effort exists for the problems where 4.4 points of index genuinely decide the outcome; most production traffic is not those problems.

**If your workload is instruction following or multi-turn tool use, benchmark it before you switch.** Fable 5 is the only one of the two with published numbers on IFBench, Terminal-Bench Hard and τ²-Bench. We are not going to infer Opus 5’s scores there from its composite, and neither should you.

#### These numbers change every morning

Prices, throughput and benchmark indices for 874 measured models, rebuilt daily. Free, no sign-up.

[Open the comparator →](https://olud.ai/compare/)

### The bottom line

A newer model that scores higher and costs exactly half as much is not a pricing error, it is what happens when a vendor ships two products for two different reasons forty-five days apart. Fable 5 keeps a real throughput lead and two benchmark wins. Opus 5 takes the composites, the terminal work and the latency.

But the number to remember from this article is not 60.7 against 59.9. It is 56.3 against 55.7, at 9.83 seconds against 37.44 — the previous flagship beaten by a mid-effort setting on the new one. The lever with the most leverage on your invoice is the one inside the model you already chose.

Composite indices from [Artificial Analysis](https://artificialanalysis.ai/), snapshot of 28 July 2026 at 05:30 CEST across 874 models. Intelligence and Coding are composite indices — each averages several underlying benchmarks, which is why the per-benchmark table above disagrees with them in places. Prices and throughput fused by olud.ai from public sources and rebuilt every morning; check the [live leaderboard](https://olud.ai/leaderboard.html) for today’s figures.
