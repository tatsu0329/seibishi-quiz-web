"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white py-4 dark:border-gray-700 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 sm:text-left">
            © {new Date().getFullYear()} 整備士クイズ. All rights reserved.
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              このサイトについて
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

