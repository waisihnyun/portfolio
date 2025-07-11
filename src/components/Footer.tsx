'use client'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-center">
      <div className="container mx-auto">
        <p className="font-body text-gray-400">
          <span className="text-gray-500">#</span> <span className="text-blue-400">EOF</span> <span className="text-gray-500">|</span> © {new Date().getFullYear()} Wai Si Hnyun <span className="text-gray-500">|</span> <span className="text-green-400">exit(0)</span>
        </p>
      </div>
    </footer>
  )
}
