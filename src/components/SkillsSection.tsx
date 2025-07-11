'use client'

import {
  Code,
  Database,
  Server,
  Layout,
  Terminal,
  Cloud,
} from 'lucide-react'
import { SKILL_CATEGORIES_DATA } from '@/data/portfolio'

const iconMap = {
  code: Code,
  database: Database,
  server: Server,
  layout: Layout,
  terminal: Terminal,
  cloud: Cloud,
} as const

interface SkillCategoryCardProps {
  category: string
  iconType: keyof typeof iconMap
  skills: string[]
}

function SkillCategoryCard({ category, iconType, skills }: SkillCategoryCardProps) {
  const IconComponent = iconMap[iconType]
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="font-heading text-xl font-semibold">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-gray-800/50 rounded-full text-sm font-medium font-body text-blue-400 hover:bg-gray-700/50 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl font-bold mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES_DATA.map((category, index) => (
            <SkillCategoryCard
              key={index}
              category={category.category}
              iconType={category.iconType as keyof typeof iconMap}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
