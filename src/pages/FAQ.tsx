'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const faqs = [
  {
    question: "What is Orion?",
    answer: "Orion is a cutting-edge serverside executor that revolutionizes your development experience. Featuring advanced AI assistance, it empowers developers to create extraordinary experiences with unprecedented ease and efficiency."
  },
  {
    question: "How do I get started?",
    answer: "Getting started with Orion is seamless. Simply click the 'Get Started' button to join our secure Discord community. Our dedicated team and community members will guide you through the setup process and help you unlock the full potential of Orion."
  },
  {
    question: "Is Orion safe to use?",
    answer: "Absolutely. We're committed to providing a reliable, secure, and lasting solution. Our dedicated team continuously maintains and updates Orion, ensuring its stability and longevity. Your trust in Orion is our top priority."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </motion.h1>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-900/20 rounded-lg overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                  <motion.button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-800/30 transition-colors"
                    whileHover={{ backgroundColor: 'rgba(30, 64, 175, 0.3)' }}
                  >
                    <span className="text-lg font-medium text-blue-100">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 py-4 text-blue-300 border-t border-blue-500/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

