import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "試験対策ガイド",
  description: "自動車整備士資格試験の合格を目指すための完全ガイド",
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

