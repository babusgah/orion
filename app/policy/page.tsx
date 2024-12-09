'use client'

import { motion } from 'framer-motion'
import { Shield, Database, User } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Policy() {
  const dataCollected = [
    { icon: <Shield className="w-6 h-6" />, title: "Chat Logs", description: "We collect your chat logs to improve our services and provide better support." },
    { icon: <Database className="w-6 h-6" />, title: "Scripts", description: "Scripts ran by your account are stored for analysis and optimization purposes." },
    { icon: <User className="w-6 h-6" />, title: "Roblox Account", description: "Your Roblox account information is used for whitelisting and access control." },
  ]

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
            Privacy Policy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 mb-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-300">Data We Collect</h2>
            <div className="space-y-6">
              {dataCollected.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-blue-400 p-2 bg-blue-800/50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-200">{item.title}</h3>
                    <p className="text-blue-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Refund Policy</h2>
            <p className="text-blue-200">
              All sales are final. No refunds will be issued for any purchases made on our platform. We encourage our users to carefully consider their decisions before making any transactions.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

