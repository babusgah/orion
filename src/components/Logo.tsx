import React from 'react'

interface LogoProps {
  className?: string
  size?: 'small' | 'normal' | 'large'
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "normal" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    normal: "w-8 h-8",
    large: "w-32 h-32"
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]}`}>
        <img
          src="/logo.png"
          alt="Orion Logo"
          className="rounded-lg w-full h-full"
        />
      </div>
    </div>
  )
}

export default Logo

