import Link from "next/link";

export function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        background: "rgba(11, 14, 20, 0.85)",
        backdropFilter: "blur(8px)",
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: 24,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 18 }}>
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
            }}
          />
          Maava
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 14, color: "var(--text-muted)" }}>
          <Link href="/">Discover</Link>
          <Link href="/#tutorials">Tutorials &amp; Docs</Link>
          <Link href="/#library">Desktop Library</Link>
        </nav>

        <div style={{ marginLeft: "auto" }}>
          <a className="btn btn-primary" href="#download">
            Download Desktop Client
          </a>
        </div>
      </div>
    </header>
  );
}
