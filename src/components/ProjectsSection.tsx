'use client'

import { PROJECTS } from '@/data/portfolio'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 space-y-4 border border-gray-800 hover:border-blue-600 transition-all duration-300">
      <h3 className="font-heading text-xl font-semibold text-blue-400 tracking-wide">{project.title}</h3>
      <p className="font-body text-gray-300 leading-loose text-sm md:text-base">{project.description}</p>
      <div className="space-y-2">
        <h4 className="font-heading font-semibold text-gray-200 text-sm tracking-wider">// Key Features:</h4>
        <ul className="list-none font-body text-gray-300 space-y-1 text-sm">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="before:content-['→'] before:text-blue-400 before:mr-2">{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-heading font-semibold text-gray-200 text-sm tracking-wider">// Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-800 text-blue-300 rounded text-xs font-body border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <span className="text-gray-500">$</span> git clone
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <span className="text-gray-500">$</span> npm run dev
          </a>
        )}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-16 text-center tracking-wide">
          <span className="text-gray-500">const</span> <span className="text-blue-400">projects</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">[</span>
        </h2>
        <div className="grid gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <span className="text-yellow-400 font-heading text-2xl">]</span>
        </div>
      </div>
    </section>
  )
}
