import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";
import AdSense from "../components/AdSense";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://seibishi-quiz-web.vercel.app";

export const metadata: Metadata = {
  title: "自動車整備士試験情報 | 整備士クイズ",
  description:
    "自動車整備士資格試験の詳細情報。1級・2級・3級の受験資格、試験日程、試験内容、合格基準、受験手続きなどを詳しく解説します。",
  keywords: [
    "自動車整備士",
    "試験情報",
    "受験資格",
    "試験日程",
    "合格基準",
    "受験手続き",
    "1級整備士",
    "2級整備士",
    "3級整備士",
  ],
  openGraph: {
    title: "自動車整備士試験情報 | 整備士クイズ",
    description:
      "自動車整備士資格試験の詳細情報。受験資格、試験日程、試験内容、合格基準を詳しく解説。",
    url: `${baseUrl}/exam-info`,
  },
  alternates: {
    canonical: `${baseUrl}/exam-info`,
  },
};

export default function ExamInfoPage() {
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
                自動車整備士試験情報
              </h1>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  自動車整備士資格とは
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  自動車整備士は、自動車の整備に関する知識と技能を証明する国家資格です。国土交通省が管轄する資格で、自動車の点検・整備・改造を行うために必要な資格です。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  資格は1級、2級、3級の3段階に分かれており、等級が上がるほど高度な知識と技能が求められます。各等級によって整備できる自動車の種類や作業範囲が異なります。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  各等級の詳細
                </h2>
                <div className="space-y-6">
                  <div className="rounded-lg border-2 border-indigo-500 bg-indigo-50 p-6 dark:bg-indigo-900/20">
                    <h3 className="mb-3 text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                      国家1級整備士
                    </h3>
                    <div className="mb-4 space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
                      <p>
                        <strong>対象車両：</strong>小型自動車（総排気量2,500cc以下、または定格出力20kW以下の原動機を有するもの）
                      </p>
                      <p>
                        <strong>整備範囲：</strong>小型自動車の整備に関する高度な知識と技能が必要。エンジン、シャシー、電気装置、車体など、全般的な整備が可能。
                      </p>
                      <p>
                        <strong>試験科目：</strong>
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>小型自動車に関する構造、機能、取扱い方法等</li>
                        <li>小型自動車の整備に関する知識</li>
                        <li>小型自動車の整備に関する技能</li>
                      </ul>
                      <p>
                        <strong>合格基準：</strong>各科目60点以上（100点満点）
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                    <h3 className="mb-3 text-2xl font-bold text-blue-900 dark:text-blue-100">
                      国家2級整備士
                    </h3>
                    <div className="mb-4 space-y-2 text-sm text-blue-800 dark:text-blue-200">
                      <p>
                        <strong>対象車両：</strong>ガソリンエンジンまたはディーゼルエンジンを有する自動車
                      </p>
                      <p>
                        <strong>整備範囲：</strong>自動車の整備に関する一般的な知識と技能が必要。エンジン、シャシー、電気装置などの整備が可能。
                      </p>
                      <p>
                        <strong>試験科目（ガソリン）：</strong>
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>ガソリンエンジンに関する構造、機能、取扱い方法等</li>
                        <li>ガソリンエンジンの整備に関する知識</li>
                        <li>ガソリンエンジンの整備に関する技能</li>
                      </ul>
                      <p>
                        <strong>試験科目（ディーゼル）：</strong>
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>ディーゼルエンジンに関する構造、機能、取扱い方法等</li>
                        <li>ディーゼルエンジンの整備に関する知識</li>
                        <li>ディーゼルエンジンの整備に関する技能</li>
                      </ul>
                      <p>
                        <strong>合格基準：</strong>各科目60点以上（100点満点）
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border-2 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
                    <h3 className="mb-3 text-2xl font-bold text-green-900 dark:text-green-100">
                      国家3級整備士
                    </h3>
                    <div className="mb-4 space-y-2 text-sm text-green-800 dark:text-green-200">
                      <p>
                        <strong>対象車両：</strong>ガソリンエンジンまたはディーゼルエンジンを有する自動車
                      </p>
                      <p>
                        <strong>整備範囲：</strong>自動車の基本的な整備に関する知識と技能が必要。基本的な点検・整備作業が可能。
                      </p>
                      <p>
                        <strong>試験科目（ガソリン）：</strong>
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>ガソリンエンジンに関する基本的な構造、機能、取扱い方法等</li>
                        <li>ガソリンエンジンの基本的な整備に関する知識</li>
                        <li>ガソリンエンジンの基本的な整備に関する技能</li>
                      </ul>
                      <p>
                        <strong>試験科目（ディーゼル）：</strong>
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>ディーゼルエンジンに関する基本的な構造、機能、取扱い方法等</li>
                        <li>ディーゼルエンジンの基本的な整備に関する知識</li>
                        <li>ディーゼルエンジンの基本的な整備に関する技能</li>
                      </ul>
                      <p>
                        <strong>合格基準：</strong>各科目60点以上（100点満点）
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  受験資格
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-purple-900 dark:text-purple-100">
                      実務経験による受験資格
                    </h3>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-purple-800 dark:text-purple-200">
                      <li><strong>1級：</strong>2級整備士の資格を取得後、3年以上の実務経験</li>
                      <li><strong>2級：</strong>3級整備士の資格を取得後、3年以上の実務経験、または自動車整備に関する実務経験が3年以上</li>
                      <li><strong>3級：</strong>自動車整備に関する実務経験が6ヶ月以上</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-orange-900 dark:text-orange-100">
                      学歴による受験資格
                    </h3>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-orange-800 dark:text-orange-200">
                      <li>自動車整備に関する学科を修了した者（修業年限により異なる）</li>
                      <li>高等学校の工業に関する学科を修了した者（実務経験の要件あり）</li>
                      <li>その他、国土交通省令で定める学歴を有する者</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-red-900 dark:text-red-100">
                      注意事項
                    </h3>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      受験資格の詳細は、国土交通省の公式サイトや各都道府県の自動車整備振興会で確認してください。実務経験の証明には、雇用主からの証明書が必要です。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  試験日程と実施回数
                </h2>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    <strong>実施回数：</strong>年2回（通常、春と秋に実施）
                  </p>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    <strong>試験日程：</strong>各都道府県によって異なります。詳細は各都道府県の自動車整備振興会の公式サイトで確認してください。
                  </p>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    <strong>受験申込期間：</strong>試験日の約2〜3ヶ月前から申込受付が開始されます。
                  </p>
                  <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
                    <p className="text-xs text-yellow-800 dark:text-yellow-200">
                      <strong>※ 注意：</strong>試験日程や申込期間は変更になる可能性があります。必ず最新の情報を各都道府県の自動車整備振興会の公式サイトで確認してください。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  試験の形式と内容
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      筆記試験
                    </h3>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li><strong>出題形式：</strong>択一式（4択または5択）</li>
                      <li><strong>問題数：</strong>等級や科目によって異なる（通常30〜50問程度）</li>
                      <li><strong>試験時間：</strong>等級や科目によって異なる（通常2〜3時間）</li>
                      <li><strong>出題内容：</strong>構造、機能、取扱い方法、整備に関する知識など</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                      実技試験
                    </h3>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li><strong>試験内容：</strong>実際の自動車や部品を使った整備作業</li>
                      <li><strong>試験時間：</strong>等級によって異なる（通常1〜2時間）</li>
                      <li><strong>評価項目：</strong>作業の正確性、安全性、効率性など</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  合格基準と合格率
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
                      合格基準
                    </h3>
                    <p className="mb-2 text-sm text-green-800 dark:text-green-200">
                      各科目60点以上（100点満点）で合格となります。全ての科目で基準点をクリアする必要があります。
                    </p>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      筆記試験と実技試験の両方に合格する必要があります。
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
                      合格率の目安
                    </h3>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li><strong>1級：</strong>約30〜40%程度</li>
                      <li><strong>2級：</strong>約40〜50%程度</li>
                      <li><strong>3級：</strong>約50〜60%程度</li>
                    </ul>
                    <p className="mt-2 text-xs text-blue-800 dark:text-blue-200">
                      ※ 合格率は年度や都道府県によって異なります。あくまで目安として参考にしてください。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  受験手続き
                </h2>
                <div className="space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>1. 受験申請書の提出：</strong>各都道府県の自動車整備振興会に受験申請書を提出します。
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>2. 必要書類の準備：</strong>受験資格を証明する書類（実務経験証明書、卒業証明書など）を準備します。
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>3. 受験料の納付：</strong>受験料を納付します（等級によって異なります）。
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>4. 試験の受験：</strong>指定された日時・場所で試験を受験します。
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-700/50">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>5. 合格発表：</strong>試験後、各都道府県の自動車整備振興会から合格発表があります。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  資格取得後のメリット
                </h2>
                <div className="space-y-2">
                  <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-3 dark:bg-indigo-900/20">
                    <p className="text-sm text-indigo-800 dark:text-indigo-200">
                      <strong>✓ 就職・転職に有利：</strong>自動車整備業界での就職や転職に有利です。
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900/20">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>✓ 給与アップ：</strong>資格手当が支給される場合があります。
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-900/20">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>✓ 独立開業の可能性：</strong>一定の実務経験を積むことで、独立開業も可能です。
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3 dark:bg-purple-900/20">
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      <strong>✓ スキルアップ：</strong>より高度な整備作業ができるようになります。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  まとめ
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  自動車整備士資格試験は、実務経験と知識の両方が必要とされる資格です。計画的に学習を進め、過去問題を繰り返し解くことで、合格を目指すことができます。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトの<Link href="/select" className="text-indigo-600 hover:underline dark:text-indigo-400 font-semibold">過去問題集</Link>を活用して、効率的に学習を進めましょう。また、<Link href="/guide" className="text-indigo-600 hover:underline dark:text-indigo-400 font-semibold">試験対策ガイド</Link>も参考にしてください。
                </p>
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>※ 重要：</strong>試験日程や受験資格の詳細は、必ず各都道府県の自動車整備振興会の公式サイトで最新の情報を確認してください。
                  </p>
                </div>
              </section>

              {/* 広告表示エリア */}
              <div className="mt-8">
                <AdSense
                  slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_EXAM_INFO || ""}
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

