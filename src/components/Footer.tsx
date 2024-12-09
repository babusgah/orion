import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051a3d] py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-300">&copy; {new Date().getFullYear()} Orion. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link to="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
            Terms of Service
          </Link>
          <Link to="/policy" className="text-blue-400 hover:text-blue-300 transition-colors">
            Privacy Policy
          </Link>
          <a href="https://discord.gg/QngReBE9t7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

