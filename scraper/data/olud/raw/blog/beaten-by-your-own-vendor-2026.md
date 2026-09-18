# Two thirds of paid AI models are beaten by a cheaper model from the same vendor | olud.ai

> 50 of 76 closed AI models are beaten by a cheaper model from the same vendor, on both input and output price. OpenAI 33, Anthropic 10, Google 6. Measured on olud.ai, 2 August 2026.

_Source: https://olud.ai/blog/beaten-by-your-own-vendor-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Vendor pricing

Pricing analysis

## Two thirds of paid AI models are beaten by a cheaper model from the same vendor

Of the 76 closed models we price and score, 50 are outperformed by another model from the *same* company that also costs less — less on input and less on output. Nobody sends you an email when that happens.

Updated 2 August 2026·7 min read·No paywall

### TL;DR — the short version

**50 of the 76 closed models we track are dominated by a stablemate.** Same vendor, higher intelligence score, lower price on *both* input and output. That is 66 %.

**The worst gap is 20×.** [o1-pro](https://olud.ai/model/o1-pro.html) still lists at $600 per million output tokens. [GPT-5.6 Sol](https://olud.ai/model/gpt-5-6-sol.html), from the same company, costs $30 and scores 40 points higher.

**Six of the 50 are beaten by their vendor's own open-weight model.** The cheaper, better option is one you can download.

An API price list is not a recommendation. It is an archive. Vendors add models constantly and retire them almost never, so the endpoint you wired in eighteen months ago sits in the documentation next to its own replacement, at its original price, indefinitely.

We price and score every model in the catalogue each morning. So we asked a mechanical question with no room for opinion in it: **for each paid model, does the same vendor sell something that scores higher on our intelligence index *and* costs less per million tokens on input *and* on output?**

Not cheaper on average. Not better on one benchmark. Strictly better and strictly cheaper on every axis at once — the case where there is no trade-off left to argue about.

The answer, on 2 August 2026: **50 out of 76**.

### The 20× case

The largest gap in the catalogue belongs to OpenAI. [o1-pro](https://olud.ai/model/o1-pro.html) is still listed at $150 in and $600 out per million tokens. [GPT-5.6 Sol](https://olud.ai/model/gpt-5-6-sol.html), from the same vendor, is $5 in and $30 out — and it scores 58.9 on our intelligence index against o1-pro's 18.9.

o1-pro at $600 per million output tokens against GPT-5.6 Sol at $30
o1-pro at $600 per million output tokens against GPT-5.6 Sol at $30
o1-pro at $600 per million output tokens against GPT-5.6 Sol at $30

Thirty times cheaper on input, twenty times cheaper on output, forty points higher. There is no workload where o1-pro is the right answer today, and yet nothing in OpenAI's pricing page says so.

A caveat we owe you: o1-pro carries no coding score in our data, so we make no claim about its coding ability. The intelligence index is what we measured, and it is what the comparison rests on.

### It is not only OpenAI

The pattern holds wherever a vendor ships fast. Anthropic's [Claude Opus 4.7 (Fast)](https://olud.ai/model/claude-opus-4-7-fast.html) lists at $30 in and $150 out. [Claude Opus 5](https://olud.ai/model/claude-opus-5.html) costs $5 and $25 — six times less on output — and scores 60.7 against 53.5.

Claude Opus 4.7 Fast at $150 against Claude Opus 5 at $25
Claude Opus 4.7 Fast at $150 against Claude Opus 5 at $25
Claude Opus 4.7 Fast at $150 against Claude Opus 5 at $25

Across the catalogue the 50 dominated models break down like this:

| Vendor | Models beaten by a cheaper stablemate |
| --- | --- |
| OpenAI | 33 |
| Anthropic | 10 |
| Google | 6 |
| Perplexity | 1 |

OpenAI dominates this table partly because it has the longest catalogue — the o1, o3, o4 and GPT-5.x families all coexist. Volume of releases is the cause, not carelessness. But the effect on a customer's invoice is identical either way.

### Six times, the answer is an open-weight model

Six of the 50 are beaten only by a model their own vendor released with open weights. Google's [Gemini 2.5 Flash](https://olud.ai/model/gemini-2-5-flash.html) is one: $0.30 in, $2.50 out, 14.1 on the index. Google's own [Gemma 4 31B](https://olud.ai/model/gemma-4-31b.html) is $0.10 and $0.34 at the cheapest host, and scores 29.4.

That is a strange thing for a price list to contain. The vendor is selling you an API for a model that its own free-to-download release outperforms at a seventh of the price. It is also, if you are running the invoice, the easiest saving on this page: the weights are public, so you can host them yourself or pick any provider you like.

### What to actually do
- **Check the model you pinned, not the one you read about.** Most of these 50 are still in production somewhere, in code written when they were the best available.
- **Watch for the mid-tier trap.** Seven models — the o3 Mini, o4 Mini and GPT-5.4 Mini families — are beaten by [GPT-5.6 Luna](https://olud.ai/model/gpt-5-6-luna.html) at $0.10 / $0.60. Small and old is not the same as cheap.
- **Do not assume the flagship is the best model the vendor sells.** On these measures it frequently is not.

You can run the comparison yourself on any two models in the catalogue from the [model comparison page](https://olud.ai/compare/), or browse the [full leaderboard](https://olud.ai/#leaderboard).

### Method, so you can argue with it

Prices are dollars per million tokens as published by the vendor for closed models, and as listed by the cheapest available host for open-weight models. Intelligence is our daily benchmark fusion, rebuilt every morning; the figures above are from the file generated on 2 August 2026 and will drift as models are added.

We excluded two things deliberately. **Free tiers**, because a $0 price makes every ratio infinite and tells you nothing. **Batch pricing**, because a batch tier is a discount on the same model, not a different product — counting it would have inflated the result to 69 of 103. The stricter number, 50 of 76, is the one we stand behind.

Every figure here is recomputed daily. If a vendor cuts a price tomorrow, the model leaves this list, and the [leaderboard](https://olud.ai/#leaderboard) will show it before we do.
