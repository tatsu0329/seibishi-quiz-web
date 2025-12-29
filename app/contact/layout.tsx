import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seibishi-quiz-web.vercel.app';

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "整備士クイズへのお問い合わせ。ご質問、ご意見、ご要望がございましたら、お気軽にお問い合わせください。",
  openGraph: {
    title: "お問い合わせ | 整備士クイズ",
    description: "整備士クイズへのお問い合わせ。ご質問、ご意見、ご要望がございましたら、お気軽にお問い合わせください。",
    url: `${baseUrl}/contact`,
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


