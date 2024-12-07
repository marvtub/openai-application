import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { memo, useEffect } from 'react'

interface JourneyStep {
  title: string
  content: string
  image: string
  timeframe: string
  imageLink?: string
}

interface JourneyStepProps extends JourneyStep {
  index: number
}

const journeySteps: JourneyStep[] = [
  {
    title: 'The Moment of Revelation',
    content:
      "While I had long been an admirer of DeepMind's groundbreaking achievements, ChatGPT felt different—this was a technological inflection point that would reshape how I work, create, and solve problems.",
    image: '/images/what1.jpg',
    timeframe: 'November 2022',
  },
  {
    title: 'Immediate Action',
    content:
      'At my agency, M2A, I became an early adopter, integrating ChatGPT into our workflows and starting to understand its capabilities.',
    image: '/images/work_in_office-min.jpeg',
    timeframe: 'January 2023',
  },
  {
    title: 'Sharing the Vision',
    content:
      "Just four months after ChatGPT's launch, I was invited to speak at the VKU Marketing-Experts event about leveraging AI in business operations.",
    image: '/images/Marvin_Speaking_AI.jpg',
    timeframe: 'April 2023',
  },
  {
    title: 'Finding My Tribe',
    content: 'The overwhelming interest in practical AI applications led me to start',
    image: '/images/community_driven.jpg',
    timeframe: 'June 2023',
    imageLink: 'https://webtotheflow.com/community',
  },
  {
    title: 'The Consulting Phase',
    content:
      'My consulting work started to focus more on AI and workflow automation, demonstrating how to leverage AI strategically in various businesses.',
    image: '/images/automation.png',
    timeframe: 'Ongoing',
    imageLink:
      'https://cdn.prod.website-files.com/6241d482577d36e4fcc61c48/659c30e5145dd6d01ddf61f6_Case%20Study%2004%20-%20Proposals.pdf',
  },
]

const TextContent = memo(
  ({ title, content, timeframe, index }: Omit<JourneyStepProps, 'image' | 'imageLink'>) => (
    <div className="md:w-2/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-4xl text-balance mb-2">{title}</h2>
        <span className="text-sm text-gray-500">{timeframe}</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl text-gray-300"
      >
        {index === 3 ? (
          <>
            The overwhelming interest in practical AI applications led me to start{' '}
            <Link
              href="https://webtotheflow.com/community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              The No-Code Integrator
            </Link>{' '}
            community, where innovators & tinkerers share and learn about AI implementations.
          </>
        ) : (
          <>
            <span className="emphasis">{content.split(' ').slice(0, 3).join(' ')}</span>{' '}
            {content.split(' ').slice(3).join(' ')}
          </>
        )}
      </motion.p>
    </div>
  )
)

TextContent.displayName = 'TextContent'

const ImageContent = memo(
  ({
    image,
    title,
    imageLink,
    index,
  }: Pick<JourneyStepProps, 'image' | 'title' | 'imageLink' | 'index'>) => {
    const ImageElement = (
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg shadow-lg object-cover transition-transform hover:scale-[1.02]"
          quality={90}
          priority={index <= 1}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    )

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="md:w-3/5"
      >
        {imageLink ? (
          <Link href={imageLink} target="_blank" rel="noopener noreferrer" className="block">
            {ImageElement}
          </Link>
        ) : (
          ImageElement
        )}
      </motion.div>
    )
  }
)

ImageContent.displayName = 'ImageContent'

const JourneyStep = memo(function JourneyStep(props: JourneyStepProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      className="scroll-snap-section min-h-screen flex items-center justify-center bg-black relative scroll-snap-align-start"
      id={`journey-step-${props.index}`}
      data-step={props.index}
    >
      <div className="max-w-6xl mx-auto px-4 text-left flex flex-col md:flex-row items-center justify-center gap-12 relative">
        {props.index % 2 === 0 ? (
          <>
            <ImageContent {...props} />
            <TextContent {...props} />
          </>
        ) : (
          <>
            <TextContent {...props} />
            <ImageContent {...props} />
          </>
        )}
      </div>
    </section>
  )
})

JourneyStep.displayName = 'JourneyStep'

export default function Journey() {
  return (
    <section id="journey" className="scroll-snap-section scroll-snap-container relative">
      {journeySteps.map((step, index) => (
        <JourneyStep key={index} {...step} index={index} />
      ))}
    </section>
  )
}

export function getFirstJourneySection() {
  return journeySteps[0]
}
