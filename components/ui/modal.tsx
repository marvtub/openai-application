'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSlackClick: () => void
  onGithubClick: () => void
}

export default function Modal({ isOpen, onClose, onSlackClick, onGithubClick }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-900 border border-white/10 rounded-lg p-6 z-50"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              I don&apos;t consider myself a developer - I am a leverage engineer.
            </h2>
            <p className="text-gray-400 mb-6">But feel free to check out my repo</p>
            <div className="flex gap-4">
              <button
                onClick={onSlackClick}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Send me a slack
              </button>
              <button
                onClick={onGithubClick}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Visit Github
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
