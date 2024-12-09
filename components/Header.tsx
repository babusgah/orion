'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/ui", label: "UI" },
    { href: "/showcases", label: "Showcases" },
    { href: "/faq", label: "FAQ" },
    { href: "/community", label: "Community" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/policy", label: "Policy" },
  ]

  return (
    <header className="fixed w-full z-50 bg-[#05224d]/50 backdrop-blur-md border-b border-[#041832]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://i.imghippo.com/files/Xt9210sQg.png"
            alt="Orion Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Orion
          </span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-300 hover:text-blue-100 transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ type: 'tween' }}
        className="fixed top-0 right-0 bottom-0 w-64 bg-[#05224d]/90 backdrop-blur-md p-4 shadow-lg md:hidden"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-blue-300 hover:text-blue-100 transition-colors"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col space-y-4 mt-12">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</NavLink>
          ))}
        </nav>
      </motion.div>
    </header>
  )
}

const NavLink = ({ href, children, ...props }) => (
  <Link
    href={href}
    className="text-blue-300 hover:text-blue-100 transition-all duration-300 hover:scale-105 inline-block"
    {...props}
  >
    {children}
  </Link>
)

export default Header

