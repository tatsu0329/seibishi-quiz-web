'use client';

import { useState, useEffect } from 'react';

interface Question {
  id: string;
  question: string;
  choices: string[];
  answerIndex: number;
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

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
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setUserAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const correctCount = userAnswers.reduce((count, answer, index) => {
      return count + (answer === questions[index].answerIndex ? 1 : 0);
    }, 0);
    const percentage = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
            結果
          </h1>
          <div className="mb-8 text-center">
            <div className="mb-4 text-6xl font-bold text-indigo-600">
              {correctCount} / {questions.length}
            </div>
            <div className="text-2xl text-gray-600">
              正答率: {percentage}%
            </div>
          </div>
          <div className="mb-6 space-y-4">
            {questions.map((question, index) => {
              const isCorrect = userAnswers[index] === question.answerIndex;
              return (
                <div
                  key={question.id}
                  className={`rounded-lg border-2 p-4 ${
                    isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-gray-700">
                      {question.id}
                    </span>
                    <span
                      className={`font-bold ${
                        isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {isCorrect ? '正解' : '不正解'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    選択した答え: {question.choices[userAnswers[index]]}
                  </div>
                  <div className="text-sm text-gray-600">
                    正解: {question.choices[question.answerIndex]}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleRestart}
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            もう一度挑戦する
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            クイズ
          </h1>
          <div className="text-lg font-semibold text-gray-600">
            {currentQuestionIndex + 1} / {questions.length}
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-4 text-sm font-semibold text-indigo-600">
            {currentQuestion.id}
          </div>
          <div className="mb-6 whitespace-pre-line text-lg leading-relaxed text-gray-800">
            {currentQuestion.question}
          </div>
        </div>

        <div className="mb-6 space-y-3">
          {currentQuestion.choices.map((choice, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.answerIndex;
            const isWrong = isAnswered && isSelected && !isCorrect;

            let buttonClass =
              'w-full rounded-lg border-2 p-4 text-left transition-all';
            if (isAnswered) {
              if (isCorrect) {
                buttonClass += ' border-green-500 bg-green-100 text-green-900';
              } else if (isWrong) {
                buttonClass += ' border-red-500 bg-red-100 text-red-900';
              } else if (isSelected) {
                buttonClass += ' border-blue-500 bg-blue-100 text-blue-900';
              } else {
                buttonClass += ' border-gray-300 bg-gray-50 text-gray-600';
              }
            } else {
              buttonClass += isSelected
                ? ' border-indigo-500 bg-indigo-100 text-indigo-900'
                : ' border-gray-300 bg-white text-gray-800 hover:border-indigo-300 hover:bg-indigo-50';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{choice}</span>
                  {isAnswered && isCorrect && (
                    <span className="text-xl">✓</span>
                  )}
                  {isAnswered && isWrong && <span className="text-xl">✗</span>}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mb-6 rounded-lg bg-gray-100 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`font-bold ${
                  selectedAnswer === currentQuestion.answerIndex
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {selectedAnswer === currentQuestion.answerIndex
                  ? '正解！'
                  : '不正解'}
              </span>
            </div>
            <div className="text-sm text-gray-700">
              正解は「{currentQuestion.choices[currentQuestion.answerIndex]}」です。
            </div>
            <div className="mt-2 text-sm text-gray-600">
              ※ 解説機能は実装予定です
            </div>
          </div>
        )}

        <div className="flex gap-4">
          {!isAnswered ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-indigo-700"
            >
              回答する
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              {isLastQuestion ? '結果を見る' : '次へ'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

