import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// AdSenseのパブリッシャーID
const ADSENSE_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-6569958937383358";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://seibishi-quiz-web.vercel.app";
const siteName = "整備士クイズ";
const defaultDescription =
  "自動車整備士資格試験の過去問題集。国家1級・2級・3級の過去問題を無料で学習できます。問題のシャッフル、間違えた問題の復習、ブックマーク機能など、効率的な学習をサポートします。";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "自動車整備士",
    "整備士試験",
    "国家資格",
    "過去問題",
    "1級整備士",
    "2級整備士",
    "3級整備士",
    "整備士クイズ",
    "資格試験対策",
    "自動車整備",
  ],
  authors: [{ name: "整備士クイズ" }],
  creator: "整備士クイズ",
  publisher: "整備士クイズ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: baseUrl,
    siteName: siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Consoleの検証コードを追加する場合はここに
    google: "iGf-PF9uOWYiJU0QpuGr559zSe4duSwiDVj9cL1niMs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Google AdSense - headタグ内に配置（Next.js App Router対応） */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics - Next.js Scriptコンポーネントを使用 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XKBK5DTP9T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKBK5DTP9T');
          `}
        </Script>

        <ThemeProvider>
          {children}
          {/* 構造化データ（JSON-LD） */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: siteName,
                description: defaultDescription,
                url: baseUrl,
                applicationCategory: "EducationalApplication",
                operatingSystem: "Any",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "JPY",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.5",
                  ratingCount: "100",
                },
                author: {
                  "@type": "Organization",
                  name: "整備士クイズ",
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteName,
                url: baseUrl,
                description: defaultDescription,
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${baseUrl}/?q={search_term_string}`,
                  },
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOccupationalCredential",
                name: "自動車整備士資格試験",
                description:
                  "国家資格である自動車整備士（1級・2級・3級）の資格試験対策",
                credentialCategory: "Professional Certification",
                recognizedBy: {
                  "@type": "Organization",
                  name: "国土交通省",
                },
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
