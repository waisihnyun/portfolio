'use client'

import Image from 'next/image'
import { PERSONAL_INFO } from '@/data/portfolio'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gray-900/50 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-16 text-center tracking-wide">
          <span className="text-gray-500">function</span> <span className="text-blue-400">getAboutMe</span><span className="text-yellow-500">() {'{'}</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden flex-shrink-0 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6 max-w-3xl">
            {PERSONAL_INFO.aboutText.map((paragraph, index) => (
              <p key={index} className="font-body text-base md:text-lg text-gray-300 leading-loose">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <span className="text-yellow-500 font-heading text-2xl">{'}'}</span>
        </div>
      </div>
    </section>
  )
}
