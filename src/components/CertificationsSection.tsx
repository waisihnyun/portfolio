'use client'

import { CERTIFICATIONS } from '@/data/portfolio'
import { Certification } from '@/types'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'

interface CertificationCardProps {
  certification: Certification
  index: number
}

function CertificationCard({ certification, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-600 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
          <Award className="h-6 w-6" />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="font-heading text-lg font-semibold text-blue-400 tracking-wide">
              {certification.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span className="font-body">{certification.date}</span>
            </div>
          </div>
          
          <p className="font-body text-gray-300 font-medium">
            <span className="text-gray-500">issued by:</span> {certification.issuer}
          </p>
          
          {certification.credentialId && (
            <p className="font-body text-sm text-gray-400">
              <span className="text-gray-500">credential:</span> {certification.credentialId}
            </p>
          )}
          
          {certification.link && (
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-body"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-gray-500">$</span> view --certificate
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function CertificationsSection() {
  return (
    <section id="certs" className="min-h-screen flex items-center py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-semibold mb-16 text-center tracking-wide"
        >
          <span className="text-gray-500">const</span> <span className="text-blue-400">certifications</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">[</span>
        </motion.h2>
        
        <div className="space-y-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} certification={cert} index={index} />
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
