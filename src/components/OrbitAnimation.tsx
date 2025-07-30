'use client'

export default function OrbitAnimation() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Main orbit */}
      <div className="absolute w-72 h-72 border border-space-pink/20 rounded-full animate-rotate">
        {/* Planet 1 */}
        <div className="absolute w-16 h-16 bg-gradient-to-r from-space-pink to-space-pink-dark rounded-full flex items-center justify-center text-white font-bold text-lg animate-counter-rotate -top-8 left-1/2 transform -translate-x-1/2 space-glow">
          R1
        </div>
        {/* Planet 2 */}
        <div className="absolute w-16 h-16 bg-gradient-to-r from-space-pink to-space-pink-dark rounded-full flex items-center justify-center text-white font-bold text-lg animate-counter-rotate -bottom-8 -right-8 space-glow">
          R2
        </div>
        {/* Planet 3 */}
        <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg animate-counter-rotate top-1/2 -left-8 transform -translate-y-1/2 space-glow">
          L1
        </div>
      </div>
      
      {/* Central star */}
      <div className="absolute w-6 h-6 bg-gradient-to-r from-space-pink to-white rounded-full space-glow animate-pulse" />
      
      {/* Connection lines */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 320 320">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff59e6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff3d8a" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Connecting lines between planets */}
          <line x1="160" y1="50" x2="160" y2="160" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="160" y1="160" x2="270" y2="270" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="160" y1="160" x2="50" y2="160" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-space-pink rounded-full animate-twinkle"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${15 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}