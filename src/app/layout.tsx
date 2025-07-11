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
  title: 'Wai Si Hnyun - Software Engineer & Problem Solver',
  description: 'Offshore development specialist working with Japanese clients. Experienced in Java, Spring Boot, PHP, Laravel, and cloud-native applications.',
  keywords: ['software engineer', 'backend developer', 'java developer', 'spring boot', 'php laravel', 'aws certified', 'offshore development'],
  authors: [{ name: 'Wai Si Hnyun', url: 'https://github.com/waisihnyun' }],
  creator: 'Wai Si Hnyun',
  publisher: 'Wai Si Hnyun',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://waisihnyun.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wai Si Hnyun - Software Engineer & Problem Solver',
    description: 'Offshore development specialist working with Japanese clients. Experienced in Java, Spring Boot, PHP, Laravel, and cloud-native applications.',
    url: 'https://waisihnyun.vercel.app',
    siteName: 'Wai Si Hnyun Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wai Si Hnyun - Software Engineer & Problem Solver',
    description: 'Offshore development specialist working with Japanese clients. Experienced in Java, Spring Boot, PHP, Laravel, and cloud-native applications.',
    creator: '@waisihnyun',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
        sizes: '16x16',
      },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
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