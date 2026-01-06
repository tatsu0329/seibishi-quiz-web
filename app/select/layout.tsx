import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://seibishi-quiz-web.vercel.app";

export const metadata: Metadata = {
  title: "問題集を選択 | 整備士クイズ",
  description:
    "自動車整備士資格試験の過去問題集を選択。国家1級・2級・3級、小型自動車・ディーゼル・ガソリンの燃料タイプ、実施年度から選択して学習を始めましょう。",
  keywords: [
    "自動車整備士",
    "整備士試験",
    "過去問題",
    "問題集選択",
    "1級整備士",
    "2級整備士",
    "3級整備士",
  ],
  openGraph: {
    title: "問題集を選択 | 整備士クイズ",
    description:
      "自動車整備士資格試験の過去問題集を選択。国家1級・2級・3級から選択して学習を始めましょう。",
    url: `${baseUrl}/select`,
  },
  alternates: {
    canonical: `${baseUrl}/select`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SelectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


