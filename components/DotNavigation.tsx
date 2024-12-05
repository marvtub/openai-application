'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', name: 'Introduction' },
  { id: 'journey', name: 'Journey' },
  { id: 'case-studies', name: 'Case Studies' },
  { id: 'projects', name: 'Projects' },
  { id: 'philosophy', name: 'Philosophy' },
  { id: 'connect', name: 'Connect' },
] as const

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState('')
  const [activeJourneyStep, setActiveJourneyStep] = useState(0)
  const [isJourneyVisible, setIsJourneyVisible] = useState(false)

  useEffect(() => {
    // Main sections observer
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if it's the journey section
          if (entry.target.id === 'journey') {
            setIsJourneyVisible(entry.isIntersecting)
          }

          // Update active section only if the section is entering view
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-49% 0px -49% 0px', // Slightly adjusted to ensure one section is always active
        threshold: 0,
      }
    )

    // Journey steps observer
    const stepObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const step = Number(entry.target.getAttribute('data-step'))
            if (!isNaN(step)) {
              setActiveJourneyStep(step)
            }
          }
        })
      },
      {
        rootMargin: '-49% 0px -49% 0px',
        threshold: 0,
      }
    )

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) sectionObserver.observe(element)
    })

    // Observe journey steps
    const journeySteps = document.querySelectorAll('[data-step]')
    journeySteps.forEach(step => stepObserver.observe(step))

    return () => {
      sectionObserver.disconnect()
      stepObserver.disconnect()
    }
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToStep = (step: number) => {
    const element = document.querySelector(`[data-step="${step}"]`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex gap-4">
      {/* Main section dots */}
      <div className="flex flex-col gap-4">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group relative p-2"
          >
            {/* Label */}
            <span
              className="absolute right-full mr-2 py-1 px-2 rounded bg-zinc-900/90 text-white text-sm 
                           whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {section.name}
            </span>

            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${
                  activeSection === section.id
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
            />
          </button>
        ))}
      </div>

      {/* Journey step dots */}
      <AnimatePresence>
        {isJourneyVisible && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-3"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={`step-${index}`}
                onClick={() => scrollToStep(index)}
                className="group relative p-1"
              >
                {/* Step label */}
                <span
                  className="absolute right-full mr-2 py-1 px-2 rounded bg-zinc-900/90 text-white text-xs 
                               whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Step {index + 1}
                </span>

                {/* Step dot */}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${
                      activeJourneyStep === index
                        ? 'bg-white/90 scale-110'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
