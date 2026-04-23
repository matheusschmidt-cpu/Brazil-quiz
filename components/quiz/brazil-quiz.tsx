"use client"

import { useState, useCallback } from "react"
import { StartScreen } from "./start-screen"
import { QuizScreen } from "./quiz-screen"
import { ResultsScreen } from "./results-screen"
import { getRandomQuestions, type Question } from "@/lib/quiz-data"

type GameState = "start" | "playing" | "results"

const QUESTIONS_PER_GAME = 8

export function BrazilQuiz() {
  const [gameState, setGameState] = useState<GameState>("start")
  const [playerName, setPlayerName] = useState("")
  const [questions, setQuestions] = useState<Question[]>([])
  const [finalScore, setFinalScore] = useState(0)

  const handleStart = useCallback((name: string) => {
    setPlayerName(name)
    setQuestions(getRandomQuestions(QUESTIONS_PER_GAME))
    setGameState("playing")
  }, [])

  const handleComplete = useCallback((score: number) => {
    setFinalScore(score)
    setGameState("results")
  }, [])

  const handlePlayAgain = useCallback(() => {
    setQuestions(getRandomQuestions(QUESTIONS_PER_GAME))
    setFinalScore(0)
    setGameState("playing")
  }, [])

  const handleChangePlayer = useCallback(() => {
    setPlayerName("")
    setQuestions([])
    setFinalScore(0)
    setGameState("start")
  }, [])

  return (
    <div className="min-h-screen">
      {gameState === "start" && (
        <StartScreen onStart={handleStart} />
      )}
      
      {gameState === "playing" && questions.length > 0 && (
        <QuizScreen
          questions={questions}
          playerName={playerName}
          onComplete={handleComplete}
          onQuit={handleChangePlayer}
        />
      )}
      
      {gameState === "results" && (
        <ResultsScreen
          playerName={playerName}
          score={finalScore}
          totalQuestions={QUESTIONS_PER_GAME}
          onPlayAgain={handlePlayAgain}
          onChangePlayer={handleChangePlayer}
        />
      )}
    </div>
  )
}
