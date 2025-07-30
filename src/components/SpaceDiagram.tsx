'use client'

export default function SpaceDiagram() {
  const orbitLetters1 = ['G', 'A', 'M', 'E']
  const orbitLetters2 = ['S', 'P', 'A', 'C', 'E']

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Central star */}
      <div className="absolute w-6 h-6 bg-gradient-to-r from-space-pink to-white rounded-full space-glow z-10" />
      
      {/* First orbit ring - GAME */}
      <div className="absolute w-32 h-32 border border-space-pink/30 rounded-full animate-rotate">
        {orbitLetters1.map((letter, index) => {
          const angle = (index * 90) - 90 // Start from top
          const radius = 64
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <div
              key={index}
              className="absolute w-8 h-8 bg-gradient-to-r from-space-pink to-space-pink-dark rounded-full flex items-center justify-center text-white font-bold text-sm animate-counter-rotate space-glow"
              style={{
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(50% + ${y}px - 16px)`,
              }}
            >
              {letter}
            </div>
          )
        })}
      </div>
      
      {/* Second orbit ring - SPACE */}
      <div className="absolute w-52 h-52 border border-space-pink/20 rounded-full" style={{ animation: 'rotate 25s linear infinite' }}>
        {orbitLetters2.map((letter, index) => {
          const angle = (index * 72) - 90 // 360/5 = 72 degrees
          const radius = 104
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <div
              key={index}
              className="absolute w-8 h-8 bg-gradient-to-r from-space-pink to-space-pink-dark rounded-full flex items-center justify-center text-white font-bold text-sm space-glow"
              style={{
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(50% + ${y}px - 16px)`,
                animation: 'counter-rotate 25s linear infinite',
              }}
            >
              {letter}
            </div>
          )
        })}
      </div>
      
      {/* Connecting lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 320 320">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff59e6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff3d8a" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Radial lines from center */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
            const x1 = 160
            const y1 = 160
            const x2 = 160 + Math.cos((angle * Math.PI) / 180) * 80
            const y2 = 160 + Math.sin((angle * Math.PI) / 180) * 80
            
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
              />
            )
          })}
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-space-pink rounded-full animate-twinkle"
            style={{
              left: `${15 + (i * 6)}%`,
              top: `${20 + (i * 5)}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}