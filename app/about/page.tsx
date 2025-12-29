"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import AdSense from "../components/AdSense";

export default function AboutPage() {
  return (
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
              このサイトについて
            </h1>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                整備士クイズとは
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                整備士クイズは、自動車整備士資格試験を学習できる<strong className="text-gray-800 dark:text-gray-100">無料のWebアプリケーション</strong>です。国家資格である自動車整備士（1級、2級、3級）の試験対策として、過去問題を効率的に学習することができます。
              </p>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                当サイトでは、過去の試験問題を参考にした問題集を提供しており、実際の試験形式に近い形で学習を進めることができます。問題のシャッフル機能や間違えた問題の復習機能など、効率的な学習をサポートする機能を多数用意しています。
              </p>
              <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
                  なぜ整備士クイズを選ぶべきか
                </h3>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li>✓ <strong>完全無料</strong>で利用可能</li>
                  <li>✓ <strong>過去問題を網羅</strong>した充実のコンテンツ</li>
                  <li>✓ <strong>どこでも学習可能</strong>（PC・スマートフォン対応）</li>
                  <li>✓ <strong>進捗管理機能</strong>で学習状況を把握</li>
                  <li>✓ <strong>間違えた問題の復習</strong>で効率的な学習</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                主な機能
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                    問題集の学習
                  </h3>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    国家1級、2級、3級の各等級、および小型自動車、ディーゼル、ガソリンなどの燃料タイプ別に問題集を選択して学習できます。<Link href="/select" className="underline font-semibold">問題集選択ページ</Link>から、すぐに学習を始められます。
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
                    問題のシャッフル機能
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    問題の順序をランダムにシャッフルして、より実践的な学習が可能です。同じ問題集を何度も解く際に、問題の順番を変えることで記憶の定着を促進します。
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-orange-900 dark:text-orange-100">
                    間違えた問題の復習モード
                  </h3>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    一度解答した後、間違えた問題だけを集中的に復習できます。苦手な分野を効率的に克服することができます。
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-yellow-900 dark:text-yellow-100">
                    ブックマーク機能
                  </h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    重要な問題や後で確認したい問題をブックマークして、効率的に学習を進められます。ブックマークした問題は、いつでも確認できます。
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-purple-900 dark:text-purple-100">
                    進捗の保存・再開
                  </h3>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    クイズの途中で終了しても、進捗を保存して後から続きから再開できます。時間がない時でも、安心して学習を中断できます。
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
                    統計情報の表示
                  </h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    過去のクイズ結果を統計として確認し、自分の学習状況を把握できます。正答率の推移や、苦手な分野を可視化できます。
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-gray-500 bg-gray-50 p-4 dark:bg-gray-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    ダークモード対応
                  </h3>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    ライトモードとダークモードを切り替えて、目に優しい学習環境を提供します。夜間の学習にも最適です。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                対応している資格試験
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                当サイトでは、以下の自動車整備士資格試験の過去問題を提供しています：
              </p>
              <div className="mb-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-700 dark:bg-indigo-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                    国家1級
                  </h3>
                  <ul className="space-y-1 text-sm text-indigo-800 dark:text-indigo-200">
                    <li>• 小型自動車整備士</li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
                    国家2級
                  </h3>
                  <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                    <li>• ディーゼル整備士</li>
                    <li>• ガソリン整備士</li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
                    国家3級
                  </h3>
                  <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                    <li>• ディーゼル整備士</li>
                    <li>• ガソリン整備士</li>
                  </ul>
                </div>
              </div>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                各等級・燃料タイプ・実施年度別に問題集を選択して学習できます。<Link href="/" className="text-indigo-600 hover:underline dark:text-indigo-400 font-semibold">トップページ</Link>から問題集を選択して、すぐに学習を始めることができます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                データの保存について
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                当サイトでは、クイズの回答履歴、ブックマーク、統計情報などのデータを、お使いのブラウザのローカルストレージに保存しています。これらのデータはお使いのデバイス上のみに保存され、サーバーには送信されません。
              </p>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                プライバシーについて詳しくは、
                <Link
                  href="/privacy"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  プライバシーポリシー
                </Link>
                をご覧ください。また、サービスの利用条件については、
                <Link
                  href="/terms"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  利用規約
                </Link>
                をご確認ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                よくある質問（FAQ）
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Q. 無料で利用できますか？
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    A. はい、完全無料で利用できます。登録や会員登録も不要です。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Q. スマートフォンでも利用できますか？
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    A. はい、スマートフォンやタブレットからも利用できます。レスポンシブデザインに対応しています。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Q. データは保存されますか？
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    A. クイズの進捗、ブックマーク、統計情報はブラウザのローカルストレージに保存されます。サーバーには送信されません。詳しくは<Link href="/privacy" className="text-indigo-600 hover:underline dark:text-indigo-400">プライバシーポリシー</Link>をご覧ください。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Q. 問題は実際の試験問題と同じですか？
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    A. 過去の試験問題を参考に作成していますが、実際の試験問題とは異なる場合があります。試験対策の参考としてご利用ください。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Q. どのように学習を進めればよいですか？
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    A. まずは自分の受験予定の等級・燃料タイプの問題集を選択して学習を始めましょう。間違えた問題は復習機能で繰り返し学習し、ブックマーク機能で重要な問題を保存しておくと効率的です。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                免責事項
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                当サイトで提供する問題は、過去の試験問題を参考に作成したものです。実際の試験問題とは異なる場合があります。当サイトの利用により発生したいかなる損害についても、当サイトは一切の責任を負いません。
              </p>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                詳しくは<Link href="/terms" className="text-indigo-600 hover:underline dark:text-indigo-400">利用規約</Link>をご確認ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                お問い合わせ
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                ご質問、ご意見、ご要望がございましたら、
                <Link
                  href="/contact"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  お問い合わせページ
                </Link>
                よりご連絡ください。
              </p>
            </section>

            {/* 広告表示エリア */}
            <div className="mt-8">
              <AdSense
                slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_ABOUT || ""}
                className="my-4"
                style={{ minHeight: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
