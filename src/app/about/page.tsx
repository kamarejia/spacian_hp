'use client'

import { HiRocketLaunch, HiMapPin, HiBolt, HiCog6Tooth, HiChevronRight } from 'react-icons/hi2'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 text-center bg-gradient-to-br from-space-pink/10 to-black/80">
        <div className="container mx-auto px-4">
          <h1 className="font-orbitron text-5xl font-bold gradient-text mb-4 text-shadow-glow">
            {t('about.page.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('about.page.subtitle')}
          </p>
        </div>
      </section>

      {/* About Detail */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div>
              <h2 className="font-orbitron text-3xl font-bold gradient-text mb-8">
                {t('about.page.mission.title')}
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                <p>
                  {t('about.page.mission.p1')}
                </p>
                <p>
                  {t('about.page.mission.p2')}
                </p>
                <p>
                  {t('about.page.mission.p3')}
                </p>
                <p>
                  {t('about.page.mission.p4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-gradient-to-br from-space-pink/5 to-black/80">
        <div className="container mx-auto px-4">
          <h2 className="font-orbitron text-4xl font-bold gradient-text text-center mb-16">
            {t('about.page.studio.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: t('about.page.studio.established'), 
                content: '2025年',
                icon: HiRocketLaunch
              },
              { 
                title: t('about.page.studio.location'), 
                content: 'Tokyo, Japan',
                icon: HiMapPin
              },
              { 
                title: t('about.page.studio.services'), 
                content: t('about.page.studio.services.content'),
                icon: HiBolt
              },
              { 
                title: t('about.page.studio.expertise'), 
                content: t('about.page.studio.expertise.content'),
                icon: HiCog6Tooth
              },
            ].map((item, index) => (
              <div key={index} className="space-border rounded-xl p-6 text-center hover:border-space-pink/50 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-12 h-12 mx-auto text-space-pink" />
                </div>
                <h3 className="font-bold text-space-pink text-lg mb-4">{item.title}</h3>
                <p className="text-white whitespace-pre-line leading-relaxed text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-orbitron text-4xl font-bold gradient-text text-center mb-16">
            {t('about.page.founder.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-border rounded-xl p-12 text-center hover:border-space-pink/50 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-space-pink to-space-pink-dark flex items-center justify-center">
                <span className="text-white font-bold text-3xl">A</span>
              </div>
              <h3 className="text-space-pink text-3xl font-bold mb-4">Ajia Watabe</h3>
              <p className="text-gray-400 text-lg mb-8">Founder & Director</p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-space-pink font-bold text-lg mb-4">{t('about.page.founder.background')}</h4>
                  <p className="text-white leading-relaxed">
                    {t('about.page.founder.bio')}
                  </p>
                </div>
                <div>
                  <h4 className="text-space-pink font-bold text-lg mb-4">{t('about.page.founder.expertise')}</h4>
                  <div className="space-y-2 text-white">
                    <div className="flex items-center gap-2">
                      <HiChevronRight className="text-space-pink w-4 h-4" />
                      <span>{t('about.page.founder.skill1')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiChevronRight className="text-space-pink w-4 h-4" />
                      <span>{t('about.page.founder.skill2')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiChevronRight className="text-space-pink w-4 h-4" />
                      <span>{t('about.page.founder.skill3')}</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}