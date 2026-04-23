"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ResultsScreenProps {
  playerName: string
  score: number
  totalQuestions: number
  onPlayAgain: () => void
  onChangePlayer: () => void
}

function getScoreMessage(score: number): { message: string; emoji: string } {
  if (score >= 7) {
    return { message: "Brazil expert!", emoji: "🏆" }
  } else if (score >= 4) {
    return { message: "Great job!", emoji: "🌟" }
  } else {
    return { message: "Nice try!", emoji: "👍" }
  }
}

function getScoreColor(score: number): string {
  if (score >= 7) return "text-brazil-green"
  if (score >= 4) return "text-brazil-yellow"
  return "text-brazil-blue"
}

export function ResultsScreen({ 
  playerName, 
  score, 
  totalQuestions, 
  onPlayAgain, 
  onChangePlayer 
}: ResultsScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const { message, emoji } = getScoreMessage(score)
  const scoreColor = getScoreColor(score)

  useEffect(() => {
    // Trigger celebration animation
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-brazil-green/10 via-brazil-yellow/10 to-brazil-blue/10 relative overflow-hidden">
      {/* Celebration confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              {["🎉", "🎊", "⭐", "🇧🇷", "🏆", "⚽"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <Card className="w-full max-w-lg shadow-2xl border-0 bg-card/95 backdrop-blur-sm relative z-10">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-8">
            {/* Trophy/celebration emoji */}
            <div className="relative">
              <div className={cn(
                "text-7xl md:text-8xl",
                "animate-pulse"
              )}>
                {emoji}
              </div>
            </div>

            {/* Congratulations message */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Nice job, {playerName}!
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                {message}
              </p>
            </div>

            {/* Score display */}
            <div className="py-6">
              <div className={cn(
                "text-6xl md:text-7xl font-extrabold",
                scoreColor
              )}>
                {score} / {totalQuestions}
              </div>
              <p className="text-lg text-muted-foreground mt-2">
                correct answers
              </p>
            </div>

            {/* Score visualization */}
            <div className="flex justify-center gap-2">
              {[...Array(totalQuestions)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300",
                    i < score 
                      ? "bg-brazil-green" 
                      : "bg-muted"
                  )}
                  style={{
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>

            {/* Action buttons */}
            <div className="space-y-4 pt-4">
              <Button
                onClick={onPlayAgain}
                className="w-full h-16 text-xl font-bold rounded-2xl bg-brazil-green hover:bg-brazil-green/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                🔄 Play Again
              </Button>
              <Button
                onClick={onChangePlayer}
                variant="outline"
                className="w-full h-14 text-lg font-semibold rounded-2xl border-2 border-brazil-blue/30 hover:bg-brazil-blue/10 text-foreground transition-all duration-200 active:scale-[0.98]"
              >
                👤 Change Player
              </Button>
            </div>

            {/* Decorative footer */}
            <div className="flex justify-center gap-3 pt-2">
              <span className="text-2xl">🇧🇷</span>
              <span className="text-2xl">⚽</span>
              <span className="text-2xl">🌴</span>
              <span className="text-2xl">🦜</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
