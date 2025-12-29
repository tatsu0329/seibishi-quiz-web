import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seibishi-quiz-web.vercel.app';

export const metadata: Metadata = {
  title: "利用規約",
  description: "整備士クイズの利用規約。サービスの利用条件、禁止事項、知的財産権、免責事項などについてご確認いただけます。",
  openGraph: {
    title: "利用規約 | 整備士クイズ",
    description: "整備士クイズの利用規約。サービスの利用条件、禁止事項、知的財産権、免責事項などについてご確認いただけます。",
    url: `${baseUrl}/terms`,
  },
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

