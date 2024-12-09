'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Orion?',
    answer: 'Orion is a powerful Roblox serverside scripting solution that allows developers to create and execute advanced scripts with ease.',
  },
  {
    question: 'How do I get started with Orion?',
    answer: 'To get started, simply click on the "Get Script" button and follow the instructions to integrate Orion into your Roblox game.',
  },
  {
    question: 'Is Orion safe to use?',
    answer: 'Yes, Orion is designed with security in mind. We use advanced encryption and protection measures to ensure your scripts and data remain safe.',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-blue-900 bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-blue-800 rounded-lg focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-blue-200">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-300 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-700 rounded-b-lg p-4 text-blue-100"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

