import * as React from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono, Fira_Code } from 'next/font/google'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fira',
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
      <body className={`${jetBrainsMono.variable} ${firaCode.variable} font-body`}>
        {children}
      </body>
    </html>
  )
} 