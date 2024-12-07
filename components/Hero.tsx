'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  const handleExploreClick = () => {
    // Get the next section (first journey step)
    const sections = document.querySelectorAll('.scroll-snap-section')
    if (sections.length > 1) {
      sections[1].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="scroll-snap-section relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          className="relative aspect-square w-36 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: 'relative' }}
        >
          <Image
            src="/images/openai-ai-hint.jpg"
            alt="Marvin Aziz"
            fill
            sizes="(max-width: 768px) 100vw, 144px"
            className="object-cover rounded-full"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl text-balance mb-6">My Journey with OpenAI</h1>
          <p className="text-xl mb-8 text-gray-400 ">
            When <span className="emphasis">ChatGPT</span> launched, something profound clicked.
            This was a <span className="subtle">technological inflection point</span> that would
            reshape how we work, create, and solve problems.
          </p>
          <Button
            variant="outline"
            size="xl"
            onClick={handleExploreClick}
            className=" border-white text-gray-900 hover:bg-white hover:text-black font-bold transition-all duration-300 text-xl"
          >
            Let me tell you a <span className="font-bold serif text-gray-900 italic">Story</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
