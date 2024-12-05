'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

interface Project {
  name: string
  description: string
  image: string
  link?: string
}

interface ProjectCardProps extends Project {
  index: number
}

const projects: Project[] = [
  {
    name: 'LinkedIn Chrome Extension',
    description: 'Enhance your LinkedIn interactions with AI-powered insights and automation.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Whisper-Powered Voice Note Workflow For Journaling',
    description: 'A voice-to-text system for measuring life.',
    image: '/images/measuring-life.jpg',
    link: 'https://www.youtube.com/watch?v=8o-YLqy3t84',
  },
  {
    name: 'VideoBrainstorm.com ',
    description:
      "My first SaaS product: Steal YouTube Videos Like an Artist, Create Better Video Ideas, Faster with OpenAI's models",
    image: '/images/outlineideation-min.webp',
    link: 'https://videobrainstorm.com/?ref=openai',
  },
]

function ProjectCard({ name, description, image, link, index }: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const ProjectCardContent = (
    <Card className="bg-black border-white/10 hover:border-gray-300 transition-colors overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full aspect-video object-cover"
      />
      <CardHeader>
        <CardTitle className="text-2xl text-white">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 ">{description}</p>
      </CardContent>
    </Card>
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-transform hover:scale-[1.02]"
        >
          {ProjectCardContent}
        </Link>
      ) : (
        ProjectCardContent
      )}
    </motion.div>
  )
}

export default function ProjectsShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgb(0, 0, 0)', 'rgb(39, 39, 42)', 'rgb(39, 39, 42)']
  )

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      className="scroll-snap-section py-24 min-h-screen flex items-center"
      style={{ backgroundColor }}
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-balance mb-16 text-center">Projects</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
