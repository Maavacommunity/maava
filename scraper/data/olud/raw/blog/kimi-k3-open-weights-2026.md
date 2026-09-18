# Kimi K3 is open-weight, and that is not the same as runnable | olud.ai

> Kimi K3 scores 57.1 on intelligence at $15 per million output tokens, ahead of GPT-5.6 Terra at the same price. It also has 2.8 trillion parameters. What open weights costs once you read both numbers.

_Source: https://olud.ai/blog/kimi-k3-open-weights-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Open weights

Open weights

## Kimi K3 is open-weight — and that is not the same as runnable

It scores 57.1 on intelligence at $15 per million output tokens, ahead of GPT-5.6 Terra at the same price and 1.8 points behind GPT-5.6 Sol, which costs twice as much. Then you read the parameter count: 2.8 trillion.

Updated 28 July 2026·9 min read·No paywall

### TL;DR — the short version

**Kimi K3 scores 57.1 on intelligence for $15 per million output tokens.** GPT-5.6 Terra costs the same $15 and scores 55.0. GPT-5.6 Sol scores 58.9 and costs $30.

**The weights are published. The model has 2.8 trillion parameters.** Both facts sit in the same catalogue entry, and together they are the article: open weights tells you what you may hold, not what you are equipped to run.

**The bill arrives as latency:** 32.9 tokens per second and 125.71 seconds to first token, the slowest throughput of the six models at the top of our board.

### The numbers, this morning

Moonshot AI released Kimi K3 on 16 July 2026. Everything below was read on 28 July from our daily benchmark fusion, sourced from Artificial Analysis. Intelligence and Coding are composite indices; price, throughput and time to first token we track ourselves. Each row is the vendor’s top-effort configuration, which matters later.

| Model | Intelligence | Coding | $ / 1M out | Tokens / s | First token | Weights |
| --- | --- | --- | --- | --- | --- | --- |
| **Claude Opus 5** | 60.7 | 78.0 | $25 | 62.8 | 31.35 s | Closed |
| **Claude Fable 5** | 59.9 | 76.5 | $50 | 71.3 | 80.07 s | Closed |
| **GPT-5.6 Sol** | 58.9 | 77.4 | $30 | 90.2 | 87.13 s | Closed |
| **Kimi K3** | 57.1 | 76.2 | $15 | 32.9 | 125.71 s | **Open** |
| **GPT-5.6 Terra** | 55.0 | 76.7 | $15 | 165.4 | 151.8 s | Closed |
| **GPT-5.6 Luna** | 51.2 | 71.4 | $6 | 220.4 | 84.29 s | Closed |

One row ships its weights. It is the fourth row and not the last, and it is priced in the middle of the board rather than at the bottom. Both of those are new, and both cost something.

### At $15 it outscores the $15 model

GPT-5.6 Terra and Kimi K3 both cost $15 per million output tokens. Terra scores **55.0** on intelligence, Kimi K3 scores **57.1**: 2.1 points to the open-weight model at an identical output price, with an input side too close to decide anything at $2.50 against $3.

The comparison one step up is the one that should worry a vendor. GPT-5.6 Sol scores **58.9** for **$30** per million output tokens — 1.8 points for double the price. Those 1.8 points are real on hard reasoning, but they are now a line item you can cost rather than a reason to stop shopping. Coding is the one index that goes the other way at the same price: Terra 76.7 against Kimi K3’s 76.2.

Kimi K3, GPT-5.6 Terra and GPT-5.6 Sol: output price per million tokens

The three models that frame the question: same price as Terra, half the price of Sol. Redrawn daily from live pricing.

### Where it wins, and where it does not

A composite index averages away the variance that decides real work, so here are the individual benchmarks. Our snapshot carries nine for this tier and Kimi K3 has a result on six, with none on IFBench, Terminal-Bench Hard or τ²-Bench — also true of Claude Opus 5 and GPT-5.6 Luna, so read an empty cell as a gap in the measurement rather than a failure.

| Benchmark | Kimi K3 | Best of the other five |
| --- | --- | --- |
| **Long Context Reasoning** | **74.7** | 74.0 · GPT-5.6 Terra and Luna |
| **τ-Bench Banking** | **33.4** | 33.0 · GPT-5.6 Sol |
| **GPQA** | 93.5 | 94.1 · GPT-5.6 Sol |
| **SciCode** | 58.7 | 60.2 · Claude Fable 5 |
| **Terminal-Bench** | 85.0 | 89.1 · Claude Opus 5 |
| **Humanity’s Last Exam** | 44.3 | 53.3 · Claude Fable 5 |

Two firsts, and not the decorative kind. **Long Context Reasoning 74.7** is the best of the six, ahead of both GPT-5.6 variants at 74.0 and clear of Opus 5 and Fable 5, which both sit at 70. **τ-Bench Banking 33.4** beats Sol’s 33.0, which puts the open-weight model at the head of the frontier set on a multi-turn task with tools — the workload every closed vendor aims its marketing at.

GPQA is a tie in practice, 93.5 against 94.1. The three losses are more informative: SciCode 58.7 is 1.5 points below Claude Fable 5, Terminal-Bench 85.0 is 4.1 points below Opus 5, and Humanity’s Last Exam 44.3 is 9.0 points below Fable 5. If your work looks like the hardest end of unassisted reasoning, that nine-point gap is what the open row costs you.

The shape matters more than the rank: strongest where the context is long and the task is agentic, weakest on hard single-shot reasoning. A score of 57.1 cannot tell you that.

### Then you read the parameter count

Our catalogue entry describes Kimi K3 as “a 2.8T parameter open-weight multimodal reasoning model”. That is **2.8 trillion parameters**, and it reorganises everything above.

It is also the only parameter count in this article, which is not an oversight. No closed model here publishes one, so the comparison cannot be made at all. You get the number precisely because the weights are open — the first thing open weights actually buys you is knowing how large the thing is before you commit to it.

The second thing it buys you is a download. It does not buy the machine that holds the download in memory, and at this size that machine is the whole project. We publish no hardware estimate and you should distrust any single figure you are handed, because the honest answer depends on quantisation, batch size, interconnect and the latency you will tolerate — four decisions that are yours, not the publisher’s.

### Open weights is a permission, not a deployment

Three claims get collapsed into the phrase, and separating them is most of the work of choosing.

**Open weights does not mean free.** Kimi K3 is served at $3 in and $15 out per million tokens, a frontier price rather than a commodity one. Whoever serves those weights still pays for hardware that holds 2.8 trillion parameters, and that cost lands in the price no matter who publishes the checkpoint.

**Open weights does not mean self-hostable at your scale.** For a seven-billion-parameter model the two are near enough the same sentence. At 2.8 trillion they are different projects with different budgets, and self-hosting stops being a licence question and becomes a capacity-planning one.

**Open weights describes availability, not a licence grant.** Our data records this model as open-weight and nothing more precise, so if your reason for wanting the weights is legal — audit, redistribution, fine-tuning rights, a jurisdiction that forbids sending prompts abroad — the terms attached to the checkpoint are the document you need, and a benchmark table is no substitute for reading them.

What survives those three subtractions is still substantial: you can inspect the model, pin a version no vendor can deprecate under you, and run it somewhere of your choosing if you can afford the somewhere. For some buyers that risk profile is the only thing on this page that matters.

### The price you actually pay is throughput

Kimi K3 generates **32.9 tokens per second**. In the same snapshot Opus 5 runs at 62.8, Sol at 90.2, Terra at 165.4 and Luna at 220.4. Terra is five times faster; Luna is nearly seven times faster.

An agent makes this worse than a chat window does, because it does not produce one long answer — it produces a short one, calls a tool, reads the result and produces another. Multiply the penalty across twenty round trips and the intelligence index stops being the deciding number.

Time to first token points the same way, with one honest caveat. Kimi K3 takes **125.71 seconds** to start, against 31.35 for Opus 5 and 87.13 for Sol — but Terra at top effort takes 151.8, which is worse. So these figures belong to maximum-effort reasoning configurations rather than to Kimi K3 specifically, and that sets up the real difference.

Kimi K3, Claude Opus 5 and GPT-5.6 Luna: output price per million tokens

The three corners of the trade, chosen on purpose: Opus 5 the highest score at $25, Luna the fastest at 220.4 tokens per second and $6, Kimi K3 the open row at $15. Price tells you none of the rest.

### The closed models ship a latency dial

Our snapshot carries five effort tiers for Claude Opus 5 and six for each GPT-5.6 variant. Kimi K3 appears as a single row.

That asymmetry is worth money, because the tiers are a documented trade of score against time. Sol at high effort scores **55.9** and starts in **8.65 seconds**. Terra at xhigh scores 51.6 in 9.55 seconds. Opus 5 at low effort scores 50.6 in 3.01 seconds. So the fair comparison for a latency-bound service is not Kimi K3 against Sol at maximum effort; it is 57.1 in 125.71 seconds against 55.9 in 8.65 seconds. Give up 1.2 points of index and start fourteen times sooner.

For an overnight batch job the dial is worth nothing and the open row wins on price. With a person or an agent loop waiting at the other end, the dial is worth more than the 1.8 points between Kimi K3 and Sol.

### A million tokens of context, and what it is worth

The catalogue entry lists a context window of **1,048,576 tokens**, modality text+image→text, and tool calling supported. The benchmark backs the window rather than merely asserting it: 74.7 on Long Context Reasoning is the best of the six, which is the evidence you want before trusting a million-token prompt with anything.

Be clear about what the $15 buys, though. Twenty-nine other entries in the same 184-model catalogue list a window of one million tokens or more, and twenty-eight of them charge less than $15 per million output tokens — the median is $0.98, and fifteen are under $1. A very large window is no longer a premium feature. What the $15 buys is the 57.1, the 33.4 on banking and the 93.5 on GPQA — reasoning that holds up across the window, not the window itself.

#### These numbers change every morning

Prices, context windows and benchmark indices for hundreds of models, rebuilt daily. Free, no sign-up.

[Open the comparator →](https://olud.ai/compare/)

### How to choose

**You need the weights in your hands.** Kimi K3, and budget for 2.8 trillion parameters rather than for a download. Do the capacity work first, and read the terms attached to the checkpoint if the reason is legal rather than technical.

**You want the top of the board and cost is secondary.** Claude Opus 5, at 60.7 and 78.0 for $25 per million output tokens, and the quickest top-effort configuration to start at 31.35 seconds.

**Your agent loop is latency-bound.** GPT-5.6 Sol at high effort — 55.9 in 8.65 seconds — or Terra’s 165.4 tokens per second if sustained generation is the bottleneck. For high volume on ordinary tasks, GPT-5.6 Luna at $6 and 220.4 tokens per second scores 51.2, which is headroom you already have for classification and extraction.

**Long documents and multi-turn tool use.** Kimi K3 again, on the two benchmarks it leads at 74.7 and 33.4. If you can absorb the throughput, this is the workload where it is not a compromise at all.

### The bottom line

An open-weight model now beats a closed one at the same price and comes within 1.8 points of a model that costs double, while leading the frontier set on long-context reasoning and on a realistic banking-agent task. That is what the leaderboard says, and it is true.

The catalogue entry tells the other half: 2.8 trillion parameters, 32.9 tokens per second, 125.71 seconds before the first token. The weights are yours to hold; the machine is not included and the latency is not optional, and neither shows up in a score of 57.1. Open weights has stopped being a compromise on capability and become a decision about infrastructure — a much more interesting problem to have.

Intelligence and Coding are composite indices from [Artificial Analysis](https://artificialanalysis.ai/), as are the individual benchmark results. Prices, throughput, time to first token, context windows and parameter counts are fused by olud.ai from public sources and rebuilt every morning. Figures here were read from a snapshot of 874 models taken on 28 July 2026 at 05:30 CEST — check the [live leaderboard](https://olud.ai/leaderboard.html) for today’s.
