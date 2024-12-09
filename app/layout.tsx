import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orion - Advanced Roblox Serverside',
  description: 'Experience the future of Roblox serverside scripting with Orion.',
  icons: {
    icon: 'https://i.postimg.cc/3NDhdC26/Screenshot-2024-12-04-12-37-07-PM.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

