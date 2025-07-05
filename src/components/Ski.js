"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Ski() {
  const [isExpanded, setIsExpanded] = useState(false)

  const skills = [
    "Java",
    "DSA",
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "ExpressJS",
    "WebSocket",
    "ReactJS",
    "MongoDB",
    "PostgreSQL",
    "DBMS",
    "HTML & CSS",
    "Tailwindcss",
    "Web Design",
  ]

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: {
          duration: 0.2,
        },
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  }

  return (
  
      <div className="w-full">
        <div className="w-full">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center mb-4 px-2"
            >
              <h2 className="text-beige text-2xl font-medium">Skills</h2>
              <button
                onClick={toggleExpanded}
                className="bg-beige hover:opacity-80 text-black  px-6 py-2 rounded-md text-lg transition-colors"
              >
                Collapse
              </button>
            </motion.div>
          )}

          <motion.div
            onClick={!isExpanded ? toggleExpanded : undefined}
            className={`bg-container border border-bordercol p-6 shadow-lg ${
              !isExpanded ? "cursor-pointer hover:bg-hovercol" : ""
            } transition-colors`}
            whileHover={!isExpanded ? { scale: 1.02 } : {}}
            whileTap={!isExpanded ? { scale: 0.98 } : {}}
          >
            <div className="text-center">
              <span className="text-smalltext text-lg font-medium">SKILLS</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isExpanded ? "visible" : "hidden"}
            className="overflow-hidden"
          >
            <div className="space-y-3 mt-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={cardVariants}
                  className="bg-container rounded-xl p-6 shadow-lg hover:bg-hovercol hover:border border-beige transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <span className="text-smalltext text-lg font-medium">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

  )
}
