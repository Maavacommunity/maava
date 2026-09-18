import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maava",
  description: "Maava frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
