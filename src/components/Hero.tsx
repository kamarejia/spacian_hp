'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi2'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="min-h-screen flex items-center pt-20 lg:pt-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/keyvisual.JPG"
          alt="Space Background"
          fill
          className="object-cover opacity-70"
          style={{ objectPosition: '22% center' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
              <span className="gradient-text text-shadow-glow whitespace-pre-line">
                {t('hero.title.mobile')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12">
              {t('hero.subtitle')}
            </p>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-3 space-button text-base md:text-lg font-semibold group"
            >
              <span>{t('hero.cta')}</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}