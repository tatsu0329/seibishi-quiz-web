"use client";

import { useState, useMemo, useEffect } from "react";
import { getBookmarks, getCategoryKey, removeBookmark } from "@/src/utils/storage";
import { formatCategoryDisplay } from "@/src/utils/formatYear";
import { trackBookmarksView } from "@/src/utils/analytics";
import type { Bookmark } from "@/src/utils/storage";

interface BookmarksViewProps {
  onBack: () => void;
}

export default function BookmarksView({ onBack }: BookmarksViewProps) {
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedBookmarks, setExpandedBookmarks] = useState<Set<string>>(new Set());

  useEffect(() => {
    // ブックマーク一覧表示のトラッキング
    trackBookmarksView();
  }, []);

  // ブックマーク一覧を更新
  const refreshBookmarks = () => {
    setBookmarks(getBookmarks());
    // 選択中のカテゴリにブックマークがなくなったら、カテゴリ選択に戻る
    if (selectedCategory) {
      const remaining = getBookmarks().filter(
        (b) => getCategoryKey(b.category) === selectedCategory
      );
      if (remaining.length === 0) {
        setSelectedCategory(null);
        setExpandedBookmarks(new Set());
      }
    }
  };

  // ブックマークを解除
  const handleRemoveBookmark = (bookmark: Bookmark, e: React.MouseEvent) => {
    e.stopPropagation(); // 親要素のクリックイベントを防ぐ
    if (confirm(`${bookmark.questionId}のブックマークを解除しますか？`)) {
      removeBookmark(bookmark.questionId, bookmark.category);
      refreshBookmarks();
    }
  };

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

  // ブックマークをカテゴリごとにグループ化
  const groupedBookmarks = useMemo(() => {
    const groups = new Map<string, { bookmarks: Bookmark[]; category: any }>();
    
    bookmarks.forEach((bookmark) => {
      const key = getCategoryKey(bookmark.category);
      if (!groups.has(key)) {
        groups.set(key, { bookmarks: [], category: bookmark.category });
      }
      groups.get(key)!.bookmarks.push(bookmark);
    });

    // カテゴリキーでソート（新しい年度が上に来るように）
    return Array.from(groups.entries())
      .map(([key, data]) => ({ key, ...data }))
      .sort((a, b) => {
        const aYear = a.category.year;
        const bYear = b.category.year;
        
        // 年度で降順ソート
        const yearCompare = bYear.localeCompare(aYear);
        if (yearCompare !== 0) return yearCompare;
        
        // レベルでソート
        const levelCompare = a.category.level.localeCompare(b.category.level);
        if (levelCompare !== 0) return levelCompare;
        
        // 燃料タイプでソート
        return a.category.fuelType.localeCompare(b.category.fuelType);
      });
  }, [bookmarks]);

  // カテゴリ選択画面
  if (!selectedCategory) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
                aria-label="戻る"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl flex-1">
                ブックマーク
              </h1>
            </div>
          </div>

          {groupedBookmarks.length === 0 ? (
            <div className="text-center text-gray-600 dark:text-gray-400 py-12">
              まだブックマークがありません。
              <br />
              クイズ中に気になる問題を星マークでブックマークできます。
            </div>
          ) : (
            <div className="space-y-3">
              <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                全{bookmarks.length}問のブックマークが{groupedBookmarks.length}の問題集にあります
              </div>
              {groupedBookmarks.map((group) => (
                <button
                  key={group.key}
                  onClick={() => setSelectedCategory(group.key)}
                  className="w-full rounded-lg border-2 border-gray-300 bg-white p-6 text-left transition-all hover:border-indigo-500 hover:bg-indigo-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-indigo-400 dark:hover:bg-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {formatCategoryDisplay(group.category)}
                      </div>
                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {group.bookmarks.length}問のブックマーク
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-indigo-100 px-4 py-2 text-lg font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                        {group.bookmarks.length}
                      </span>
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 選択されたカテゴリのブックマーク一覧
  const selectedGroup = groupedBookmarks.find((g) => g.key === selectedCategory);
  if (!selectedGroup) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setExpandedBookmarks(new Set());
              }}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
              aria-label="戻る"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">
                {formatCategoryDisplay(selectedGroup.category)}
              </h1>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {selectedGroup.bookmarks.length}問のブックマーク
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 max-h-[calc(100vh-12rem)] overflow-y-auto">
          {selectedGroup.bookmarks.map((bookmark) => {
            const bookmarkKey = `${selectedCategory}-${bookmark.questionId}`;
            const isExpanded = expandedBookmarks.has(bookmarkKey);
            
            return (
              <div
                key={bookmarkKey}
                className="rounded-lg border-2 border-gray-200 dark:border-gray-600 overflow-hidden"
              >
                <div
                  onClick={() => toggleBookmark(bookmarkKey)}
                  className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                          {bookmark.questionId}
                        </span>
                        <svg
                          className="h-4 w-4 fill-yellow-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-800 dark:text-gray-200 line-clamp-3">
                        {bookmark.question}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleRemoveBookmark(bookmark, e)}
                        className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        aria-label="ブックマークを解除"
                        title="ブックマークを解除"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
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
                  </div>
                </div>
                                
                {isExpanded && (
                  <div className="border-t-2 border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-800">
                    <div className="mb-4">
                      <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        問題文:
                      </div>
                      <div className="whitespace-pre-line text-sm text-gray-800 dark:text-gray-200">
                        {bookmark.question}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        選択肢:
                      </div>
                      <div className="space-y-2">
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
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        正解: 
                      </span>
                      <span className="ml-2 text-sm font-bold text-green-600 dark:text-green-400">
                        {bookmark.choices && extractChoiceNumber(bookmark.choices[bookmark.answerIndex - 1])}
                      </span>
                    </div>
                    
                    {bookmark.explanation && (
                      <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                        <div className="mb-1 text-xs font-semibold text-blue-800 dark:text-blue-300">
                          解説
                        </div>
                        <div className="whitespace-pre-line text-sm text-blue-900 dark:text-blue-200">
                          {bookmark.explanation}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <button
                        onClick={(e) => handleRemoveBookmark(bookmark, e)}
                        className="w-full rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
                      >
                        ブックマークを解除
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

