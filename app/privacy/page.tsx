"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import AdSense from "../components/AdSense";

export default function PrivacyPage() {
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
              プライバシーポリシー
            </h1>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                最終更新日: {new Date().toLocaleDateString("ja-JP")}
              </p>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  1. 個人情報の取り扱いについて
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  整備士クイズ（以下「当サイト」）は、ユーザーの個人情報を適切に保護し、管理することを重要視しています。当サイトは、個人情報保護に関する法令等を遵守し、個人情報の保護に努めます。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  2. 収集する情報
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトでは、以下の情報を収集する場合があります：
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>ブラウザの自動情報（IPアドレス、ブラウザの種類、OS、訪問日時など）</li>
                  <li>クッキー（Cookie）およびローカルストレージに保存される情報</li>
                  <li>Google Analyticsによる利用状況の分析情報</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  3. 情報の利用目的
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  収集した情報は、以下の目的で利用します：
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>サービスの提供・改善・開発</li>
                  <li>利用状況の分析</li>
                  <li>ユーザー体験の向上</li>
                  <li>セキュリティの維持</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  4. 第三者への提供
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません：
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>ユーザーの同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>Google Analytics等の分析サービスへの提供（匿名化された情報に限る）</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  5. 広告について
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトでは、Google AdSenseを使用して広告を配信しています。Google AdSenseは、ユーザーが他のウェブサイトにアクセスした際の情報に基づいて、適切な広告を配信するためにCookieを使用する場合があります。
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  Google AdSenseのCookieについて：
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Google AdSenseは、第三者配信の広告サービスを使用しています</li>
                  <li>GoogleやGoogleのパートナーは、当サイトや他のサイトへの過去のアクセス情報に基づいて適切な広告を配信します</li>
                  <li>Googleの広告Cookieを使用することで、Googleやそのパートナーが当サイトや他のサイトにアクセスした際の情報に基づいて広告を配信します</li>
                  <li>ユーザーは、広告の配信設定を変更することで、パーソナライズ広告を無効にすることができます</li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  パーソナライズ広告を無効にする方法：
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      Googleの広告設定ページ
                    </a>
                    でパーソナライズ広告を無効にすることができます
                  </li>
                  <li>
                    <a
                      href="https://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      www.aboutads.info
                    </a>
                    にアクセスして、パーソナライズ広告に使用されるCookieを無効にすることもできます
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  パーソナライズ広告を無効にしても、広告は配信されますが、コンテンツや過去のアクセス情報に基づいた広告ではなくなります。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  6. ローカルストレージの利用
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトでは、ユーザーの体験向上のため、ブラウザのローカルストレージを使用して以下の情報を保存します：
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>クイズの回答履歴</li>
                  <li>ブックマーク情報</li>
                  <li>統計情報</li>
                  <li>テーマ設定（ライトモード/ダークモード）</li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  これらの情報は、ユーザーのデバイスのみに保存され、サーバーには送信されません。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  7. プライバシーポリシーの変更
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  当サイトは、必要に応じて本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  8. お問い合わせ
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  プライバシーポリシーに関するご質問やご意見は、
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
                  slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_PRIVACY || ""}
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

