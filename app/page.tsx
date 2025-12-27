"use client";

import { useState } from "react";
import Quiz from "./components/Quiz";
import CategorySelector from "./components/CategorySelector";
import ThemeToggle from "./components/ThemeToggle";
import StatsView from "./components/StatsView";
import BookmarksView from "./components/BookmarksView";
import questionSetsData from "@/src/data/index";
import type { Question, QuestionSet } from "@/src/data/index";
import type { QuizProgress } from "@/src/utils/storage";

interface SelectedQuiz {
  questions: Question[];
  category: {
    level: string;
    fuelType: string;
    year: string;
  };
  progress?: QuizProgress | null;
}

export default function Home() {
  const [selectedQuiz, setSelectedQuiz] = useState<SelectedQuiz | null>(null);
  const [showStats, setShowStats] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  if (showBookmarks) {
    return (
      <>
        <ThemeToggle />
        <BookmarksView onBack={() => setShowBookmarks(false)} />
      </>
    );
  }

  if (showStats) {
    return (
      <>
        <ThemeToggle />
        <StatsView onBack={() => setShowStats(false)} />
      </>
    );
  }

  if (selectedQuiz) {
    return (
      <>
        <ThemeToggle />
        <Quiz
          questions={selectedQuiz.questions}
          category={selectedQuiz.category}
          initialProgress={selectedQuiz.progress}
          onBackToCategory={() => setSelectedQuiz(null)}
          onReviewIncorrect={(incorrectQuestions) => {
            setSelectedQuiz({
              questions: incorrectQuestions,
              category: selectedQuiz.category,
            });
          }}
        />
      </>
    );
  }

  return (
    <>
      <ThemeToggle />
      <CategorySelector
        questionSets={questionSetsData}
        onSelect={(questions, category, progress) =>
          setSelectedQuiz({ questions, category, progress })
        }
        onShowStats={() => setShowStats(true)}
        onShowBookmarks={() => setShowBookmarks(true)}
      />
    </>
  );
}
