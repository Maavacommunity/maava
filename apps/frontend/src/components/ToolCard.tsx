import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      style={{
        display: "block",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 18,
        transition: "border-color 0.15s ease, transform 0.1s ease",
      }}
      className="tool-card"
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span className="pill">{tool.category}</span>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>★ {tool.rating.toFixed(1)}</span>
      </div>

      <h3 style={{ margin: "0 0 4px", fontSize: 17 }}>{tool.name}</h3>
      <p style={{ margin: "0 0 12px", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.5 }}>
        {tool.tagline}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
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

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)" }}>
        <span>{tool.installs} installs</span>
        <span className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: 12 }}>
          1-Click Install →
        </span>
      </div>
    </Link>
  );
}
