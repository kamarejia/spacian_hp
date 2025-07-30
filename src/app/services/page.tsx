'use client'

import Link from 'next/link'
import Image from 'next/image'
import ImageCarousel from '@/components/ImageCarousel'
import { HiBookOpen, HiTrophy, HiChatBubbleLeft, HiBell, HiDevicePhoneMobile, HiLink, HiPlay } from 'react-icons/hi2'
import { socialLinks } from '@/lib/social-links'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesPage() {
  const { t } = useLanguage()
  
  const ruletteFeatures = [
    {
      icon: HiBookOpen,
      title: t('rulette.feature1.title'),
      description: t('rulette.feature1.desc')
    },
    {
      icon: HiTrophy,
      title: t('rulette.feature2.title'),
      description: t('rulette.feature2.desc')
    },
    {
      icon: HiChatBubbleLeft,
      title: t('rulette.feature3.title'),
      description: t('rulette.feature3.desc')
    },
    {
      icon: HiBell,
      title: t('rulette.feature4.title'),
      description: t('rulette.feature4.desc')
    }
  ]

  const lemoFeatures = [
    {
      icon: HiPlay,
      title: t('lemo.feature1.title'),
      description: t('lemo.feature1.desc')
    },
    {
      icon: HiLink,
      title: t('lemo.feature2.title'),
      description: t('lemo.feature2.desc')
    },
    {
      icon: HiDevicePhoneMobile,
      title: t('lemo.feature3.title'),
      description: t('lemo.feature3.desc')
    }
  ]
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 text-center bg-gradient-to-br from-space-pink/10 to-black/80">
        <div className="container mx-auto px-4">
          <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 text-shadow-glow">
            {t('services.page.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {t('services.page.subtitle')}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {/* Rulette */}
          <div className="space-border rounded-3xl p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full flex items-center justify-center border border-yellow-400/20">
                <Image
                  src="/images/logos/rulette-logo.png"
                  alt="Rulette Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {t('rulette.title')}<span className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-normal ml-2">(ルーレット)</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300">{t('rulette.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="order-2 lg:order-1">
                <p className="text-lg text-white leading-relaxed whitespace-pre-line">
                  {t('rulette.description')}
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <ImageCarousel
                  images={[
                    '/images/services/rulette-1.png',
                    '/images/services/rulette-2.png'
                  ]}
                  alt="Rulette"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ruletteFeatures.map((feature, index) => (
                <div key={index} className="bg-black/30 rounded-xl p-6 border border-yellow-400/10">
                  <div className="text-3xl mb-4 text-yellow-400">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-yellow-400 text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project: LEMO */}
          <div className="space-border rounded-3xl p-6 md:p-12">
            <Link href={socialLinks.lemo.discord} target="_blank" rel="noopener noreferrer" className="block group transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-cyan-600/10 rounded-full flex items-center justify-center border border-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-300">
                  <Image
                    src="/images/logos/lemo-logo.png"
                    alt="LEMO Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-col gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {t('lemo.title')}<span className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-normal ml-2">(プロジェクトレモ)</span>
                      </h2>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {t('common.developing')}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-300">{t('lemo.subtitle')}</p>
                </div>
              </div>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="order-1 lg:order-1">
                <ImageCarousel
                  images={[
                    '/images/services/lemo-1.jpg'
                  ]}
                  alt="Project LEMO"
                />
              </div>
              <div className="order-2 lg:order-2">
                <p className="text-lg text-white leading-relaxed whitespace-pre-line">
                  {t('lemo.description')}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {lemoFeatures.map((feature, index) => (
                <div key={index} className="bg-black/30 rounded-xl p-6 border border-cyan-400/10">
                  <div className="text-3xl mb-4 text-cyan-400">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-br from-space-pink/10 to-black/80">
        <div className="container mx-auto px-4">
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={socialLinks.rulette.website} target="_blank" rel="noopener noreferrer" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/50">
              {t('cta.rulette')}
            </Link>
            <Link href={socialLinks.lemo.website} className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50">
              {t('cta.lemo')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}