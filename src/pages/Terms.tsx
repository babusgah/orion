import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Power, UserX, Shield, Ban, MessageSquare, Users, Lock, XCircle, AlertTriangle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Terms: React.FC = () => {
  const terms = [
    {
      icon: <Power className="w-6 h-6" />,
      title: "Only Shutdown When Necessary",
      description: "Shutdown the server only if it's essential (e.g., when the server is compromised or destroyed)."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Dont go crazy if the owner is in the game",
      description: "Dont execute stuff like antiban etc when the owner or staff is in the game."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "No External Executors",
      description: "Do not use external executors or scripts that are not approved."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "No Backdoors",
      description: "Never insertbackdoors into our games."
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: "No NSFW Content",
      description: "Do not use or insert any NSFW scripts or content."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "No Teleporting to Other Games",
      description: "No teleporting players to other games without permission."
    },
    {
      icon: <UserX className="w-6 h-6" />,
      title: "No Mass Banning or Kicking",
      description: "You are allowed to ban players, but do not do so excessively or abusively."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "No Leaking",
      description: "Do not make claims or spread rumors, such as saying the game is infected."
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "No Extreme Abuse",
      description: "Refrain from actions like decal spamming or unanchoring everything."
    },
  ]

  return (
    <div className="min-h-screen bg-[#07214b] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 via-transparent to-transparent" />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed w-full z-50 bg-blue-950/50 backdrop-blur-md border-b border-blue-500/10"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo size="small" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Orion
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Terms of Service
          </h1>

          <div className="grid gap-6">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 p-3 bg-blue-950/50 rounded-lg">
                    {term.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">
                      {term.title}
                    </h3>
                    <p className="text-blue-300">
                      {term.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: terms.length * 0.1 }}
            className="mt-12 bg-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              <div className="text-red-400 p-3 bg-red-950/50 rounded-lg">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-100">
                  Violation Consequences
                </h3>
                <p className="text-red-300">
                  Violating these terms will result in a warning or a blacklist.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Terms

