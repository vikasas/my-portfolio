import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { useEffect } from "react"

export default function LiquidLoader({ text = "LOADING", onComplete, duration = 3000, pauseDuration = 500 }) {
  // Motion value for progress (0 to 100)
  const progress = useMotionValue(0)

  // Spring animation for smooth progress updates
  const springProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform progress to width percentage
  const fillWidth = useTransform(springProgress, [0, 100], ["0%", "100%"])

  // Transform progress to opacity for subtle fade effect
  const fillOpacity = useTransform(springProgress, [0, 20, 100], [0.3, 1, 1])

  useEffect(() => {
    let currentProgress = 0
    let isAnimating = false

    const animateProgress = () => {
      if (isAnimating) return
      isAnimating = true

      // Random pause between flows
      const pause = Math.random() * pauseDuration + 200

      setTimeout(() => {
        // Random flow amount (liquid-like behavior)
        const flowAmount = Math.random() * 25 + 10
        const targetProgress = Math.min(currentProgress + flowAmount, 100)

        // Animate to target progress
        progress.set(targetProgress)
        currentProgress = targetProgress

        if (currentProgress >= 100) {
          // Animation complete
          setTimeout(() => {
            if (onComplete) onComplete()
            // Reset for loop
            setTimeout(() => {
              currentProgress = 0
              progress.set(0)
              isAnimating = false
              animateProgress()
            }, 1500)
          }, 500)
        } else {
          // Continue animation
          setTimeout(() => {
            isAnimating = false
            animateProgress()
          }, 100)
        }
      }, pause)
    }

    animateProgress()
  }, [progress, onComplete, pauseDuration])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="relative inline-block">
        {/* Background text */}
        <motion.div
          className="text-9xl font-black text-gray-700 tracking-wider select-none"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.div>

        {/* Animated fill overlay */}
        <motion.div className="absolute top-0 left-0 overflow-hidden" style={{ width: fillWidth }}>
          <motion.div
            className="text-9xl font-black whitespace-nowrap text-smalltext tracking-wider drop-shadow-lg select-none"
            style={{ opacity: fillOpacity }}
          >
            {text}
          </motion.div>
        </motion.div>

        {/* Liquid surface effect */}
        <motion.div
          className="absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-beige to-transparent"
          style={{
            left: fillWidth,
            opacity: useTransform(springProgress, [0, 5, 95, 100], [0, 0.8, 0.8, 0]),
          }}
          animate={{
            scaleY: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
