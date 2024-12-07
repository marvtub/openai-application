import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Principle {
  title: string
  description: string
}

interface PrincipleCardProps extends Principle {
  index: number
}

const principles: Principle[] = [
  {
    title: 'Focus on Present Potential',
    description:
      "Leverage the untapped value in today's AI models instead of waiting for future breakthroughs.",
  },
  {
    title: 'Strategic Integration',
    description:
      'Implement AI in ways that fundamentally reimagine business operations and workflows.',
  },
  {
    title: 'Continuous Innovation',
    description:
      "Constantly explore and push the boundaries of what's possible with current AI technologies.",
  },
  {
    title: 'High-Impact Solutions',
    description:
      'Prioritize AI applications that offer significant, measurable improvements in efficiency or effectiveness.',
  },
]

function PrincipleCard({ title, description, index }: PrincipleCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card className="bg-zinc-900 border-white/10 hover:border-gray-300 transition-colors">
        <CardHeader>
          <CardTitle className="text-2xl text-white text-balance font-normal mb-[-20px]">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 ">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function LeverageEngineering() {
  return (
    <section
      id="philosophy"
      className="scroll-snap-section py-24 bg-black min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-balance mb-6 text-center">
          <span className="emphasis">Leverage</span> Engineering <span className="serif italic">Philosophy</span>
        </h2>
        <p className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto ">
          While the world speculates about future breakthroughs, I&apos;m focused on maximizing the
          impact of current AI technologies.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <PrincipleCard key={index} {...principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
