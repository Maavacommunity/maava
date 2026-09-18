import { ToolCard } from "@/components/ToolCard";
import { tools, getCategories } from "@/lib/tools";

export default function HomePage() {
  const categories = getCategories();

  return (
    <main>
      <section style={{ padding: "72px 0 48px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="pill" style={{ marginBottom: 18 }}>
            The gap between &ldquo;I found this tool&rdquo; and &ldquo;it&rsquo;s running&rdquo;
          </span>
          <h1 style={{ fontSize: 44, lineHeight: 1.15, maxWidth: 640, margin: "0 0 16px" }}>
            The app store for <span style={{ color: "var(--accent)" }}>AI tools &amp; agents</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.6, margin: "0 0 28px" }}>
            Saw an AI agent on Reels or TikTok? Find it here, learn how it works in minutes, and
            install it on your desktop with one click — no Python, no dependency hell.
          </p>
          <div style={{ display: "flex", gap: 12 }} id="download">
            <a className="btn btn-primary" href="#library">
              Download Desktop Client
            </a>
            <a className="btn btn-secondary" href="#trending">
              Browse Trending Tools
            </a>
          </div>
        </div>
      </section>

      <section id="trending" style={{ padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, margin: 0 }}>Trending Agent Index</h2>
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{tools.length} tools listed</span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {categories.map((category) => (
              <span
                key={category}
                style={{
                  fontSize: 12.5,
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                {category}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section id="tutorials" style={{ padding: "48px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <h2 style={{ fontSize: 22, marginBottom: 20 }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { step: "1", title: "Spot it", detail: "See an AI tool or agent in a reel, video, or post." },
              { step: "2", title: "Find it here", detail: "Search Maava and open the tool's tutorial." },
              { step: "3", title: "Watch & learn", detail: "A short video or written guide gets you up to speed." },
              { step: "4", title: "1-click install", detail: "The desktop app installs it and every dependency it needs." },
            ].map((item) => (
              <div key={item.step} style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 18, background: "var(--bg-card)" }}>
                <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                  STEP {item.step}
                </div>
                <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.5 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="library" style={{ padding: "48px 0 80px", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 22, marginBottom: 10 }}>Your installed agents live in the Desktop Library</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.6, fontSize: 14 }}>
            Install the Maava desktop app for Windows, macOS, or Linux to manage, launch, and update
            every agent you&apos;ve installed from one place.
          </p>
          <a className="btn btn-primary" href="#download">
            Download Desktop Client
          </a>
        </div>
      </section>
    </main>
  );
}
