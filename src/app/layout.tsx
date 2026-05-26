import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "lazycatzzzzz - 搞笑又好玩的支付产品经理",
  description: "个人主页 - 搞笑又好玩的支付产品经理，善于探索不可能中的可能",
  keywords: ["支付产品经理", "个人主页", "lazycatzzzzz", "电子宠物", "照片集"],
  authors: [{ name: "lazycatzzzzz" }],
  robots: "index, follow",
  openGraph: {
    title: "lazycatzzzzz - 搞笑又好玩的支付产品经理",
    description: "个人主页 - 搞笑又好玩的支付产品经理，善于探索不可能中的可能",
    url: siteUrl,
    siteName: "lazycatzzzzz 个人主页",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "lazycatzzzzz - 搞笑又好玩的支付产品经理",
    description: "个人主页 - 搞笑又好玩的支付产品经理，善于探索不可能中的可能",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
