import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { SubmitStatus } from '@/types'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const formRef = useRef<HTMLFormElement>(null)

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

  return {
    formRef,
    isSubmitting,
    submitStatus,
    handleSubmit
  }
}
