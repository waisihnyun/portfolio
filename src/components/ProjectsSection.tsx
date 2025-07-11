'use client'

import { PROJECTS } from '@/data/portfolio'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 space-y-4">
      <h3 className="font-heading text-2xl font-semibold text-blue-400">{project.title}</h3>
      <p className="font-body text-gray-300 leading-relaxed">{project.description}</p>
      <div className="space-y-2">
        <h4 className="font-heading font-semibold text-gray-200">Key Features:</h4>
        <ul className="list-disc list-inside font-body text-gray-300 space-y-1">
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-heading font-semibold text-gray-200">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm font-body text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
