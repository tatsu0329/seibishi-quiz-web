import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "このサイトについて | 整備士クイズ",
  description: "整備士クイズについての説明",
};

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
                整備士クイズは、自動車整備士資格試験の過去問題を学習できる無料のWebアプリケーションです。国家資格である自動車整備士（1級、2級、3級）の試験対策として、実際の過去問題を効率的に学習することができます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                主な機能
              </h2>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong className="text-gray-800 dark:text-gray-100">
                    過去問題の学習
                  </strong>
                  <br />
                  国家1級、2級、3級の各等級、および小型自動車、ディーゼル、ガソリンなどの燃料タイプ別に問題を選択して学習できます。
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-100">
                    問題のシャッフル機能
                  </strong>
                  <br />
                  問題の順序をランダムにシャッフルして、より実践的な学習が可能です。
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-100">
                    間違えた問題の復習モード
                  </strong>
                  <br />
                  一度解答した後、間違えた問題だけを集中的に復習できます。
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-100">
                    ブックマーク機能
                  </strong>
                  <br />
                  重要な問題や後で確認したい問題をブックマークして、効率的に学習を進められます。
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-100">
                    進捗の保存・再開
                  </strong>
                  <br />
                  クイズの途中で終了しても、進捗を保存して後から続きから再開できます。
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-100">
                    統計情報の表示
                  </strong>
                  <br />
                  過去のクイズ結果を統計として確認し、自分の学習状況を把握できます。
                </li>
                <li>
                  <strong className="text-gray-800 dark:text-gray-100">
                    ダークモード対応
                  </strong>
                  <br />
                  ライトモードとダークモードを切り替えて、目に優しい学習環境を提供します。
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                対応している資格試験
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>国家1級小型自動車整備士</li>
                <li>国家2級自動車整備士（ディーゼル、ガソリン）</li>
                <li>国家3級自動車整備士（ガソリン）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                データの保存について
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                当サイトでは、クイズの回答履歴、ブックマーク、統計情報などのデータを、お使いのブラウザのローカルストレージに保存しています。これらのデータはお使いのデバイス上のみに保存され、サーバーには送信されません。プライバシーについて詳しくは、
                <Link
                  href="/privacy"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  プライバシーポリシー
                </Link>
                をご覧ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                免責事項
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                当サイトで提供する問題は、過去の試験問題を参考に作成したものです。実際の試験問題とは異なる場合があります。当サイトの利用により発生したいかなる損害についても、当サイトは一切の責任を負いません。
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

