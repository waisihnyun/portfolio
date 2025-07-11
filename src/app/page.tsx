'use client'

import {
  Header,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer
} from '@/components'
import { useActiveSection } from '@/hooks'

export default function Home() {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}