import React from 'react'
import {
  Github,
  Linkedin,
} from 'lucide-react'
import { Project, SocialLink } from '@/types'

export const PROJECTS: Project[] = [
  {
    title: 'b→dash - Data Marketing Platform',
    description: 'A sophisticated marketing automation tool built with microservices architecture for a Japanese client. The platform integrates with multiple third-party services and handles complex data processing workflows.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'Shopify API', 'Salesforce API', 'Google APIs'],
    highlights: [
      'Developed and maintained microservices for efficient data processing',
      'Built integrations with multiple platforms including Shopify and Salesforce',
      'Enhanced system scalability and resilience through microservices architecture'
    ]
  },
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform built on EC-CUBE and Symfony framework, focusing on secure transactions and efficient customer data handling.',
    tech: ['PHP', 'Symfony', 'EC-CUBE', 'MySQL', 'MVC'],
    highlights: [
      'Customized EC-CUBE features to meet business requirements',
      'Implemented secure PHP code for customer data handling',
      'Enhanced user experience through bug fixes and new features',
      'Maintained MySQL database and MVC architecture'
    ]
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive task management solution built with modern technologies, featuring real-time updates and advanced project management capabilities.',
    tech: ['Nuxt.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Pusher', 'Tailwind CSS', 'TDD'],
    highlights: [
      'Built frontend with Nuxt.js and TypeScript for enhanced type safety',
      'Implemented real-time notifications using Pusher',
      'Designed user-friendly interface with Tailwind CSS',
      'Created advanced features for project and employee management',
      'Applied TDD and atomic design principles'
    ]
  },
  {
    title: 'Cake Shop - Food Order System',
    description: 'A secure and user-friendly food ordering platform that streamlines the ordering process for both customers and restaurant administrators.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'PHP', 'Git'],
    highlights: [
      'Developed responsive frontend using Bootstrap and jQuery',
      'Implemented secure user authentication and Google reCAPTCHA',
      'Created efficient order tracking and management system',
      'Built user-friendly dashboards for customers and administrators',
      'Maintained code quality through Git version control'
    ]
  }
]

export const SKILL_CATEGORIES_DATA = [
  {
    category: 'Programming Languages',
    iconType: 'code',
    skills: ['Java', 'PHP', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Frameworks & Libraries',
    iconType: 'layout',
    skills: ['Spring Boot', 'Laravel', 'Vue', 'Nuxt']
  },
  {
    category: 'Database Technologies',
    iconType: 'database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB']
  },
  {
    category: 'Software Architectures',
    iconType: 'server',
    skills: ['MVC', 'Microservices', 'Event-driven']
  },
  {
    category: 'Web Services',
    iconType: 'cloud',
    skills: ['REST', 'GraphQL', 'gRPC']
  },
  {
    category: 'Cloud & Containerization',
    iconType: 'terminal',
    skills: ['AWS', 'Docker']
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/waisihnyun',
    icon: React.createElement(Github, { className: 'h-5 w-5' }),
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/wai-si-hnyun-251444249/',
    icon: React.createElement(Linkedin, { className: 'h-5 w-5' }),
    label: 'LinkedIn'
  }
]

export const NAVIGATION_ITEMS = ['about', 'projects', 'skills', 'contact'] as const

export const PERSONAL_INFO = {
  name: 'Wai Si Hnyun',
  email: 'waisihnyun07@gmail.com',
  title: 'Software Engineer & Problem Solver',
  description: 'Crafting elegant solutions to complex problems. Specializing in full-stack development with focus on exceptional user experiences.',
  aboutText: [
    'Backend-focused Web Developer with 2+ years of experience and AWS Certified Solutions Architect - Associate. I specialize in building scalable cloud-native applications using Java (Spring Boot), PHP (Laravel), and Vue.js.',
    'Currently exploring AI-driven development and vibe coding to accelerate development processes and create innovative solutions in the evolving tech landscape.'
  ]
} as const
