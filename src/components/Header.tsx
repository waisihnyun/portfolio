'use client'

import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '@/data/portfolio'
import { scrollToSection } from '@/utils/navigation'

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 
          className="font-heading text-xl font-bold cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          {PERSONAL_INFO.name}
        </h1>
        <div className="hidden md:flex items-center gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`font-body capitalize transition-colors ${
                activeSection === item ? 'text-blue-400' : 'hover:text-blue-400'
              }`}
            >
              {item}
            </button>
          ))}
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  )
}
