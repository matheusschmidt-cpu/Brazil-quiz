"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { Question } from "@/lib/quiz-data"
import { cn } from "@/lib/utils"

interface QuizScreenProps {
  questions: Question[]
  playerName: string
  onComplete: (score: number) => void
  onQuit: () => void
}

export function QuizScreen({ questions, playerName, onComplete, onQuit }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex) / questions.length) * 100

  const handleSelectAnswer = (answerIndex: number) => {
    if (isAnswered) return
    
    setSelectedAnswer(answerIndex)
    setIsAnswered(true)
    
    const selectedOption = currentQuestion.options[answerIndex]
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      const finalScore = selectedAnswer === currentQuestion.correctAnswer 
        ? score 
        : score
      onComplete(finalScore)
    }
  }

  const getOptionStyles = (index: number) => {
    const option = currentQuestion.options[index]
    const isCorrect = option === currentQuestion.correctAnswer
    
    if (!isAnswered) {
      return selectedAnswer === index
        ? "border-brazil-green bg-brazil-green/10 ring-2 ring-brazil-green"
        : "border-border hover:border-brazil-green/50 hover:bg-brazil-green/5"
    }

    if (isCorrect) {
      return "border-brazil-green bg-brazil-green/20 ring-2 ring-brazil-green"
    }

    if (selectedAnswer === index && !isCorrect) {
      return "border-red-400 bg-red-50 ring-2 ring-red-400"
    }

    return "border-border opacity-50"
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brazil-green/10 via-brazil-yellow/10 to-brazil-blue/10">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-brazil-green/20 px-4 py-3 md:px-8 md:py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={onQuit}
                className="text-muted-foreground hover:text-foreground hover:bg-brazil-green/10 px-3 py-2 h-auto rounded-xl"
              >
                <span className="text-lg">🏠</span>
                <span className="hidden md:inline ml-2 font-medium">Home</span>
              </Button>
              <span className="text-2xl">🇧🇷</span>
              <span className="font-bold text-lg md:text-xl text-foreground">
                Question {currentIndex + 1} of {questions.length}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-brazil-yellow/30 px-4 py-2 rounded-full">
              <span className="text-xl">⭐</span>
              <span className="font-bold text-lg md:text-xl text-foreground">
                {score}
              </span>
            </div>
          </div>
          
          {/* Progress bar */}
          <Progress 
            value={progress} 
            className="h-3 bg-brazil-green/20"
            indicatorClassName="bg-brazil-green"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-4xl shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
          <CardContent className="p-6 md:p-10">
            {/* Question */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Answer options - 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentQuestion.options.map((option, index) => {
                const isCorrect = option === currentQuestion.correctAnswer
                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={isAnswered}
                    className={cn(
                      "relative p-5 md:p-6 text-left rounded-2xl border-2 transition-all duration-200",
                      "min-h-[70px] md:min-h-[80px]",
                      "text-lg md:text-xl font-medium",
                      "active:scale-[0.98]",
                      getOptionStyles(index),
                      isAnswered && "cursor-default"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold",
                        selectedAnswer === index && !isAnswered
                          ? "bg-brazil-green text-white"
                          : isAnswered && isCorrect
                          ? "bg-brazil-green text-white"
                          : isAnswered && selectedAnswer === index
                          ? "bg-red-400 text-white"
                          : "bg-muted text-muted-foreground"
                      )}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-foreground">{option}</span>
                    </div>
                    
                    {/* Feedback icons */}
                    {isAnswered && isCorrect && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
                        ✅
                      </span>
                    )}
                    {isAnswered && selectedAnswer === index && !isCorrect && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
                        ❌
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Next button */}
            <div className="flex justify-center">
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className={cn(
                  "h-16 px-12 text-xl font-bold rounded-2xl shadow-lg transition-all duration-200",
                  "bg-brazil-green hover:bg-brazil-green/90 text-white",
                  "active:scale-[0.98]",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
