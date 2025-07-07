'use client'

import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Button } from '../components/ui/button'
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Layout,
  Terminal,
  Cloud,
  Download
} from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

// Add environment variable keys
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  // Validate environment variables
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error('Missing EmailJS environment variables')
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('Missing EmailJS configuration')
      }

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header & Navigation */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Wai Si Hnyun</h1>
          <div className="hidden md:flex items-center gap-6">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                {item}
              </button>
            ))}
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Hire Me
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6 bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Innovative Software<br />
              Engineer & Creative<br />
              Problem Solver
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
              Passionate about crafting elegant solutions to complex problems. 
              Specializing in full-stack development with a focus on creating 
              exceptional user experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/waisihnyun" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/wai-si-hnyun-251444249/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="/files/resume.pdf" download="Wai_Si_Hnyun_Resume.pdf">
                  <Download className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="pt-4 flex gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="/files/resume.pdf" download="Wai_Si_Hnyun_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Wai Si Hnyun"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                As a Backend-focused Web Developer with over 2 years of experience and AWS Certified Solutions 
                Architect - Associate certification, I specialize in delivering cloud-native solutions that make 
                a real impact. My journey in software development has been driven by a passion for building 
                scalable and efficient systems.
              </p>
              <p className="text-gray-300">
                I have proven expertise in building scalable applications using Java (Spring Boot), PHP (Laravel), 
                and Vue.js. My technical foundation includes deep knowledge of microservices architecture, API design, 
                and managing diverse databases including PostgreSQL, MySQL, and MongoDB. I take pride in deploying 
                robust, high-performance systems on AWS that ensure reliability and scalability.
              </p>
              <p className="text-gray-300">
                Currently, I'm focused on AI-driven development and vibe coding, exploring how these powerful 
                technologies can accelerate development processes and enhance productivity. I'm passionate about 
                leveraging cutting-edge tools and methodologies to create more efficient and innovative solutions 
                in this rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid gap-8">
            {[
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
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 space-y-4"
              >
                <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-200">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-200">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Programming Languages',
                icon: <Code className="h-6 w-6" />,
                skills: ['Java', 'PHP', 'JavaScript', 'TypeScript']
              },
              {
                category: 'Frameworks & Libraries',
                icon: <Layout className="h-6 w-6" />,
                skills: ['Spring Boot', 'Laravel', 'Vue', 'Nuxt']
              },
              {
                category: 'Database Technologies',
                icon: <Database className="h-6 w-6" />,
                skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB']
              },
              {
                category: 'Software Architectures',
                icon: <Server className="h-6 w-6" />,
                skills: ['MVC', 'Microservices', 'Event-driven']
              },
              {
                category: 'Web Services',
                icon: <Cloud className="h-6 w-6" />,
                skills: ['REST', 'GraphQL', 'gRPC']
              },
              {
                category: 'Cloud & Containerization',
                icon: <Terminal className="h-6 w-6" />,
                skills: ['AWS', 'Docker']
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800/50 rounded-full text-sm font-medium text-blue-400 hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to
                drop me a message!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>waisihnyun07@gmail.com</span>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/waisihnyun" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/wai-si-hnyun-251444249/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 relative"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm mt-2">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm mt-2">
                  Failed to send message. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="container mx-auto">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Wai Si Hnyun. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 