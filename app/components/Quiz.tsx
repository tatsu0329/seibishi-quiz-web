"use client";

import { useState, useEffect } from "react";
import {
  saveQuizResult,
  addBookmark,
  removeBookmark,
  isBookmarked as checkBookmarked,
  saveQuizProgress,
  deleteQuizProgress,
  type QuizResult,
  type QuizProgress,
} from "@/src/utils/storage";
import { formatCategoryDisplay } from "@/src/utils/formatYear";
import {
  trackQuizStart,
  trackQuizComplete,
  trackQuizRetireWithSave,
  trackQuizRetireWithoutSave,
  trackQuizRestart,
  trackReviewModeStart,
  trackBookmarkAdd,
  trackBookmarkRemove,
} from "@/src/utils/analytics";
import AdSense from "./AdSense";
import Footer from "./Footer";

interface Question {
  id: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
  images?: string[];
}

interface QuizProps {
  questions: Question[];
  category: {
    level: string;
    fuelType: string;
    year: string;
  };
  onBackToCategory?: () => void;
  onReviewIncorrect?: (incorrectQuestions: Question[]) => void;
  initialProgress?: QuizProgress | null;
}

export default function Quiz({
  questions,
  category,
  onBackToCategory,
  onReviewIncorrect,
  initialProgress,
}: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    initialProgress?.currentQuestionIndex || 0
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(
    initialProgress?.userAnswers || []
  );
  const [showResult, setShowResult] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [expandedResults, setExpandedResults] = useState<Set<string>>(
    new Set()
  );
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    // ブックマーク状態を初期化
    const bookmarks = new Set<string>();
    questions.forEach((q) => {
      if (checkBookmarked(q.id, category)) {
        bookmarks.add(q.id);
      }
    });
    setBookmarkedIds(bookmarks);

    // 問題集開始/再開のトラッキング
    const isResumed = initialProgress !== null && initialProgress !== undefined;
    const progressPercentage = initialProgress
      ? Math.round(
          (initialProgress.currentQuestionIndex / questions.length) * 100
        )
      : 0;
    trackQuizStart(category, isResumed, progressPercentage);
  }, [questions, category, initialProgress]);

  // 選択肢から番号部分（例: "(1)"）のみを抽出する関数
  const extractChoiceNumber = (choice: string): string => {
    const match = choice.match(/^\([0-9]+\)/);
    return match ? match[0] : choice;
  };

  const handleBookmarkToggle = (questionId: string) => {
    const isBookmarked = bookmarkedIds.has(questionId);
    if (isBookmarked) {
      removeBookmark(questionId, category);
      trackBookmarkRemove(category, questionId);
      setBookmarkedIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(questionId);
        return newSet;
      });
    } else {
      addBookmark({
        questionId,
        category,
        question: currentQuestion.question,
        choices: currentQuestion.choices,
        answerIndex: currentQuestion.answerIndex,
        explanation: currentQuestion.explanation,
        timestamp: Date.now(),
      });
      trackBookmarkAdd(category, questionId);
      setBookmarkedIds((prev) => new Set(prev).add(questionId));
    }
  };

  const handleAnswerSelect = (choiceIndex: number) => {
    if (!isAnswered) {
      setSelectedAnswer(choiceIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      setIsAnswered(true);
      setUserAnswers([...userAnswers, selectedAnswer]);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const correctCount = userAnswers.reduce((count, answer, index) => {
        return count + (answer === questions[index].answerIndex - 1 ? 1 : 0);
      }, 0);
      const percentage = Math.round((correctCount / questions.length) * 100);

      // 結果を保存
      const result: QuizResult = {
        id: Date.now().toString(),
        category,
        timestamp: Date.now(),
        totalQuestions: questions.length,
        correctCount,
        percentage,
        answers: questions.map((q, index) => ({
          questionId: q.id,
          userAnswer: userAnswers[index],
          correctAnswer: q.answerIndex - 1,
          isCorrect: userAnswers[index] === q.answerIndex - 1,
        })),
      };
      saveQuizResult(result);

      // 完了したら進捗を削除
      deleteQuizProgress(category);

      // 回答完了のトラッキング
      trackQuizComplete(
        category,
        correctCount,
        questions.length,
        percentage,
        isReviewMode
      );

      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleSaveAndExit = () => {
    const progress: QuizProgress = {
      category,
      currentQuestionIndex,
      userAnswers,
      timestamp: Date.now(),
      wasShuffled: false,
      questionIds: questions.map((q) => q.id),
    };
    saveQuizProgress(progress);

    // 保存して終了のトラッキング
    trackQuizRetireWithSave(
      category,
      currentQuestionIndex,
      questions.length,
      userAnswers.length
    );

    if (onBackToCategory) {
      onBackToCategory();
    }
  };

  const handleExitWithoutSaving = () => {
    // 保存せずに終了のトラッキング
    trackQuizRetireWithoutSave(
      category,
      currentQuestionIndex,
      questions.length,
      userAnswers.length
    );

    setShowSaveConfirm(false);
    if (onBackToCategory) {
      onBackToCategory();
    }
  };

  const handleBackClick = () => {
    if (userAnswers.length > 0) {
      setShowSaveConfirm(true);
    } else {
      if (onBackToCategory) {
        onBackToCategory();
      }
    }
  };

  const handleRestart = () => {
    deleteQuizProgress(category); // 進捗を削除

    // リスタートのトラッキング
    trackQuizRestart(category);

    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setUserAnswers([]);
    setShowResult(false);
  };

  const handleReviewIncorrect = () => {
    if (!onReviewIncorrect) return;
    const incorrectQuestions = questions.filter(
      (q, index) => userAnswers[index] !== q.answerIndex - 1
    );

    // 復習モード開始のトラッキング
    trackReviewModeStart(category, incorrectQuestions.length, questions.length);

    // 復習モードに移行する前に、すべての状態をリセット
    setIsReviewMode(true);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowResult(false);
    setExpandedResults(new Set());
    onReviewIncorrect(incorrectQuestions);
  };

  const toggleResultExpansion = (questionId: string) => {
    setExpandedResults((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  if (showResult) {
    // 復習モードの場合は、現在のquestions配列に対する回答のみを考慮
    const correctCount = userAnswers.reduce((count, answer, index) => {
      if (index >= questions.length) return count;
      return count + (answer === questions[index].answerIndex - 1 ? 1 : 0);
    }, 0);
    const percentage = Math.round((correctCount / questions.length) * 100);
    const incorrectCount = questions.length - correctCount;

    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex-1 flex items-center justify-center py-8 px-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <h1 className="mb-4 text-center text-4xl font-bold text-gray-800 dark:text-gray-100">
            結果
          </h1>
          <div className="mb-6 rounded-lg bg-indigo-50 px-4 py-2 text-center dark:bg-indigo-900/20">
            <div className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              問題集: {formatCategoryDisplay(category)}
            </div>
          </div>
          <div className="mb-8 text-center">
            <div className="mb-4 text-6xl font-bold text-indigo-600 dark:text-indigo-400">
              {correctCount} / {questions.length}
            </div>
            <div className="text-2xl text-gray-600 dark:text-gray-400">
              正答率: {percentage}%
            </div>
          </div>
          <div className="mb-6 space-y-4">
            {questions.map((question, index) => {
              // userAnswersの範囲チェック
              if (index >= userAnswers.length) {
                return null;
              }
              const isCorrect = userAnswers[index] === question.answerIndex - 1;
              const userAnswerIndex = userAnswers[index];
              const isBookmarked = bookmarkedIds.has(question.id);
              const isExpanded = expandedResults.has(question.id);

              return (
                <div
                  key={question.id}
                  className={`rounded-lg border-2 overflow-hidden ${
                    isCorrect
                      ? "border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20"
                      : "border-red-500 bg-red-50 dark:border-red-400 dark:bg-red-900/20"
                  }`}
                >
                  {/* ヘッダー部分（常に表示） */}
                  <div
                    onClick={() => toggleResultExpansion(question.id)}
                    className="p-4 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg
                          className={`h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 transition-transform ${
                            isExpanded ? "rotate-90" : ""
                          }`}
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
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {question.id}
                        </span>
                        {isBookmarked && (
                          <svg
                            className="h-5 w-5 fill-yellow-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        {/* 回答サマリー（常に表示） */}
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {userAnswerIndex !== undefined &&
                            userAnswerIndex < question.choices.length && (
                              <span>
                                選択:{" "}
                                {extractChoiceNumber(
                                  question.choices[userAnswerIndex]
                                )}
                              </span>
                            )}
                          {" / "}
                          <span className="text-green-600 dark:text-green-400 font-semibold">
                            正解:{" "}
                            {extractChoiceNumber(
                              question.choices[question.answerIndex - 1]
                            )}
                          </span>
                        </div>
                        <span
                          className={`font-bold ${
                            isCorrect
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {isCorrect ? "正解" : "不正解"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 折りたたみ可能な詳細部分 */}
                  {isExpanded && (
                    <div className="border-t border-current/20 px-4 pb-4 pt-3">
                      {/* 問題文 */}
                      <div className="mb-3 text-sm text-gray-800 dark:text-gray-200">
                        {question.question}
                      </div>

                      {/* 画像表示 */}
                      {question.images && question.images.length > 0 && (
                        <div className="mb-3 space-y-4">
                          {question.images.map((imagePath, imgIndex) => (
                            <div key={imgIndex} className="relative">
                              {question.images &&
                                question.images.length > 1 && (
                                  <div className="mb-2 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                                    図 {imgIndex + 1}
                                  </div>
                                )}
                              <img
                                src={imagePath}
                                alt={`問題図 ${imgIndex + 1}`}
                                className="w-full max-w-md mx-auto rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-zoom-in hover:opacity-90 transition-opacity"
                                onClick={() => setZoomedImage(imagePath)}
                              />
                              <div className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
                                画像をクリックで拡大表示
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 全ての選択肢 */}
                      <div className="mb-3">
                        <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                          選択肢:
                        </div>
                        <div className="space-y-1">
                          {question.choices.map((choice, choiceIndex) => {
                            const isUserAnswer =
                              choiceIndex === userAnswerIndex;
                            const isCorrectAnswer =
                              choiceIndex === question.answerIndex - 1;

                            let borderColor =
                              "border-gray-200 dark:border-gray-600";
                            let bgColor = "bg-white dark:bg-gray-700";

                            if (isCorrectAnswer) {
                              borderColor =
                                "border-green-500 dark:border-green-400";
                              bgColor = "bg-green-50 dark:bg-green-900/20";
                            } else if (isUserAnswer && !isCorrect) {
                              borderColor =
                                "border-red-500 dark:border-red-400";
                              bgColor = "bg-red-50 dark:bg-red-900/20";
                            }

                            return (
                              <div
                                key={choiceIndex}
                                className={`rounded border-2 ${borderColor} ${bgColor} p-2 text-xs`}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <span className="flex-1 text-gray-800 dark:text-gray-200">
                                    {choice}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    {isCorrectAnswer && (
                                      <span className="font-bold text-green-600 dark:text-green-400">
                                        ✓ 正解
                                      </span>
                                    )}
                                    {isUserAnswer && (
                                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                                        [選択]
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* 解説 */}
                      {question.explanation && (
                        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                          <div className="mb-1 text-xs font-semibold text-blue-800 dark:text-blue-300">
                            解説
                          </div>
                          <div className="whitespace-pre-line text-xs text-blue-900 dark:text-blue-200">
                            {question.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="space-y-3">
            {incorrectCount > 0 && onReviewIncorrect && (
              <button
                onClick={handleReviewIncorrect}
                className="w-full rounded-lg bg-orange-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
              >
                間違えた問題を復習する ({incorrectCount}問)
              </button>
            )}
            <div className="flex gap-4">
              <button
                onClick={handleRestart}
                className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                もう一度挑戦する
              </button>
              {onBackToCategory && (
                <button
                  onClick={onBackToCategory}
                  className="flex-1 rounded-lg border-2 border-indigo-600 bg-white px-6 py-3 text-lg font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 dark:border-indigo-400 dark:bg-gray-700 dark:text-indigo-400 dark:hover:bg-gray-600"
                >
                  カテゴリ選択に戻る
                </button>
              )}
            </div>

            {/* 広告表示エリア */}
            <div className="mt-8">
              <AdSense
                slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT || ""}
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

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* 画像拡大表示モーダル */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-12 right-0 rounded-lg bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              aria-label="閉じる"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={zoomedImage}
              alt="問題図"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* 保存確認ダイアログ */}
      {showSaveConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
              進捗を保存しますか？
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              現在の進捗（{userAnswers.length}/{questions.length}
              問）を保存して、後から続きを再開できます。
            </p>
            <div className="space-y-3">
              <button
                onClick={handleSaveAndExit}
                className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                保存して終了
              </button>
              <button
                onClick={handleExitWithoutSaving}
                className="w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                保存せずに終了
              </button>
              <button
                onClick={() => setShowSaveConfirm(false)}
                className="w-full rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
        <div className="flex-1 flex items-center justify-center py-8 px-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800 md:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-4">
              {onBackToCategory && (
                <button
                  onClick={handleBackClick}
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
              )}
              <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 md:text-2xl lg:text-3xl flex-1 min-w-0 truncate">
                {formatCategoryDisplay(category)}
              </h1>
              <div className="text-lg font-semibold text-gray-600 dark:text-gray-400 flex-shrink-0">
                {currentQuestionIndex + 1} / {questions.length}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {currentQuestion.id}
              </div>
              <button
                onClick={() => handleBookmarkToggle(currentQuestion.id)}
                className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                aria-label="ブックマーク"
              >
                {bookmarkedIds.has(currentQuestion.id) ? (
                  <svg
                    className="h-6 w-6 fill-yellow-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ) : (
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="mb-6 whitespace-pre-line text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              {currentQuestion.question}
            </div>

            {/* 画像表示 */}
            {currentQuestion.images && currentQuestion.images.length > 0 && (
              <div className="mb-4 space-y-4">
                {currentQuestion.images.map((imagePath, imgIndex) => (
                  <div key={imgIndex} className="relative">
                    {currentQuestion.images &&
                      currentQuestion.images.length > 1 && (
                        <div className="mb-2 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                          図 {imgIndex + 1}
                        </div>
                      )}
                    <img
                      src={imagePath}
                      alt={`問題図 ${imgIndex + 1}`}
                      className="w-full max-w-md mx-auto rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={() => setZoomedImage(imagePath)}
                    />
                    <div className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
                      画像をクリックで拡大表示
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-6 space-y-3">
            {currentQuestion.choices.map((choice, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.answerIndex - 1;
              const isWrong = isAnswered && isSelected && !isCorrect;

              let buttonClass =
                "w-full rounded-lg border-2 p-4 text-left transition-all";
              if (isAnswered) {
                if (isCorrect) {
                  buttonClass +=
                    " border-green-500 bg-green-100 text-green-900 dark:border-green-400 dark:bg-green-900/20 dark:text-green-300";
                } else if (isWrong) {
                  buttonClass +=
                    " border-red-500 bg-red-100 text-red-900 dark:border-red-400 dark:bg-red-900/20 dark:text-red-300";
                } else if (isSelected) {
                  buttonClass +=
                    " border-blue-500 bg-blue-100 text-blue-900 dark:border-blue-400 dark:bg-blue-900/20 dark:text-blue-300";
                } else {
                  buttonClass +=
                    " border-gray-300 bg-gray-50 text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400";
                }
              } else {
                buttonClass += isSelected
                  ? " border-indigo-500 bg-indigo-100 text-indigo-900 dark:border-indigo-400 dark:bg-indigo-900/20 dark:text-indigo-300"
                  : " border-gray-300 bg-white text-gray-800 hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex-1 text-left font-medium leading-relaxed">
                      {choice}
                    </span>
                    {isAnswered && isCorrect && (
                      <span className="flex-shrink-0 text-xl">✓</span>
                    )}
                    {isAnswered && isWrong && (
                      <span className="flex-shrink-0 text-xl">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mb-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`font-bold ${
                    selectedAnswer === currentQuestion.answerIndex - 1
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {selectedAnswer === currentQuestion.answerIndex - 1
                    ? "正解！"
                    : "不正解"}
                </span>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                正解は「
                {extractChoiceNumber(
                  currentQuestion.choices[currentQuestion.answerIndex - 1]
                )}
                」です。
              </div>
              {currentQuestion.explanation && (
                <div className="mt-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                  <div className="mb-1 text-xs font-semibold text-blue-800 dark:text-blue-300">
                    解説
                  </div>
                  <div className="whitespace-pre-line text-sm text-blue-900 dark:text-blue-200">
                    {currentQuestion.explanation}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 広告表示エリア（問題回答画面） */}
          <div className="my-6">
            <AdSense
              slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_QUESTION || ""}
              className="my-4"
              style={{ minHeight: "100px" }}
            />
          </div>

          <div className="flex gap-4">
            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                回答する
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                {isLastQuestion ? "結果を見る" : "次へ"}
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
