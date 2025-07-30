'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text text-center mb-16 text-shadow-glow">
          {t('services.title')}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Rulette */}
          <div className="space-border rounded-3xl p-8 hover:border-space-pink/50 transition-all duration-300 group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full flex items-center justify-center border border-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logos/rulette-logo.png"
                  alt="Rulette Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-space-pink mb-2">
                  {t('services.rulette.title')}
                </h3>
                <p className="text-gray-300">{t('services.rulette.subtitle')}</p>
              </div>
            </div>
            
            <p className="text-white leading-relaxed mb-8">
             {t('services.rulette.description')}
            </p>
          </div>

          {/* Project: LEMO */}
          <div className="space-border rounded-3xl p-8 hover:border-space-pink/50 transition-all duration-300 group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-cyan-600/10 rounded-full flex items-center justify-center border border-cyan-400/20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logos/lemo-logo.png"
                  alt="LEMO Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-space-pink mb-2">
                  {t('services.lemo.title')}
                </h3>
                <p className="text-gray-300">{t('services.lemo.subtitle')}</p>
              </div>
            </div>
            
            <p className="text-white leading-relaxed mb-8 whitespace-pre-line">
              {t('services.lemo.description')}
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="space-button text-lg font-semibold"
          >
            {t('services.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}