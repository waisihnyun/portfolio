export interface Project {
  title: string
  description: string
  tech: string[]
  highlights: string[]
  github?: string
  demo?: string
}

export interface SkillCategory {
  category: string
  icon: React.ReactNode
  skills: string[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export type SubmitStatus = 'idle' | 'success' | 'error'

export interface SocialLink {
  href: string
  icon: React.ReactNode
  label: string
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  tech: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
}

export type NavigationItem = 'about' | 'experience' | 'certs' | 'projects' | 'skills' | 'contact'
