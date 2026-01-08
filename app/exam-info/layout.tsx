import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "試験情報",
  description: "自動車整備士資格試験の詳細情報",
};

export default function ExamInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

