"use client"

import { useState, useEffect, useRef } from "react"

const Helper = () => {
  const fullText = "Hey, wanna Know Me More"
  const subtitle = "Premium web design, development"

  return (
    <div className="w-full h-screen bg-container flex justify-center items-center">
      <div className="text-center w-3/5">
        <TypewriterText
          text={fullText}
          className="text-5xl sm:text-6xl lg:text-8xl text-beige font-serif font-light tracking-wide mb-6"
          speed={150}
        />

        <TypewriterText
          text={subtitle}
          className="text-base text-smalltext font-light tracking-wide mb-8"
          speed={100}
          delay={3000}
        />

        <button className="mt-6 bg-btnbg hover:opacity-80 px-8 py-4 font-medium text-btntextcol rounded-lg transition-colors duration-300">
          GET IN TOUCH
        </button>
      </div>
    </div>
  )
}

function TypewriterText({ text, className, speed = 150, delay = 0 }) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(false)
  const indexRef = useRef(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Start typing after delay
    const startTimer = setTimeout(() => {
      setShowCursor(true)

      intervalRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayText(text.slice(0, indexRef.current + 1))
          indexRef.current += 1
        } else {
          clearInterval(intervalRef.current)
          // Hide cursor after completion
          setTimeout(() => {
            setShowCursor(false)
          }, 2000)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(startTimer)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, speed, delay])

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span
        className="text-amber-200"
        style={{
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          animation: showCursor ? "blink 1s infinite" : "none",
        }}
      >
        |
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default Helper
