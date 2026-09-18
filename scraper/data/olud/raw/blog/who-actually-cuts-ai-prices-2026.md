# Open-weight model prices go up more often than they go down | olud.ai

> Daily price tracking of 63 AI models: 34 open-weight models got more expensive, 13 got cheaper. GLM 5.2 changed price 22 times in 25 days. Why the listed price of an open model is not a decision anyone made.

_Source: https://olud.ai/blog/who-actually-cuts-ai-prices-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Price movements

Price tracking

## Open-weight model prices go up more often than they go down

We have been recording the price of every model in the catalogue every day. Among open-weight models, 34 went up and 13 went down. Among closed models, three moved — all of them OpenAI, all of them downward, all in the same 48 hours.

Updated 2 August 2026·6 min read·No paywall

### TL;DR — the short version

**Among the 60 open-weight models with enough price history, 34 got more expensive and 13 got cheaper.** The remaining 13 did not move.

**Among closed models, exactly three moved — all OpenAI, all down, all within 48 hours.** [GPT-5.6 Luna](https://olud.ai/model/gpt-5-6-luna.html) fell 90 %, from $6 to $0.60 per million output tokens.

**This is not vendors being greedy.** The listed price of an open model is whatever the cheapest host happens to charge today. When that host stops serving it, the price jumps and nobody decided anything.

“Open weights are cheaper” is one of those claims everyone repeats and nobody checks over time. So we checked. Since late June we have recorded the listed price of every model in the catalogue, every day, and stored the series.

Sixty-three models now have enough history to say something. The result was not what we expected.

### The closed side: three moves, all downward

Only three closed models changed price in the whole window, and all three belong to OpenAI. [GPT-5.6 Luna](https://olud.ai/model/gpt-5-6-luna.html) went from $1 / $6 on 12 July to $0.50 / $3 on 30 July, then to $0.10 / $0.60 on 31 July. That is a 90 % cut in nineteen days, in two steps, the second one overnight. [Luna Pro](https://olud.ai/model/gpt-5-6-luna-pro.html) followed the same path. [GPT-5.6 Terra](https://olud.ai/model/gpt-5-6-terra.html) went from $15 to $6 on output over the same 48 hours.

Everything else on the closed side sat perfectly still. [GPT-5.6 Sol](https://olud.ai/model/gpt-5-6-sol.html) has been $5 / $30 since 11 July and has not twitched.

GPT-5.6 Luna, Terra and Sol output prices after the July cuts
GPT-5.6 Luna, Terra and Sol output prices after the July cuts
GPT-5.6 Luna, Terra and Sol output prices after the July cuts

That is what a price decision looks like when a company makes one: rare, large, deliberate, and applied to a family at once.

### The open side: constant motion, mostly upward

Now the other 60. Thirty-four ended the window more expensive than they started. Thirteen ended cheaper. Thirteen did not move.

The biggest riser is Qwen3 235B A22B Thinking: $0.10 per million output tokens on 29 June, $2.30 on 1 August. That is not a 2,200 % price hike announced by Alibaba. It is a launch listing on one very cheap host that later stopped being the cheapest option.

Which brings us to the chart that explains the whole article.

GLM 5.2, cheapest listed host, 29 June to 2 August 2026. The price changed 22 times, ranging from $0.70 to $3.52 per million output tokens, and nobody at Z.ai decided any of it.

This is [GLM 5.2](https://olud.ai/model/glm-5-2.html), one model, one set of weights, over 25 daily readings. It changed price 22 times. It touched $0.70 on 20 July and $3.52 on 1 August — a five-fold range in twelve days — and finished at $1.32.

Nobody at Z.ai did any of that.

### Why the number moves on its own

For a closed model, there is one seller. The price is a decision, published on a pricing page, changed when the company chooses.

For an open-weight model, there is no seller — there are hosts. Anyone can download the weights and serve them, and dozens do. The figure we list is the cheapest one available at the moment we look. So the number moves when:
- a host runs a launch promotion, then ends it;
- the cheapest host runs out of capacity and stops accepting traffic;
- a new host undercuts everyone and becomes the new floor;
- a quantised variant appears at a fraction of the full-precision price.

None of those are decisions about the model. They are weather.

### What this means if you are the one paying

Both halves of the received wisdom survive, but they need re-stating.
- **Open weights are still cheaper.** GLM 5.2 at its worst reading, $3.52, is still an eighth of what a frontier closed model costs on output.
- **But a listed open price is not a commitment.** If you built a margin on $0.70 you had a bad fortnight. Budget against the ceiling you have observed, not the floor.
- **The real hedge is the licence, not the number.** The weights are public: if every host gets expensive, you can serve the model yourself. That option is the thing you are actually buying, and it does not fluctuate.
- **On the closed side, watch for the cliff.** Luna lost 90 % of its price in nineteen days. If you signed off on a cost model in mid-July, it is wrong now — in your favour.

### Method

One reading per model per day, taken from the published vendor price for closed models and from the cheapest listed host for open-weight ones. A model enters this analysis once it has at least two readings; 63 of the 339 tracked models qualified. Alias entries — identifiers that point at “whatever the latest version is” rather than at a fixed model — were excluded, because their price jumps whenever the alias is repointed and that would be a different article.

Percentages compare the first reading to the last, not the minimum to the maximum. For GLM 5.2 that convention reports −56 %, which is true and also, as the chart shows, not the interesting part.

The series keeps growing. You can see today's prices for any model on the [leaderboard](https://olud.ai/#leaderboard) or on its own page.
