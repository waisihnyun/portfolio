export interface Project {
  title: string
  description: string
  tech: string[]
  highlights: string[]
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
