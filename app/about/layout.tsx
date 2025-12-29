import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seibishi-quiz-web.vercel.app';

export const metadata: Metadata = {
  title: "このサイトについて",
  description: "整備士クイズについて。自動車整備士資格試験の過去問題を無料で学習できるWebアプリケーションの機能や使い方をご紹介します。",
  openGraph: {
    title: "このサイトについて | 整備士クイズ",
    description: "整備士クイズについて。自動車整備士資格試験の過去問題を無料で学習できるWebアプリケーションの機能や使い方をご紹介します。",
    url: `${baseUrl}/about`,
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

