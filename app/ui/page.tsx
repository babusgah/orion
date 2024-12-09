'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const uiScreenshots = [
  { src: "https://i.postimg.cc/GtXChWp6/Dashboard-1.png", alt: "Dashboard" },
  { src: "https://i.postimg.cc/h45Zc44c/executor-1.png", alt: "Executor Frame" },
  { src: "https://i.postimg.cc/xTNxCrqH/Script-hub-1.png", alt: "Script Hub Frame" },
  { src: "https://i.postimg.cc/0ypVYpYy/Ai-1.png", alt: "AI Assistant Frame" },
]

export default function UI() {
  return (
    <div className="min-h-screen bg-[#07214b] text-white">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200"
          >
            Orion UI
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uiScreenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

