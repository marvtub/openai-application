'use client'

import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import Modal from './ui/modal'

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleSlackClick = () => {
    window.location.href =
      'https://join.slack.com/t/marvinazizweb-udp3027/shared_invite/zt-2vrn2nkw4-_jvNReR8I_tdRUtv75KmiA'
  }

  const handleGithubRedirect = () => {
    window.open('https://github.com/marvtub', '_blank')
  }

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="text-md font-medium">
            A slightly <i>different</i> kind of application by{' '}
            <span className="font-bold">Marvin Aziz</span>
          </Link>
          <div className="ml-auto flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/marvin-aziz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <button onClick={handleGithubClick} className="hover:text-gray-300 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </button>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSlackClick={handleSlackClick}
        onGithubClick={handleGithubRedirect}
      />
    </>
  )
}
