import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Eye, ThumbsUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const showcases = [
  {
    title: "Advanced Script Execution",
    description: "Demonstrate the power of Orion's script execution capabilities with complex, multi-threaded operations.",
    videoUrl: "https://example.com/video1.mp4",
    creator: "OrionDev",
    views: 15000,
    likes: 1200,
  },
  {
    title: "AI-Assisted Coding",
    description: "Showcase how Orion's AI integration helps developers write more efficient and error-free code.",
    videoUrl: "https://example.com/video2.mp4",
    creator: "AICodeMaster",
    views: 12000,
    likes: 980,
  },
  {
    title: "Real-time Collaboration",
    description: "Highlight Orion's ability to enable seamless real-time collaboration between multiple developers.",
    videoUrl: "https://example.com/video3.mp4",
    creator: "TeamOrion",
    views: 18000,
    likes: 1500,
  },
  {
    title: "Performance Benchmarks",
    description: "Present comparative benchmarks showing Orion's superior performance against other serverside executors.",
    videoUrl: "https://example.com/video4.mp4",
    creator: "BenchmarkPro",
    views: 10000,
    likes: 850,
  }
]

const Showcases: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

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
            Orion Showcases
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcases.map((showcase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-800/30 transition-all duration-300 border border-blue-500/10 hover:border-blue-500/30"
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <video
                    src={showcase.videoUrl}
                    className="w-full h-full object-cover"
                    onClick={() => setPlayingVideo(playingVideo === index ? null : index)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {playingVideo === index ? (
                      <Pause className="w-16 h-16 text-white opacity-50 hover:opacity-100 transition-opacity" />
                    ) : (
                      <Play className="w-16 h-16 text-white opacity-50 hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-100">{showcase.title}</h3>
                <p className="text-blue-300 mb-4">{showcase.description}</p>
                <div className="flex justify-between items-center text-blue-400">
                  <span>Creator: {showcase.creator}</span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {showcase.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {showcase.likes.toLocaleString()}
                    </span>
                  </div>
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

export default Showcases

