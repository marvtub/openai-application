'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <footer
      className={`py-12 bg-zinc-900 border-t border-white/10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 ">
          &copy; {new Date().getFullYear()} Marvin Aziz. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors ">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors ">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
