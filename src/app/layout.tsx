import type { Metadata } from "next";
import "./globals.css";

/** ブラウザタブ・OGP のメインタイトル */
const siteName = "LARIMAR本格よもぎ蒸し専門店";
/** LINE 等でタイトル下に出る短いサイト名（og:site_name） */
const ogSiteName = "LARIMAR｜ラリマー";
const siteDescription =
  "ハーブ蒸で体内深部をやさしく温めながら女性特有の悩みをケアし内側から整えていく温活です";

export const metadata: Metadata = {
  applicationName: ogSiteName,
  title: siteName,
  description: siteDescription,
  openGraph: {
    siteName: ogSiteName,
    title: siteName,
    description: siteDescription,
    type: "website",
    locale: "ja_JP",
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
