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
  
  // Convert to camelCase
  const toCamelCase = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 border border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-gray-200 tracking-wide">
          <span className="text-blue-400">{toCamelCase(category)}</span>
          <span className="text-gray-500">:</span> <span className="text-yellow-400">[</span>
        </h3>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-2 py-1 bg-gray-800/50 rounded text-sm font-medium font-body text-green-400 hover:bg-gray-700/50 transition-colors duration-300"
          >
            <span className="text-gray-500">"</span>{skill}<span className="text-gray-500">"</span>
            {index < skills.length - 1 && <span className="text-gray-500">,</span>}
          </span>
        ))}
      </div>
      <div className="text-yellow-400 font-body text-sm">]</div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-gray-900/50 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-16 text-center tracking-wide">
          <span className="text-gray-500">const</span> <span className="text-blue-400">techStack</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">{'{'}</span>
        </h2>
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
        <div className="text-center mt-8">
          <span className="text-yellow-400 font-heading text-2xl">{'}'}</span>
        </div>
      </div>
    </section>
  )
}
