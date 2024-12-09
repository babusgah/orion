import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, MessageCircle, Headphones } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Community: React.FC = () => {
  const communityFeatures = [
    { icon: <Users className="w-8 h-8" />, title: "Active Members", description: "Join a thriving community of developers and enthusiasts" },
    { icon: <MessageCircle className="w-8 h-8" />, title: "Instant Support", description: "Get help and answers to your questions in real-time" },
    { icon: <Headphones className="w-8 h-8" />, title: "Voice Channels", description: "Collaborate and discuss ideas in our voice channels" },
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
            Join Our Community
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 mb-12"
          >
            <p className="text-blue-200 mb-6 text-lg text-center">
              Connect with other developers, get support, and stay updated with the latest features. Join our Discord community to get started with Orion. Our team and community members are ready to help you succeed.
            </p>
            <div className="flex justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/QngReBE9t7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 inline-flex items-center justify-center border border-blue-500/50 group shine-effect w-[200px]"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
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

export default Community

