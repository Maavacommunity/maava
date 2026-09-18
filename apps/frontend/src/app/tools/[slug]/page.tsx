import Link from "next/link";
import { notFound } from "next/navigation";
import { getToolBySlug, tools } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const deepLink = `maava://install/${tool.slug}`;

  return (
    <main className="container" style={{ padding: "40px 0 80px" }}>
      <Link href="/" style={{ fontSize: 13, color: "var(--text-muted)" }}>
        ← Back to Discover
      </Link>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, marginTop: 20, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span className="pill">{tool.category}</span>
            {tool.verified && (
              <span style={{ fontSize: 12, color: "var(--accent-2)" }}>✓ Verified one-click installer</span>
            )}
          </div>
          <h1 style={{ fontSize: 32, margin: "0 0 8px" }}>{tool.name}</h1>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 16px" }}>
            {tool.tagline}
          </p>
          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.7 }}>{tool.description}</p>
          <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--text-muted)", marginTop: 16 }}>
            <span>★ {tool.rating.toFixed(1)}</span>
            <span>{tool.installs} installs</span>
            <span>by {tool.author}</span>
            <span>runtime: {tool.runtime}</span>
          </div>
        </div>

        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 20,
            minWidth: 260,
          }}
        >
          <a className="btn btn-primary" href={deepLink} style={{ width: "100%", marginBottom: 10 }}>
            Install &amp; Launch in Desktop
          </a>
          <p style={{ fontSize: 11.5, color: "var(--text-muted)", lineHeight: 1.5, margin: "0 0 12px" }}>
            Opens the Maava desktop app and installs {tool.name} automatically. Don&apos;t have it
            yet? <Link href="/#download" style={{ color: "var(--accent)" }}>Download it first</Link>.
          </p>
          {tool.repoUrl && (
            <a
              className="btn btn-secondary"
              href={tool.repoUrl}
              target="_blank"
              rel="noreferrer"
              style={{ width: "100%" }}
            >
              View Source
            </a>
          )}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginTop: 40 }}>
        <div>
          <h2 style={{ fontSize: 18, marginBottom: 14 }}>Tutorial</h2>
          <div
            style={{
              aspectRatio: "16 / 9",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              fontSize: 13,
              marginBottom: 20,
            }}
          >
            {tool.videoTutorialUrl ? "▶ Video tutorial" : "Written guide only"}
          </div>

          <ol style={{ padding: 0, listStyle: "none", margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {tool.tutorialSteps.map((step, i) => (
              <li
                key={step.title}
                style={{
                  display: "flex",
                  gap: 14,
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: 14,
                  background: "var(--bg-card)",
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{step.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{step.detail}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 style={{ fontSize: 18, marginBottom: 14 }}>Dependency Inspector</h2>
          <div style={{ border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-card)", overflow: "hidden" }}>
            {tool.dependencies.map((dep, i) => (
              <div
                key={dep.label}
                style={{
                  padding: "12px 16px",
                  borderBottom: i < tool.dependencies.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{dep.label}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{dep.detail}</div>
              </div>
            ))}
            <div style={{ padding: "10px 16px", fontSize: 11.5, color: "var(--accent-2)", background: "rgba(52,211,153,0.08)" }}>
              Auto-managed — Maava handles all of this for you.
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
            {tool.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 11,
                  padding: "3px 8px",
                  borderRadius: 6,
                  background: "var(--bg-elevated)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
