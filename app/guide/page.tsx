import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";
import AdSense from "../components/AdSense";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://seibishi-quiz-web.vercel.app";

export const metadata: Metadata = {
  title: "自動車整備士試験対策ガイド | 整備士クイズ",
  description:
    "自動車整備士資格試験の合格を目指すための完全ガイド。1級・2級・3級の試験内容、出題傾向、学習方法、おすすめの勉強スケジュールを詳しく解説します。",
  keywords: [
    "自動車整備士",
    "試験対策",
    "学習方法",
    "勉強法",
    "合格のコツ",
    "出題傾向",
    "試験内容",
    "1級整備士",
    "2級整備士",
    "3級整備士",
  ],
  openGraph: {
    title: "自動車整備士試験対策ガイド | 整備士クイズ",
    description:
      "自動車整備士資格試験の合格を目指すための完全ガイド。試験内容、出題傾向、学習方法を詳しく解説。",
    url: `${baseUrl}/guide`,
  },
  alternates: {
    canonical: `${baseUrl}/guide`,
  },
};

export default function GuidePage() {
  return (
    <>
      <ThemeToggle />
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex-1">
          <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                ホームに戻る
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h1 className="mb-6 text-4xl font-bold text-gray-800 dark:text-gray-100">
                自動車整備士試験対策ガイド
              </h1>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  はじめに
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  自動車整備士資格試験は、自動車の整備に関する知識と技能を証明する国家資格です。このガイドでは、試験に合格するための効果的な学習方法と対策を詳しく解説します。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトの過去問題集を活用しながら、体系的に学習を進めることで、確実に合格を目指すことができます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  試験の概要
                </h2>
                <div className="mb-4 space-y-4">
                  <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                      国家1級整備士
                    </h3>
                    <p className="mb-2 text-sm text-indigo-800 dark:text-indigo-200">
                      自動車の整備に関する高度な知識と技能が必要とされる資格です。小型自動車の整備に関する専門的な知識が求められます。
                    </p>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-indigo-800 dark:text-indigo-200">
                      <li>試験科目：小型自動車に関する構造、機能、取扱い方法等</li>
                      <li>出題形式：択一式問題</li>
                      <li>合格基準：各科目60点以上（100点満点）</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
                      国家2級整備士
                    </h3>
                    <p className="mb-2 text-sm text-blue-800 dark:text-blue-200">
                      自動車の整備に関する一般的な知識と技能が必要とされる資格です。ガソリンエンジンまたはディーゼルエンジンのいずれかを選択します。
                    </p>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>試験科目：ガソリンエンジンまたはディーゼルエンジンに関する構造、機能、取扱い方法等</li>
                      <li>出題形式：択一式問題</li>
                      <li>合格基準：各科目60点以上（100点満点）</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
                      国家3級整備士
                    </h3>
                    <p className="mb-2 text-sm text-green-800 dark:text-green-200">
                      自動車の基本的な整備に関する知識と技能が必要とされる資格です。ガソリンエンジンまたはディーゼルエンジンのいずれかを選択します。
                    </p>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-green-800 dark:text-green-200">
                      <li>試験科目：ガソリンエンジンまたはディーゼルエンジンに関する基本的な構造、機能、取扱い方法等</li>
                      <li>出題形式：択一式問題</li>
                      <li>合格基準：各科目60点以上（100点満点）</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  効果的な学習方法
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      1. 過去問題を繰り返し解く
                    </h3>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      過去問題は試験の傾向を把握する上で最も重要な学習材料です。当サイトの過去問題集を活用して、複数年度の問題を繰り返し解くことで、出題パターンを理解できます。
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>推奨学習法：</strong>同じ問題集を最低3回は解き、間違えた問題は特に重点的に復習しましょう。
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      2. 問題のシャッフル機能を活用する
                    </h3>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      問題の順番を覚えてしまうと、本当に理解しているのか確認できません。当サイトのシャッフル機能を使って、ランダムな順序で問題を解くことで、より実践的な学習が可能です。
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>推奨学習法：</strong>2回目以降は必ずシャッフル機能を使って、問題の順番に依存しない理解を目指しましょう。
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      3. 間違えた問題を集中的に復習する
                    </h3>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      一度解いた問題で間違えたものは、苦手な分野である可能性が高いです。当サイトの「間違えた問題の復習」機能を使って、苦手分野を集中的に克服しましょう。
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>推奨学習法：</strong>間違えた問題には必ず解説を読み、なぜ間違えたのかを理解することが重要です。
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      4. ブックマーク機能で重要問題を管理
                    </h3>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      重要な問題や後で確認したい問題は、ブックマーク機能で保存しておくと便利です。試験直前にブックマークした問題を一覧で確認することで、効率的に復習できます。
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>推奨学習法：</strong>頻出問題や覚えにくい問題をブックマークして、定期的に確認しましょう。
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      5. 学習スケジュールを立てる
                    </h3>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      計画的に学習を進めることで、試験日までに必要な知識を身につけることができます。余裕を持ったスケジュールを立て、毎日少しずつでも学習を継続することが重要です。
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>推奨学習法：</strong>試験日の3ヶ月前から学習を開始し、1日30分〜1時間の学習時間を確保しましょう。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  出題傾向と対策
                </h2>
                <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-yellow-900 dark:text-yellow-100">
                    頻出分野
                  </h3>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                    <li><strong>エンジン関連：</strong>エンジンの構造、作動原理、点検・整備方法</li>
                    <li><strong>電気・電子関連：</strong>バッテリー、スターター、オルタネーター、点火装置</li>
                    <li><strong>シャシー関連：</strong>ブレーキ、サスペンション、ステアリング、タイヤ</li>
                    <li><strong>車体関連：</strong>ボディ、塗装、ガラス、内装</li>
                    <li><strong>法規・安全：</strong>道路運送車両法、保安基準、環境対策</li>
                  </ul>
                </div>

                <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
                    問題の特徴
                  </h3>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-blue-800 dark:text-blue-200">
                    <li>図や写真を使った問題が多く出題される</li>
                    <li>実務に即した内容が問われる</li>
                    <li>法規や基準に関する問題が一定数出題される</li>
                    <li>計算問題も出題される（特に2級・1級）</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
                    対策のポイント
                  </h3>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-green-800 dark:text-green-200">
                    <li>図や写真を見ながら問題を解く習慣をつける</li>
                    <li>用語の意味を正確に理解する</li>
                    <li>法規や基準は最新の情報を確認する</li>
                    <li>計算問題は公式を覚えて、繰り返し練習する</li>
                    <li>実務経験がある場合は、経験と知識を結びつけて理解する</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  おすすめの学習スケジュール
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-purple-900 dark:text-purple-100">
                      試験3ヶ月前〜2ヶ月前
                    </h3>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      過去問題を1回通して解き、全体像を把握します。間違えた問題には印をつけておき、苦手分野を明確にします。
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-orange-900 dark:text-orange-100">
                      試験2ヶ月前〜1ヶ月前
                    </h3>
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      間違えた問題を中心に復習し、苦手分野を克服します。同じ問題集をシャッフル機能を使って再度解き、理解を深めます。
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-red-900 dark:text-red-100">
                      試験1ヶ月前〜試験日
                    </h3>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      複数年度の過去問題を解き、出題傾向を最終確認します。ブックマークした重要問題を繰り返し確認し、本番に備えます。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  試験当日の心構え
                </h2>
                <div className="space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>✓ 時間配分を意識する：</strong>1問あたりの時間を決めておき、わからない問題に時間をかけすぎないようにしましょう。
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>✓ 見直しの時間を確保する：</strong>全ての問題を解き終えたら、必ず見直しの時間を確保しましょう。
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>✓ 体調管理を万全に：</strong>試験前日は十分な睡眠をとり、試験当日は早めに会場に到着するようにしましょう。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  まとめ
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  自動車整備士資格試験の合格には、継続的な学習と効果的な学習方法の実践が重要です。当サイトの過去問題集を活用しながら、このガイドで紹介した学習方法を実践することで、確実に合格を目指すことができます。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  まずは<Link href="/select" className="text-indigo-600 hover:underline dark:text-indigo-400 font-semibold">問題集を選択</Link>して、今日から学習を始めましょう。継続は力なりです。頑張ってください！
                </p>
              </section>

              {/* 広告表示エリア */}
              <div className="mt-8">
                <AdSense
                  slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDE || ""}
                  className="my-4"
                  style={{ minHeight: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

