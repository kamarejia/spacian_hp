'use client'

import { 
  HiEnvelope, 
  HiOutlineDocumentText, 
  HiRocketLaunch
} from 'react-icons/hi2'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { socialLinks as globalSocialLinks } from '@/lib/social-links'
import { useLanguage } from '@/contexts/LanguageContext'
import DiscordCommunity from '@/components/DiscordCommunity'

interface SocialLink {
  name: string
  icon: React.ComponentType<{ className?: string }>
  url: string
  description: string
}


export default function ContactPage() {
  const { t } = useLanguage()
  
  const socialLinks: { [key: string]: SocialLink[] } = {
    rulette: [
      { name: 'X', icon: FaXTwitter, url: globalSocialLinks.rulette.x, description: t('sns.rulette.x.desc') },
      { name: 'Instagram', icon: FaInstagram, url: globalSocialLinks.rulette.instagram, description: t('sns.rulette.instagram.desc') },
      { name: 'note', icon: HiOutlineDocumentText, url: globalSocialLinks.rulette.note, description: t('sns.rulette.note.desc') }
    ],
    lemo: [
      { name: 'X', icon: FaXTwitter, url: globalSocialLinks.lemo.x, description: t('sns.lemo.x.desc') },
      { name: 'Instagram', icon: FaInstagram, url: globalSocialLinks.lemo.instagram, description: t('sns.lemo.instagram.desc') },
      { name: 'note', icon: HiOutlineDocumentText, url: globalSocialLinks.lemo.note, description: t('sns.lemo.note.desc') }
    ]
  }
  
  
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 text-center bg-gradient-to-br from-space-pink/10 to-black/80">
        <div className="container mx-auto px-4">
          <h1 className="font-orbitron text-5xl font-bold gradient-text mb-4 text-shadow-glow">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Google Form */}
            <div>
              <h2 className="font-orbitron text-3xl font-bold gradient-text mb-8">
                {t('contact.form.title')}
              </h2>
              <div className="space-border rounded-3xl p-8 text-center">
                <div className="mb-8">
                  <p className="text-xl text-gray-300 mb-6 whitespace-pre-line">
                    {t('contact.form.description')}
                  </p>
                </div>
                
                <a
                  href={globalSocialLinks.googleForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 space-button text-lg font-semibold"
                >
                  <span>{t('contact.form.button')}</span>
                  <HiRocketLaunch className="w-5 h-5" />
                </a>
                
                <div className="mt-8 pt-8 border-t border-space-pink/30">
                  <div className="flex items-center gap-4 justify-center">
                    <HiEnvelope className="text-2xl text-space-pink" />
                    <div>
                      <div className="text-space-pink font-bold text-sm">{t('contact.email.title')}</div>
                      <a href="mailto:contact@spacian.jp" className="text-white hover:text-space-pink transition-colors">
                        contact@spacian.jp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SNS・コミュニティ */}
            <div className="space-y-8">
              {/* Rulette SNS */}
              <div>
                <h3 className="text-yellow-400 text-xl font-bold mb-6">{t('contact.sns.rulette')}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.rulette.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 space-border hover:border-yellow-400/50"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 text-yellow-400">
                        <social.icon className="w-6 h-6 mx-auto" />
                      </div>
                      <div className="font-bold text-white text-sm mb-1">{social.name}</div>
                      <div className="text-gray-400 text-xs">{social.description}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Project LEMO SNS */}
              <div>
                <h3 className="text-cyan-400 text-xl font-bold mb-6">{t('contact.sns.lemo')}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.lemo.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 space-border hover:border-cyan-400/50"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 text-cyan-400">
                        <social.icon className="w-6 h-6 mx-auto" />
                      </div>
                      <div className="font-bold text-white text-sm mb-1">{social.name}</div>
                      <div className="text-gray-400 text-xs">{social.description}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Discord Community */}
              <DiscordCommunity />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}