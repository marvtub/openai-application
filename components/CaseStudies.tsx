import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CaseStudy {
  company: string
  description: string
}

interface CaseStudyCardProps extends CaseStudy {
  index: number
}

const caseStudies: CaseStudy[] = [
  {
    company: 'VKU Service GmbH',
    description:
      'Implemented an AI-driven application workflow for their SWA-Event with analysis & follow-ups resulting in ~2h per week times 5 employees saved during event phase',
  },
  {
    company: 'Lots* - Marketing Agency',
    description:
      'Leveraged GPT-4o-mini with search tools to enrich every new lead for personalized outreach resulting in 30% more replies & ~1h saved per week per department',
  },
  {
    company: 'DailySOS',
    description:
      'Integrated AI into content creation & customer support workflows, resulting in much faster content creation & ~40% faster customer support response times',
  },
]

function CaseStudyCard({ company, description, index }: CaseStudyCardProps) {
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
          <CardTitle className="text-2xl text-white">{company}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 ">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="scroll-snap-section py-24 bg-black min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-balance mb-16 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
