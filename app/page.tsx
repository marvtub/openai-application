'use client'

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
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <Navbar />
      <DotNavigation />
      <div className="scroll-snap-container">
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
