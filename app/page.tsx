import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import AdSense from "./components/AdSense";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://seibishi-quiz-web.vercel.app";

export const metadata: Metadata = {
  title: "自動車整備士資格試験 過去問題集 | 整備士クイズ",
  description:
    "自動車整備士資格試験の過去問題を完全無料で学習。国家1級・2級・3級の過去問題集。問題のシャッフル、間違えた問題の復習、ブックマーク機能など、効率的な学習をサポート。",
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
    "無料",
    "過去問",
  ],
  openGraph: {
    title: "自動車整備士資格試験 過去問題集 | 整備士クイズ",
    description:
      "自動車整備士資格試験の過去問題を完全無料で学習。国家1級・2級・3級の過去問題集。",
    url: baseUrl,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex-1">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            {/* ヒーローセクション */}
            <section className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                自動車整備士資格試験
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                  過去問題集
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl">
                国家資格である自動車整備士（1級・2級・3級）の過去問題を
                <strong className="text-gray-900 dark:text-white">完全無料</strong>
                で学習できます。問題のシャッフル、間違えた問題の復習、ブックマーク機能など、効率的な学習をサポートします。
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/select"
                  className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  問題集を選択して学習を始める
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border-2 border-indigo-600 bg-white px-8 py-4 text-lg font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 dark:border-indigo-400 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700"
                >
                  このサイトについて
                </Link>
              </div>
            </section>

            {/* 主な機能セクション */}
            <section className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
                主な機能
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border-2 border-indigo-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-indigo-700 dark:bg-gray-800">
                  <div className="mb-4 text-4xl">📚</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    豊富な過去問題
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    国家1級・2級・3級の各等級、小型自動車、ディーゼル、ガソリンの燃料タイプ別に、複数年度の過去問題を提供しています。
                  </p>
                </div>
                <div className="rounded-lg border-2 border-green-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-green-700 dark:bg-gray-800">
                  <div className="mb-4 text-4xl">🔀</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    問題のシャッフル機能
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    問題の順序をランダムにシャッフルして、より実践的な学習が可能です。同じ問題集を何度も解く際に効果的です。
                  </p>
                </div>
                <div className="rounded-lg border-2 border-orange-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-orange-700 dark:bg-gray-800">
                  <div className="mb-4 text-4xl">📖</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    間違えた問題の復習
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    一度解答した後、間違えた問題だけを集中的に復習できます。苦手な分野を効率的に克服できます。
                  </p>
                </div>
                <div className="rounded-lg border-2 border-yellow-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-yellow-700 dark:bg-gray-800">
                  <div className="mb-4 text-4xl">⭐</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    ブックマーク機能
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    重要な問題や後で確認したい問題をブックマークして、効率的に学習を進められます。
                  </p>
                </div>
                <div className="rounded-lg border-2 border-purple-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-purple-700 dark:bg-gray-800">
                  <div className="mb-4 text-4xl">💾</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    進捗の保存・再開
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    クイズの途中で終了しても、進捗を保存して後から続きから再開できます。時間がない時でも安心です。
                  </p>
                </div>
                <div className="rounded-lg border-2 border-blue-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-blue-700 dark:bg-gray-800">
                  <div className="mb-4 text-4xl">📊</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    統計情報の表示
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    過去のクイズ結果を統計として確認し、自分の学習状況を把握できます。正答率の推移を可視化します。
                  </p>
                </div>
              </div>
            </section>

            {/* 対応資格試験セクション */}
            <section className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
                対応している資格試験
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border-2 border-indigo-500 bg-indigo-50 p-6 text-center dark:border-indigo-400 dark:bg-indigo-900/20">
                  <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                    国家1級
                  </h3>
                  <ul className="space-y-2 text-indigo-800 dark:text-indigo-200">
                    <li>• 小型自動車整備士</li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-6 text-center dark:border-blue-400 dark:bg-blue-900/20">
                  <h3 className="mb-4 text-2xl font-bold text-blue-900 dark:text-blue-100">
                    国家2級
                  </h3>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li>• ディーゼル整備士</li>
                    <li>• ガソリン整備士</li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-green-500 bg-green-50 p-6 text-center dark:border-green-400 dark:bg-green-900/20">
                  <h3 className="mb-4 text-2xl font-bold text-green-900 dark:text-green-100">
                    国家3級
                  </h3>
                  <ul className="space-y-2 text-green-800 dark:text-green-200">
                    <li>• ディーゼル整備士</li>
                    <li>• ガソリン整備士</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTAセクション */}
            <section className="mb-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white dark:from-indigo-700 dark:to-purple-700">
              <h2 className="mb-4 text-3xl font-bold">
                今すぐ無料で学習を始めましょう
              </h2>
              <p className="mb-6 text-lg opacity-90">
                登録不要、完全無料で自動車整備士資格試験の過去問題を学習できます
              </p>
              <Link
                href="/select"
                className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-indigo-600 transition-colors hover:bg-gray-100"
              >
                問題集を選択する
              </Link>
            </section>

            {/* 広告表示エリア */}
            <div className="mb-8">
              <AdSense
                slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP || ""}
                className="my-4"
                style={{ minHeight: "100px" }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

