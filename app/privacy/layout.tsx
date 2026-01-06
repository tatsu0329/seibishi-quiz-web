import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seibishi-quiz-web.vercel.app';

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "整備士クイズのプライバシーポリシー。個人情報の取り扱い、Cookieの使用、Google AdSenseについての詳細をご確認いただけます。",
  openGraph: {
    title: "プライバシーポリシー | 整備士クイズ",
    description: "整備士クイズのプライバシーポリシー。個人情報の取り扱い、Cookieの使用、Google AdSenseについての詳細をご確認いただけます。",
    url: `${baseUrl}/privacy`,
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



