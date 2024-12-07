'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import CaseStudies from '@/components/CaseStudies'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import LeverageEngineering from '@/components/LeverageEngineering'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'
import DotNavigation from '@/components/DotNavigation'

export default function Home() {
  useEffect(() => {
    let keys: string[] = []
    const konami = ['o', 'a', 'i']

    const handleKeyPress = (e: KeyboardEvent) => {
      keys.push(e.key.toLowerCase())
      keys = keys.slice(-3)

      if (keys.join('') === konami.join('')) {
        console.log(
          '%c🎉 You found the secret keyboard combination!',
          'font-size: 20px; color: #10a37f;'
        )
        console.log(
          '%cI believe AI will fundamentally change how we work, create, and solve problems. Want to chat about it?',
          'color: #666;'
        )
        console.log(
          '%cReach out to me on LinkedIn: https://linkedin.com/in/marvin-aziz or email me at marvin@webtotheflow.com',
          'color: #10a37f;'
        )
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <Navbar />
      <DotNavigation />
      <div className="scroll-snap-container pb-20 md:pb-0">
        <Hero />
        <Journey />
        <CaseStudies />
        <ProjectsShowcase />
        <LeverageEngineering />
        <Connect />
        <Footer />
      </div>
    </div>
  )
}
