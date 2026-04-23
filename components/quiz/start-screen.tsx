"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface StartScreenProps {
  onStart: (name: string) => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onStart(name.trim())
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-brazil-green/10 via-brazil-yellow/10 to-brazil-blue/10">
      <Card className="w-full max-w-lg shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-6">
            {/* Flag emoji and title */}
            <div className="space-y-3">
              <div className="text-6xl md:text-7xl animate-bounce">
                🇧🇷
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
                Brazil Quiz
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Answer 8 fun questions and see your score!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-3">
                <label 
                  htmlFor="player-name" 
                  className="block text-lg font-semibold text-foreground"
                >
                  Enter your name
                </label>
                <Input
                  id="player-name"
                  type="text"
                  placeholder="Your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-16 text-xl text-center rounded-2xl border-2 border-brazil-green/30 focus:border-brazil-green focus:ring-brazil-green/20 bg-white placeholder:text-muted-foreground/50"
                  autoComplete="off"
                  autoFocus
                />
              </div>

              <Button
                type="submit"
                disabled={!name.trim()}
                className="w-full h-16 text-xl font-bold rounded-2xl bg-brazil-green hover:bg-brazil-green/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Quiz
              </Button>
            </form>

            {/* Decorative elements */}
            <div className="flex justify-center gap-3 pt-4">
              <span className="text-2xl">⚽</span>
              <span className="text-2xl">🌴</span>
              <span className="text-2xl">🦜</span>
              <span className="text-2xl">☀️</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
