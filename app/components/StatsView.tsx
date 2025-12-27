"use client";

import { useMemo, useState } from "react";
import { getQuizResults, getBookmarks, type QuizResult } from "@/src/utils/storage";
import { formatCategoryDisplay } from "@/src/utils/formatYear";

interface StatsViewProps {
  onBack: () => void;
}

export default function StatsView({ onBack }: StatsViewProps) {
  const results = getQuizResults();
  const bookmarks = getBookmarks();
  const [expandedBookmarks, setExpandedBookmarks] = useState<Set<string>>(new Set());

  const toggleBookmark = (bookmarkKey: string) => {
    setExpandedBookmarks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(bookmarkKey)) {
        newSet.delete(bookmarkKey);
      } else {
        newSet.add(bookmarkKey);
      }
      return newSet;
    });
  };

  // 選択肢から番号部分（例: "(1)"）のみを抽出する関数
  const extractChoiceNumber = (choice: string): string => {
    const match = choice.match(/^\([0-9]+\)/);
    return match ? match[0] : choice;
  };

  const stats = useMemo(() => {
    if (results.length === 0) return null;

    const totalQuizzes = results.length;
    const totalQuestions = results.reduce((sum, r) => sum + r.totalQuestions, 0);
    const totalCorrect = results.reduce((sum, r) => sum + r.correctCount, 0);
    const overallPercentage = Math.round(
      (totalCorrect / totalQuestions) * 100
    );

    // カテゴリごとの統計
    const categoryStats = new Map<string, { count: number; correct: number; total: number }>();
    results.forEach((result) => {
      const key = `${result.category.level}-${result.category.fuelType}-${result.category.year}`;
      const existing = categoryStats.get(key) || { count: 0, correct: 0, total: 0 };
      categoryStats.set(key, {
        count: existing.count + 1,
        correct: existing.correct + result.correctCount,
        total: existing.total + result.totalQuestions,
      });
    });

    // 平均正答率
    const averagePercentage = Math.round(
      results.reduce((sum, r) => sum + r.percentage, 0) / totalQuizzes
    );

    // 最高得点
    const bestResult = results.reduce((best, current) =>
      current.percentage > best.percentage ? current : best
    );

    return {
      totalQuizzes,
      totalQuestions,
      totalCorrect,
      overallPercentage,
      averagePercentage,
      bestResult,
      categoryStats: Array.from(categoryStats.entries()).map(([key, stats]) => ({
        key,
        ...stats,
        percentage: Math.round((stats.correct / stats.total) * 100),
      })),
    };
  }, [results]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            統計情報
          </h1>
          <button
            onClick={onBack}
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            戻る
          </button>
        </div>

        {stats ? (
          <div className="space-y-6">
            {/* 全体統計 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20">
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  実施回数
                </div>
                <div className="mt-2 text-3xl font-bold text-indigo-900 dark:text-indigo-100">
                  {stats.totalQuizzes}
                </div>
              </div>
              <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  総合正答率
                </div>
                <div className="mt-2 text-3xl font-bold text-green-900 dark:text-green-100">
                  {stats.overallPercentage}%
                </div>
              </div>
              <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
                <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                  平均正答率
                </div>
                <div className="mt-2 text-3xl font-bold text-orange-900 dark:text-orange-100">
                  {stats.averagePercentage}%
                </div>
              </div>
            </div>

            {/* 最高得点 */}
            {stats.bestResult && (
              <div className="rounded-lg border-2 border-yellow-400 bg-yellow-50 p-6 dark:border-yellow-500 dark:bg-yellow-900/20">
                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                  最高得点
                </div>
                <div className="mt-2 text-2xl font-bold text-yellow-900 dark:text-yellow-100">
                  {stats.bestResult.correctCount} / {stats.bestResult.totalQuestions} ({stats.bestResult.percentage}%)
                </div>
                <div className="mt-1 text-sm text-yellow-700 dark:text-yellow-400">
                  {formatCategoryDisplay(stats.bestResult.category)}
                </div>
              </div>
            )}

            {/* カテゴリごとの統計 */}
            {stats.categoryStats.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
                  カテゴリ別統計
                </h2>
                <div className="space-y-3">
                  {stats.categoryStats.map((cat) => {
                    const [level, fuelType, ...yearParts] = cat.key.split("-");
                    const year = yearParts.join("-"); // "2025-1" のような形式を復元
                    const category = { level, fuelType, year };
                    return (
                      <div
                        key={cat.key}
                        className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-4 dark:border-gray-700"
                      >
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-gray-200">
                            {formatCategoryDisplay(category)}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            実施回数: {cat.count}回
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            {cat.percentage}%
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {cat.correct} / {cat.total}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 最近の結果 */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
                最近の結果
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {results
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .slice(0, 10)
                  .map((result) => (
                    <div
                      key={result.id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                    >
                      <div>
                        <div className="font-medium text-gray-800 dark:text-gray-200">
                          {formatCategoryDisplay(result.category)}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(result.timestamp).toLocaleString("ja-JP")}
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-bold ${
                            result.percentage >= 80
                              ? "text-green-600 dark:text-green-400"
                              : result.percentage >= 60
                              ? "text-yellow-600 dark:text-yellow-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {result.percentage}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {result.correctCount} / {result.totalQuestions}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            まだクイズの結果がありません。
          </div>
        )}

        {/* ブックマーク */}
        {bookmarks.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
              ブックマーク ({bookmarks.length})
            </h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {bookmarks.map((bookmark) => {
                const bookmarkKey = `${bookmark.category.level}-${bookmark.category.fuelType}-${bookmark.category.year}-${bookmark.questionId}`;
                const isExpanded = expandedBookmarks.has(bookmarkKey);
                
                return (
                  <div
                    key={bookmarkKey}
                    className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleBookmark(bookmarkKey)}
                      className="w-full p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {formatCategoryDisplay(bookmark.category)} - {bookmark.questionId}
                          </div>
                          <div className="mt-1 text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                            {bookmark.question}
                          </div>
                        </div>
                        <svg
                          className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="border-t border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
                        <div className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          問題文:
                        </div>
                        <div className="mb-4 whitespace-pre-line text-sm text-gray-800 dark:text-gray-200">
                          {bookmark.question}
                        </div>
                        
                        <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          選択肢:
                        </div>
                        <div className="space-y-2 mb-4">
                          {bookmark.choices && bookmark.choices.map((choice, index) => {
                            const isCorrect = index === bookmark.answerIndex - 1;
                            return (
                              <div
                                key={index}
                                className={`rounded-lg border-2 p-3 text-sm ${
                                  isCorrect
                                    ? "border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20"
                                    : "border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"
                                }`}
                              >
                                <div className="flex items-start gap-2">
                                  <span className="flex-1 text-gray-800 dark:text-gray-200">
                                    {choice}
                                  </span>
                                  {isCorrect && (
                                    <span className="flex-shrink-0 font-bold text-green-600 dark:text-green-400">
                                      ✓ 正解
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="text-sm">
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            正解: 
                          </span>
                          <span className="ml-2 font-bold text-green-600 dark:text-green-400">
                            {bookmark.choices && extractChoiceNumber(bookmark.choices[bookmark.answerIndex - 1])}
                          </span>
                        </div>
                        
                        {bookmark.explanation && (
                          <div className="mt-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                            <div className="mb-1 text-xs font-semibold text-blue-800 dark:text-blue-300">
                              解説
                            </div>
                            <div className="whitespace-pre-line text-sm text-blue-900 dark:text-blue-200">
                              {bookmark.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

