import * as React from 'react'
import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'A showcase of my work and skills as a software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfairDisplay.variable} ${crimsonText.variable} font-body`}>
        {children}
      </body>
    </html>
  )
} 