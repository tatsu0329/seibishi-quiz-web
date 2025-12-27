// ローカルストレージのユーティリティ関数

export interface QuizResult {
  id: string; // タイムスタンプベースのID
  category: {
    level: string;
    fuelType: string;
    year: string;
  };
  timestamp: number;
  totalQuestions: number;
  correctCount: number;
  percentage: number;
  answers: {
    questionId: string;
    userAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
  }[];
}

export interface Bookmark {
  questionId: string;
  category: {
    level: string;
    fuelType: string;
    year: string;
  };
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
  timestamp: number;
}

export interface QuizProgress {
  category: {
    level: string;
    fuelType: string;
    year: string;
  };
  currentQuestionIndex: number;
  userAnswers: number[];
  timestamp: number;
  wasShuffled: boolean;
  questionIds: string[]; // シャッフルされた問題の順序を保存
}

const STORAGE_KEYS = {
  QUIZ_RESULTS: "quiz_results",
  BOOKMARKS: "quiz_bookmarks",
  QUIZ_PROGRESS: "quiz_progress",
} as const;

// クイズ結果の保存
export function saveQuizResult(result: QuizResult): void {
  const results = getQuizResults();
  results.push(result);
  localStorage.setItem(STORAGE_KEYS.QUIZ_RESULTS, JSON.stringify(results));
}

// クイズ結果の取得
export function getQuizResults(): QuizResult[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
  return data ? JSON.parse(data) : [];
}

// ブックマークの一意キーを生成
export function getBookmarkKey(
  questionId: string,
  category: { level: string; fuelType: string; year: string }
): string {
  return `${category.level}-${category.fuelType}-${category.year}-${questionId}`;
}

// ブックマークの追加
export function addBookmark(bookmark: Bookmark): void {
  const bookmarks = getBookmarks();
  const bookmarkKey = getBookmarkKey(bookmark.questionId, bookmark.category);
  
  // 既に存在する場合は追加しない（カテゴリとIDの組み合わせで判定）
  if (
    !bookmarks.find(
      (b) => getBookmarkKey(b.questionId, b.category) === bookmarkKey
    )
  ) {
    bookmarks.push(bookmark);
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }
}

// ブックマークの削除
export function removeBookmark(
  questionId: string,
  category: { level: string; fuelType: string; year: string }
): void {
  const bookmarks = getBookmarks();
  const bookmarkKey = getBookmarkKey(questionId, category);
  const filtered = bookmarks.filter(
    (b) => getBookmarkKey(b.questionId, b.category) !== bookmarkKey
  );
  localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(filtered));
}

// ブックマークの取得
export function getBookmarks(): Bookmark[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
  return data ? JSON.parse(data) : [];
}

// ブックマークの確認
export function isBookmarked(
  questionId: string,
  category: { level: string; fuelType: string; year: string }
): boolean {
  const bookmarks = getBookmarks();
  const bookmarkKey = getBookmarkKey(questionId, category);
  return bookmarks.some(
    (b) => getBookmarkKey(b.questionId, b.category) === bookmarkKey
  );
}

// カテゴリキーを生成
export function getCategoryKey(category: {
  level: string;
  fuelType: string;
  year: string;
}): string {
  return `${category.level}-${category.fuelType}-${category.year}`;
}

// 進捗の保存
export function saveQuizProgress(progress: QuizProgress): void {
  const allProgress = getAllQuizProgress();
  const categoryKey = getCategoryKey(progress.category);
  allProgress[categoryKey] = progress;
  localStorage.setItem(STORAGE_KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
}

// 進捗の取得
export function getQuizProgress(category: {
  level: string;
  fuelType: string;
  year: string;
}): QuizProgress | null {
  const allProgress = getAllQuizProgress();
  const categoryKey = getCategoryKey(category);
  return allProgress[categoryKey] || null;
}

// すべての進捗を取得
export function getAllQuizProgress(): Record<string, QuizProgress> {
  if (typeof window === "undefined") return {};
  const data = localStorage.getItem(STORAGE_KEYS.QUIZ_PROGRESS);
  return data ? JSON.parse(data) : {};
}

// 進捗の削除
export function deleteQuizProgress(category: {
  level: string;
  fuelType: string;
  year: string;
}): void {
  const allProgress = getAllQuizProgress();
  const categoryKey = getCategoryKey(category);
  delete allProgress[categoryKey];
  localStorage.setItem(STORAGE_KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
}

// 進捗が存在するかチェック
export function hasQuizProgress(category: {
  level: string;
  fuelType: string;
  year: string;
}): boolean {
  return getQuizProgress(category) !== null;
}

// ストレージのクリア（デバッグ用）
export function clearStorage(): void {
  localStorage.removeItem(STORAGE_KEYS.QUIZ_RESULTS);
  localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
  localStorage.removeItem(STORAGE_KEYS.QUIZ_PROGRESS);
}

