"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  texts: string[]
  className?: string
  cursorClassName?: string
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export function Typewriter({
  texts,
  className = "",
  cursorClassName = "",
  speed = 60,
  deleteSpeed = 30,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]

    if (!deleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }

    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, deleteSpeed)
      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex((i) => (i + 1) % texts.length)
    }
  }, [charIndex, deleting, textIndex, texts, speed, deleteSpeed, pauseDuration])

  return (
    <span className={className}>
      {displayed}
      <span className={`animate-pulse ${cursorClassName}`}>|</span>
    </span>
  )
}
