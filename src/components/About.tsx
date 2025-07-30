'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <section className="py-24 bg-gradient-to-br from-space-pink/5 to-black/80">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text text-center mb-16 text-shadow-glow">
          {t('about.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed whitespace-pre-line">
            {t('about.description')}
          </p>
        </div>
        
        
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border-2 border-space-pink text-space-pink px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-space-pink hover:text-white group"
          >
            <span>{t('about.cta')}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}