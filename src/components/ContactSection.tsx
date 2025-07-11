'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/data/portfolio'
import { useContactForm } from '@/hooks/useContactForm'

export default function ContactSection() {
  const { formRef, isSubmitting, submitStatus, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-16 text-center tracking-wide">
          <span className="text-gray-500">$</span> <span className="text-blue-400">sendMessage</span> <span className="text-gray-500">--connect</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-body text-base md:text-lg text-gray-300 mb-6 leading-loose">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to
              drop me a message!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="font-body">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <Button 
                    key={link.label}
                    variant="outline" 
                    size="icon" 
                    asChild
                  >
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium font-body mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 font-body bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium font-body mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 font-body bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium font-body mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 font-body bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <p className="font-body text-green-500 text-sm mt-2">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="font-body text-red-500 text-sm mt-2">
                Failed to send message. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
