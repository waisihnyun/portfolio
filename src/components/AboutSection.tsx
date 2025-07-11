'use client'

import Image from 'next/image'
import { PERSONAL_INFO } from '@/data/portfolio'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900/50 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl font-bold mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            {PERSONAL_INFO.aboutText.map((paragraph, index) => (
              <p key={index} className="font-body text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
