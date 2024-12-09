'use client'

import { motion } from 'framer-motion'
import { Bot, Shield, Zap, Code, Users, Star } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const features = [
  {
    icon: <Bot className="w-12 h-12" />,
    title: 'AI Integration',
    description: 'Advanced AI assistance to enhance your scripting capabilities'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Secure Execution',
    description: 'Enterprise-grade security for your serverside operations'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless script execution'
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Custom Scripts',
    description: 'Create and execute custom scripts with ease'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Active Community',
    description: '24/7 support from our dedicated community'
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: 'Premium Features',
    description: 'Access exclusive tools and advanced capabilities'
  }
]

export default function Features() {
  return (
    <div className="min-h-screen bg-[#07214b] text-white">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Orion Features
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-800/30 transition-all duration-300 border border-blue-500/10 hover:border-blue-500/30"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-100">{feature.title}</h3>
                <p className="text-blue-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

