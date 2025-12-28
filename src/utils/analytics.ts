// Google Analytics カスタムイベント送信用のヘルパー関数

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// 問題集開始
export const trackQuizStart = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  },
  isResumed: boolean = false,
  progressPercentage?: number
) => {
  trackEvent("quiz_start", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
    is_resumed: isResumed,
    progress_percentage: progressPercentage,
  });
};

// 回答完了
export const trackQuizComplete = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  },
  correctCount: number,
  totalQuestions: number,
  percentage: number,
  isReviewMode: boolean = false
) => {
  trackEvent("quiz_complete", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
    correct_count: correctCount,
    total_questions: totalQuestions,
    percentage: percentage,
    is_review_mode: isReviewMode,
  });
};

// 途中でリタイア（保存あり）
export const trackQuizRetireWithSave = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  },
  currentQuestionIndex: number,
  totalQuestions: number,
  answeredQuestions: number
) => {
  const progressPercentage = Math.round(
    (currentQuestionIndex / totalQuestions) * 100
  );
  trackEvent("quiz_retire_save", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
    current_question_index: currentQuestionIndex,
    total_questions: totalQuestions,
    answered_questions: answeredQuestions,
    progress_percentage: progressPercentage,
  });
};

// 途中でリタイア（保存なし）
export const trackQuizRetireWithoutSave = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  },
  currentQuestionIndex: number,
  totalQuestions: number,
  answeredQuestions: number
) => {
  const progressPercentage = Math.round(
    (currentQuestionIndex / totalQuestions) * 100
  );
  trackEvent("quiz_retire_no_save", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
    current_question_index: currentQuestionIndex,
    total_questions: totalQuestions,
    answered_questions: answeredQuestions,
    progress_percentage: progressPercentage,
  });
};

// クイズリスタート
export const trackQuizRestart = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  }
) => {
  trackEvent("quiz_restart", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
  });
};

// 復習モード開始
export const trackReviewModeStart = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  },
  incorrectCount: number,
  totalQuestions: number
) => {
  trackEvent("review_mode_start", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
    incorrect_count: incorrectCount,
    total_questions: totalQuestions,
  });
};

// ブックマーク追加
export const trackBookmarkAdd = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  },
  questionId: string
) => {
  trackEvent("bookmark_add", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
    question_id: questionId,
  });
};

// ブックマーク削除
export const trackBookmarkRemove = (
  category: {
    level: string;
    fuelType: string;
    year: string;
  },
  questionId: string
) => {
  trackEvent("bookmark_remove", {
    category_name: `${category.level}_${category.fuelType}_${category.year}`,
    category_level: category.level,
    category_fuel_type: category.fuelType,
    category_year: category.year,
    question_id: questionId,
  });
};

// 統計画面表示
export const trackStatsView = () => {
  trackEvent("stats_view");
};

// ブックマーク一覧表示
export const trackBookmarksView = () => {
  trackEvent("bookmarks_view");
};

