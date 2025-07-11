'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { useActiveSection } from '@/hooks/useActiveSection'

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
