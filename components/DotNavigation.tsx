'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-49% 0px -49% 0px',
                threshold: 0,
            }
        )

        const stepObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
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

        sections.forEach((section) => {
            const element = document.getElementById(section.id)
            if (element) sectionObserver.observe(element)
        })

        const journeySteps = document.querySelectorAll('[data-step]')
        journeySteps.forEach((step) => stepObserver.observe(step))

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
        <>
            {/* Desktop Navigation */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex gap-4">
                {/* Journey step dots - always present, just faded */}
                <motion.div
                    className="flex flex-col gap-3"
                    animate={{
                        opacity: activeSection === 'journey' ? 1 : 0,
                        x: activeSection === 'journey' ? 0 : 10,
                        pointerEvents: activeSection === 'journey' ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <button
                            key={`step-${index}`}
                            onClick={() => scrollToStep(index)}
                            className="group relative p-1"
                        >
                            {/* Step label */}
                            <span className="absolute right-full mr-2 py-1 px-2 rounded bg-zinc-900/90 text-white text-xs 
                               whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                Step {index + 1}
                            </span>

                            {/* Step dot */}
                            <div
                                className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${activeJourneyStep === index
                                        ? 'bg-white/90 scale-110'
                                        : 'bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        </button>
                    ))}
                </motion.div>

                {/* Main section dots */}
                <div className="flex flex-col gap-4">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollTo(section.id)}
                            className="group relative p-2"
                        >
                            {/* Label */}
                            <span className="absolute right-full mr-2 py-1 px-2 rounded bg-zinc-900/90 text-white text-sm 
                               whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                {section.name}
                            </span>

                            {/* Dot */}
                            <div
                                className={`w-3 h-3 rounded-full transition-all duration-300 
                ${activeSection === section.id ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
                <motion.div
                    className="flex gap-3 px-4 py-3 bg-zinc-900/80 backdrop-blur-sm rounded-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollTo(section.id)}
                            className="relative"
                        >
                            <div
                                className={`w-2 h-2 rounded-full transition-all duration-300 
                                  ${activeSection === section.id ? 'bg-white scale-125' : 'bg-white/30'}`}
                            />
                        </button>
                    ))}
                </motion.div>

                {/* Mobile Journey Steps - only show when in journey section */}
                {activeSection === 'journey' && (
                    <motion.div
                        className="flex gap-2 justify-center mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <button
                                key={`mobile-step-${index}`}
                                onClick={() => scrollToStep(index)}
                                className="relative"
                            >
                                <div
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                                      ${activeJourneyStep === index
                                            ? 'bg-white/90 scale-110'
                                            : 'bg-white/20'
                                        }`}
                                />
                            </button>
                        ))}
                    </motion.div>
                )}
            </div>
        </>
    )
}
