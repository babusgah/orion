import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Logo({ className = "", size = "normal" }) {
  const sizeClasses = {
    small: "w-6 h-6",
    normal: "w-8 h-8",
    large: "w-32 h-32"
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`relative ${className}`}
    >
      <div className={`${sizeClasses[size]}`}>
        <Image
          src="https://i.imghippo.com/files/Xt9210sQg.png"
          alt="Orion Logo"
          width={size === "large" ? 128 : 32}
          height={size === "large" ? 128 : 32}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  )
}

