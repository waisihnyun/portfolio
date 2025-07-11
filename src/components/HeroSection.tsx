'use client'

import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/data/portfolio'
import { scrollToSection } from '@/utils/navigation'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 bg-gray-950">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {PERSONAL_INFO.title}
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
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
          <div className="pt-4 flex gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="#">
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
