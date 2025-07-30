'use client'

import { useEffect, useState } from 'react'

export default function SpaceBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          size: Math.random() * 2 + 1,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black" />
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.4 + Math.random() * 0.6,
            }}
          />
        ))}
      </div>
      
      {/* Moving star field */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.4), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(255, 255, 255, 0.2), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px',
          animation: 'stars 20s linear infinite',
        }}
      />
      
      {/* Overlay gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
    </div>
  )
}