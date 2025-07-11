'use client'

import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/data/portfolio'
import { scrollToSection } from '@/utils/navigation'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 bg-gray-950">
      <div className="container mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="font-body text-base md:text-lg mb-4">
            <span className="text-blue-400">console</span>
            <span className="text-gray-500">.</span>
            <span className="text-yellow-400">log</span>
            <span className="text-gray-500">(</span>
            <span className="text-green-400">"Hello, World!"</span>
            <span className="text-gray-500">)</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-normal break-words">
            {PERSONAL_INFO.title}
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            {PERSONAL_INFO.description}
          </p>
          <div className="flex gap-4 pt-4">
            {SOCIAL_LINKS.map((link) => (
              <Button 
                key={link.label}
                variant="outline" 
                size="icon" 
                asChild
              >
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              asChild
            >
              <a 
                href="/files/resume.pdf" 
                download="Wai_Si_Hnyun_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
