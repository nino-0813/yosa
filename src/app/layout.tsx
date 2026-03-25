import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "養生サロン ONZA 本格よもぎ蒸し専門店「温座」",
  description:
    "天然薬草の蒸気で体内深部をやさしく温めながら女性特有の悩みをケアし、体質改善を目指すお店です。",
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
