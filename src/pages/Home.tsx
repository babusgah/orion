import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07214b] text-white">
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center relative pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-20 text-center"
          >
            <div className="flex justify-center items-center mb-8">
              <Logo size="large" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200"
            >
              Welcome to Orion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-blue-200 max-w-2xl mx-auto"
            >
              Experience the next generation of Roblox serverside execution with advanced AI assistance and unparalleled performance.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/QngReBE9t7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 border border-blue-500/50 group shine-effect text-center text-base inline-flex items-center justify-center w-[200px]"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/QngReBE9t7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 shine-effect text-center flex items-center justify-center text-base w-[200px]"
              >
                <img
                  src="/discord-logo.png"
                  alt="Discord"
                  className="w-5 h-5 mr-2"
                />
                <span>Join Discord</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

