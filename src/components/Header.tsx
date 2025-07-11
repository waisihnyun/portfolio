'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS, NAVIGATION_LABELS, PERSONAL_INFO } from '@/data/portfolio'
import { scrollToSection } from '@/utils/navigation'
import { Download, Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 
          className="font-heading text-xl font-semibold cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          {PERSONAL_INFO.name}
        </h1>
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`font-body text-sm lg:text-base transition-colors px-2 py-1 rounded ${
                activeSection === item ? 'text-blue-400 bg-blue-500/10' : 'hover:text-blue-400 hover:bg-blue-500/5'
              }`}
            >
              {NAVIGATION_LABELS[item]}
            </button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="text-sm px-3 py-2"
            asChild
          >
            <a 
              href="/files/resume.pdf" 
              download="Wai_Si_Hnyun_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMobileNavClick(item)}
                  className={`font-body transition-colors px-4 py-2 rounded ${
                    activeSection === item ? 'text-blue-400 bg-blue-500/10' : 'hover:text-blue-400 hover:bg-blue-500/5'
                  }`}
                >
                  {NAVIGATION_LABELS[item]}
                </button>
              ))}
              <Button 
                variant="default" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => handleMobileNavClick('contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
