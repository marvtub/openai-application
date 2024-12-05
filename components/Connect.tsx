'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, MessageSquare } from 'lucide-react'

export default function Connect() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const handleSlackClick = () => {
    window.location.href =
      'https://join.slack.com/t/marvinazizweb-udp3027/shared_invite/zt-2vrn2nkw4-_jvNReR8I_tdRUtv75KmiA'
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:marvinaziz@webtotheflow.com'
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/marvin-aziz/', '_blank')
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="scroll-snap-section min-h-screen flex items-center justify-center bg-black mb-20"
      id="connect"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div variants={itemVariants} className="mb-12">
          <Image
            src="/images/Hey OpenAI!.jpg"
            alt="Me and my girlfriend"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto mb-6"
            quality={95}
            priority
          />
          <p className="text-xl text-gray-300">Me and my girlfriend can&apos;t wait to meet you</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-12 mt-8">
          <button
            onClick={handleLinkedInClick}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
              <Linkedin className="h-8 w-8" />
            </div>
            <span>LinkedIn</span>
          </button>

          <button
            onClick={handleEmailClick}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
              <Mail className="h-8 w-8" />
            </div>
            <span>Email</span>
          </button>

          <button
            onClick={handleSlackClick}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
              <MessageSquare className="h-8 w-8" />
            </div>
            <span>Slack</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}
