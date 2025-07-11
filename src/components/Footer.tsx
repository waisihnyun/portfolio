'use client'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-center">
      <div className="container mx-auto">
        <p className="font-body text-gray-400">
          © {new Date().getFullYear()} Wai Si Hnyun. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
