// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const downloadResume = () => {
  // Create a temporary link element
  const link = document.createElement('a')
  link.href = '/files/resume.pdf'
  link.download = 'Wai_Si_Hnyun_Resume.pdf'
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  
  // Trigger download
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  // Optional: Track download event (for analytics)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'Resume',
      event_label: 'Portfolio Resume Download'
    })
  }
}

export const openResumeInNewTab = () => {
  window.open('/files/resume.pdf', '_blank', 'noopener,noreferrer')
}
