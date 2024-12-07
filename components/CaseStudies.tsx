import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface CaseStudy {
  company: string
  description: string
  logo: string
  logoWidth?: number
  logoHeight?: number
  backgroundImage: string
  website?: string
  duration: string
}

interface CaseStudyCardProps extends CaseStudy {
  index: number
}

const caseStudies: CaseStudy[] = [
  {
    company: 'Kommunal Digital',
    description:
      'Implemented an AI-driven application workflow for their SWA-Event with analysis & follow-ups resulting in ~2h per week times 5 employees saved during event phase',
    logo: '/images/logo_vku_blue.svg',
    logoWidth: 80,
    logoHeight: 25,
    backgroundImage: '/images/Abstract BG/1.jpg',
    website: 'https://kommunaldigital.de/',
    duration: 'Nov 2023 - Jan 2024',
  },
  {
    company: 'Lots* - Marketing Agency',
    description:
      'Leveraged GPT-4o-mini with search tools to enrich every new lead for personalized outreach resulting in 30% more replies & ~1h saved per week per department',
    logo: '/images/Lots_Logo.webp',
    logoWidth: 80,
    logoHeight: 25,
    backgroundImage: '/images/Abstract BG/2.jpg',
    website: 'https://lots.agency/',
    duration: 'Sep 2023 - Present',
  },
  {
    company: 'DailySOS',
    description:
      'Integrated AI into content creation & customer support workflows, resulting in much faster content creation & ~40% faster customer support response times',
    logo: '/images/dailysos-logo.png',
    logoWidth: 80,
    logoHeight: 25,
    backgroundImage: '/images/Abstract BG/3.jpg',
    website: 'https://dailysos.com/',
    duration: 'Jun 2023 - Aug 2023',
  },
]

function CaseStudyCard({
  company,
  description,
  logo,
  logoWidth,
  logoHeight,
  backgroundImage,
  website,
  duration,
  index,
}: CaseStudyCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: custom * 0.1,
      },
    }),
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="h-full"
    >
      <Card className="bg-zinc-900 border-white/10 hover:border-gray-300 transition-colors overflow-hidden h-full flex flex-col group relative">
        <div className="h-32 relative overflow-hidden">
          <Image
            src={backgroundImage}
            alt={`${company} background`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl text-white">{company}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-300">{description}</p>
        </CardContent>
        <div className="h-[68px] relative overflow-hidden border-t border-white/10">
          <motion.div
            initial="hidden"
            whileHover="visible"
            animate="hidden"
            className="absolute inset-0"
          >
            <CardFooter className="py-0 h-full">
              <div className="w-full">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      variants={contentVariants}
                      custom={0}
                      className="bg-white rounded-lg p-2 shadow-sm relative w-[80px] h-[25px]"
                    >
                      <Image
                        src={logo}
                        alt={`${company} logo`}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </motion.div>
                    <motion.span
                      variants={contentVariants}
                      custom={1}
                      className="text-sm text-gray-400"
                    >
                      {duration}
                    </motion.span>
                  </div>
                  {website && (
                    <motion.a
                      variants={contentVariants}
                      custom={2}
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </CardFooter>
          </motion.div>
        </div>
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
