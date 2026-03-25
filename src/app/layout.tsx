import type { Metadata } from "next";
import "./globals.css";

const siteName = "LARIMAR本格よもぎ蒸し専門店";
const siteDescription =
  "ハーブ蒸で体内深部をやさしく温めながら女性特有の悩みをケアし内側から整えていく温活です";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
