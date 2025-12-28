"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import AdSense from "../components/AdSense";

export default function ContactPage() {
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
              お問い合わせ
            </h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              ご質問、ご意見、ご要望がございましたら、以下のフォームよりお気軽にお問い合わせください。
            </p>

            <div className="mb-8 rounded-lg bg-blue-50 p-8 text-center dark:bg-blue-900/20">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                お問い合わせフォーム
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Googleフォームを使用してお問い合わせを受け付けています。
              </p>
              <a
                href="https://forms.gle/FG651DKLCwa1XPWp7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                お問い合わせフォームを開く
              </a>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                ※新しいタブでGoogleフォームが開きます
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700/50">
              <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                お問い合わせについて
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  • お問い合わせ内容については、可能な限り早くご返信いたします
                </li>
                <li>• ご返信までに数日かかる場合がございます</li>
                <li>
                  • お問い合わせ内容によっては、ご返信できない場合もございます
                </li>
              </ul>
            </div>

            {/* 広告表示エリア */}
            <div className="mt-8">
              <AdSense
                slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONTACT || ""}
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
