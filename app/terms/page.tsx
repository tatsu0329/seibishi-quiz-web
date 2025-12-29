"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import AdSense from "../components/AdSense";

export default function TermsPage() {
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
              利用規約
            </h1>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                最終更新日: {new Date().toLocaleDateString("ja-JP")}
              </p>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  1. 規約の適用
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  本利用規約（以下「本規約」）は、整備士クイズ（以下「当サイト」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。当サイトを利用するすべてのユーザー（以下「ユーザー」）は、本規約に同意した上で本サービスを利用するものとします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  2. サービスの内容
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  本サービスは、自動車整備士資格試験の学習を支援するための無料のWebアプリケーションです。過去問題を利用したクイズ形式の学習機能を提供します。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  3. 利用上の注意事項
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  ユーザーは、本サービスを利用する際に以下の行為を行ってはならないものとします：
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当サイトのサーバーまたはネットワークの機能を破壊または妨害する行為</li>
                  <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>不正アクセス、クラッキング、その他の手段によるサービスの不正利用</li>
                  <li>当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>その他、当サイトが不適切と判断する行為</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  4. 知的財産権
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  本サービスに関する著作権、商標権その他の知的財産権は、当サイトまたは当サイトにライセンスを許諾している権利者に帰属し、ユーザーはかかる知的財産権を侵害する行為を行ってはならないものとします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  5. 保証の否認および免責
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトは、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。ただし、本サービスに関する当サイトとユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトで提供する問題は、過去の試験問題を参考に作成したものです。実際の試験問題とは異なる場合があり、当サイトはその正確性を保証するものではありません。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  6. サービス内容の変更等
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトは、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することができるものとします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  7. 利用規約の変更
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  8. 個人情報の取扱い
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトは、本サービスの利用によって取得する個人情報については、当サイト「
                  <Link
                    href="/privacy"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    プライバシーポリシー
                  </Link>
                  」に従い適切に取り扱うものとします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  9. 通知または連絡
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  ユーザーと当サイトとの間の通知または連絡は、当サイトの定める方法によって行うものとします。当サイトは、ユーザーから、当サイトが別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  10. 権利義務の譲渡の禁止
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  ユーザーは、当サイトの書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  11. 準拠法・裁判管轄
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当サイトの本店所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  12. お問い合わせ
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  本規約に関するお問い合わせは、下記の連絡先までお願いいたします。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
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
                  slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TERMS || ""}
                  className="my-4"
                  style={{ minHeight: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


