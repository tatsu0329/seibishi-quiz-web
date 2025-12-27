"use client";

import { useState, useMemo } from "react";
import type { QuestionSet, Question } from "@/src/data/index";
import { formatYearDisplay } from "@/src/utils/formatYear";
import {
  getQuizProgress,
  hasQuizProgress,
  deleteQuizProgress,
} from "@/src/utils/storage";

interface CategorySelectorProps {
  questionSets: QuestionSet[];
  onSelect: (
    questions: Question[],
    category: { level: string; fuelType: string; year: string },
    progress?: any
  ) => void;
  onShowStats?: () => void;
  onShowBookmarks?: () => void;
}

export default function CategorySelector({
  questionSets,
  onSelect,
  onShowStats,
  onShowBookmarks,
}: CategorySelectorProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedFuelType, setSelectedFuelType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(false);
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const selectedCategory = useMemo(() => {
    if (selectedLevel && selectedFuelType && selectedYear) {
      return { level: selectedLevel, fuelType: selectedFuelType, year: selectedYear };
    }
    return null;
  }, [selectedLevel, selectedFuelType, selectedYear]);

  const hasProgress = useMemo(() => {
    if (!selectedCategory) return false;
    return hasQuizProgress(selectedCategory);
  }, [selectedCategory]);

  // 利用可能な選択肢を抽出
  const availableLevels = useMemo(() => {
    const levels = new Set(questionSets.map((set) => set.category.level));
    return Array.from(levels).sort();
  }, [questionSets]);

  const availableFuelTypes = useMemo(() => {
    if (!selectedLevel) return [];
    const fuelTypes = new Set(
      questionSets
        .filter((set) => set.category.level === selectedLevel)
        .map((set) => set.category.fuelType)
    );
    return Array.from(fuelTypes).sort();
  }, [questionSets, selectedLevel]);

  const availableYears = useMemo(() => {
    if (!selectedLevel || !selectedFuelType) return [];
    const years = new Set(
      questionSets
        .filter(
          (set) =>
            set.category.level === selectedLevel &&
            set.category.fuelType === selectedFuelType
        )
        .map((set) => set.category.year)
    );
    return Array.from(years).sort((a, b) => b.localeCompare(a)); // 新しい年度を上に
  }, [questionSets, selectedLevel, selectedFuelType]);

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    setSelectedFuelType("");
    setSelectedYear("");
  };

  const handleFuelTypeChange = (fuelType: string) => {
    setSelectedFuelType(fuelType);
    setSelectedYear("");
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const handleStartQuiz = () => {
    if (!selectedLevel || !selectedFuelType || !selectedYear) return;

    if (hasProgress) {
      setShowResumeDialog(true);
    } else {
      startNewQuiz();
    }
  };

  const startNewQuiz = () => {
    if (!selectedLevel || !selectedFuelType || !selectedYear) return;

    const selectedSet = questionSets.find(
      (set) =>
        set.category.level === selectedLevel &&
        set.category.fuelType === selectedFuelType &&
        set.category.year === selectedYear
    );

    if (selectedSet) {
      let questions = [...selectedSet.questions];
      
      // シャッフルが有効な場合、問題をシャッフル
      if (shuffleQuestions) {
        for (let i = questions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [questions[i], questions[j]] = [questions[j], questions[i]];
        }
      }
      
      onSelect(questions, selectedSet.category);
    }
    setShowResumeDialog(false);
  };

  const resumeQuiz = () => {
    if (!selectedLevel || !selectedFuelType || !selectedYear) return;

    const category = { level: selectedLevel, fuelType: selectedFuelType, year: selectedYear };
    const progress = getQuizProgress(category);
    
    if (progress) {
      const selectedSet = questionSets.find(
        (set) =>
          set.category.level === selectedLevel &&
          set.category.fuelType === selectedFuelType &&
          set.category.year === selectedYear
      );

      if (selectedSet) {
        // 保存された順序で問題を復元
        const questions = progress.questionIds
          .map((id) => selectedSet.questions.find((q) => q.id === id))
          .filter((q): q is Question => q !== undefined);
        
        onSelect(questions, selectedSet.category, progress);
      }
    }
    setShowResumeDialog(false);
  };

  const restartQuiz = () => {
    if (!selectedLevel || !selectedFuelType || !selectedYear) return;
    const category = { level: selectedLevel, fuelType: selectedFuelType, year: selectedYear };
    deleteQuizProgress(category);
    startNewQuiz();
  };

  const canStart = selectedLevel && selectedFuelType && selectedYear;

  return (
    <>
      {/* 再開/リスタートダイアログ */}
      {showResumeDialog && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
              進捗が保存されています
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              {(() => {
                const progress = getQuizProgress(selectedCategory);
                if (!progress) return "";
                return `前回の続き（${progress.userAnswers.length}問回答済み）から再開しますか？それとも最初からやり直しますか？`;
              })()}
            </p>
            <div className="space-y-3">
              <button
                onClick={resumeQuiz}
                className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                続きから再開
              </button>
              <button
                onClick={restartQuiz}
                className="w-full rounded-lg border-2 border-indigo-600 bg-white px-6 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 dark:border-indigo-400 dark:bg-gray-700 dark:text-indigo-400 dark:hover:bg-gray-600"
              >
                最初からやり直す
              </button>
              <button
                onClick={() => setShowResumeDialog(false)}
                className="w-full rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800 md:p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl flex-1">
                問題集を選択
              </h1>
              <div className="flex gap-2">
              {onShowBookmarks && (
                <button
                  onClick={onShowBookmarks}
                  className="rounded-lg bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 transition-colors hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50"
                >
                  ブックマーク
                </button>
              )}
              {onShowStats && (
                <button
                  onClick={onShowStats}
                  className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  統計を見る
                </button>
              )}
            </div>
          </div>
          </div>

          <div className="space-y-6">
          {/* 等級選択 */}
          <div>
            <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
              1. 等級を選択
            </label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {availableLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => handleLevelChange(level)}
                  className={`rounded-lg border-2 px-6 py-4 text-center font-medium transition-all ${
                    selectedLevel === level
                      ? "border-indigo-600 bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100 dark:border-indigo-400"
                      : "border-gray-300 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* 燃料タイプ選択 */}
          {selectedLevel && (
            <div>
              <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
                2. 燃料タイプを選択
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {availableFuelTypes.map((fuelType) => (
                  <button
                    key={fuelType}
                    onClick={() => handleFuelTypeChange(fuelType)}
                    className={`rounded-lg border-2 px-6 py-4 text-center font-medium transition-all ${
                      selectedFuelType === fuelType
                        ? "border-indigo-600 bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100 dark:border-indigo-400"
                        : "border-gray-300 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                    }`}
                  >
                    {fuelType}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 実施年度選択 */}
          {selectedFuelType && (
            <div>
              <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
                3. 実施年度を選択
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {availableYears.map((year) => {
                  const { reiwaYear, sessionNumber } = formatYearDisplay(year);
                  return (
                    <button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      className={`rounded-lg border-2 px-4 py-3 text-center font-medium transition-all ${
                        selectedYear === year
                          ? "border-indigo-600 bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100 dark:border-indigo-400"
                          : "border-gray-300 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                      }`}
                    >
                      <div className="text-sm leading-tight">
                        <div>{reiwaYear}</div>
                        <div>{sessionNumber}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* オプション */}
          {selectedFuelType && (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="shuffle"
                checked={shuffleQuestions}
                onChange={(e) => setShuffleQuestions(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
              <label
                htmlFor="shuffle"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                問題をシャッフルする
              </label>
            </div>
          )}

          {/* 開始ボタン */}
          {canStart && (
            <div className="space-y-3">
              {hasProgress && (
                <div className="flex items-center gap-2 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
                  <svg
                    className="h-5 w-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>この問題集には保存された進捗があります</span>
                </div>
              )}
              <button
                onClick={handleStartQuiz}
                className="w-full rounded-lg bg-indigo-600 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                {hasProgress ? "続きから開始 / 最初から開始" : "クイズを開始"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

