'use client'

import { EXPERIENCE } from '@/data/portfolio'
import { Experience } from '@/types'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase } from 'lucide-react'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-600 transition-all duration-300"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-lg"></div>
      
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="font-heading text-xl font-semibold text-blue-400 tracking-wide">
            {experience.position}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="h-4 w-4" />
            <span className="font-body">{experience.duration}</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center gap-2 text-gray-300">
            <Briefcase className="h-4 w-4 text-blue-400" />
            <span className="font-heading font-semibold">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="h-4 w-4" />
            <span className="font-body text-sm">{experience.location}</span>
          </div>
        </div>
        
        <p className="font-body text-gray-300 leading-loose text-sm md:text-base">
          {experience.description}
        </p>
        
        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-gray-200 text-sm tracking-wider">
            <span className="text-gray-500">//</span> Key Achievements:
          </h4>
          <ul className="list-none font-body text-gray-300 space-y-1 text-sm">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="before:content-['→'] before:text-blue-400 before:mr-2">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-heading font-semibold text-gray-200 text-sm tracking-wider">
            <span className="text-gray-500">//</span> Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-800 text-blue-300 rounded text-xs font-body border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-semibold mb-16 text-center tracking-wide"
        >
          <span className="text-gray-500">const</span> <span className="text-blue-400">workHistory</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">[</span>
        </motion.h2>
        
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <span className="text-yellow-400 font-heading text-2xl">]</span>
        </motion.div>
      </div>
    </section>
  )
}
