'use client'

import { 
  HiEnvelope, 
  HiOutlineDocumentText, 
  HiChatBubbleLeftRight, 
  HiRocketLaunch, 
  HiSparkles, 
  HiPuzzlePiece 
} from 'react-icons/hi2'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { socialLinks } from '@/lib/social-links'
import { useLanguage } from '@/contexts/LanguageContext'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SocialLink {
  name: string
  icon: React.ComponentType<{ className?: string }>
  url: string
  description: string
}


export default function Contact() {
  const { t } = useLanguage()
  
  const socialLinksData = [
    {
      titleKey: 'contact.sns.rulette',
      color: 'text-yellow-400',
      hoverColor: 'hover:border-yellow-400/50',
      links: [
        { name: 'X', icon: FaXTwitter, url: socialLinks.rulette.x, description: t('sns.rulette.x.desc') },
        { name: 'Instagram', icon: FaInstagram, url: socialLinks.rulette.instagram, description: t('sns.rulette.instagram.desc') },
        { name: 'note', icon: HiOutlineDocumentText, url: socialLinks.rulette.note, description: t('sns.rulette.note.desc') }
      ]
    },
    {
      titleKey: 'contact.sns.lemo',
      color: 'text-cyan-400',
      hoverColor: 'hover:border-cyan-400/50',
      links: [
        { name: 'X', icon: FaXTwitter, url: socialLinks.lemo.x, description: t('sns.lemo.x.desc') },
        { name: 'Instagram', icon: FaInstagram, url: socialLinks.lemo.instagram, description: t('sns.lemo.instagram.desc') },
        { name: 'note', icon: HiOutlineDocumentText, url: socialLinks.lemo.note, description: t('sns.lemo.note.desc') }
      ]
    }
  ]

  const discordBenefitsKeys = [
    { icon: HiSparkles, textKey: 'contact.home.discord.benefit1' },
    { icon: HiChatBubbleLeftRight, textKey: 'contact.home.discord.benefit2' },
    { icon: HiPuzzlePiece, textKey: 'contact.home.discord.benefit3' }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text text-center mb-16 text-shadow-glow">
          {t('contact.home.title')}
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          {t('contact.home.subtitle')}
        </p>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-border rounded-xl p-8">
              <h3 className="text-space-pink text-xl font-bold mb-6">{t('contact.home.form.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <HiEnvelope className="text-2xl text-space-pink" />
                  <div>
                    <div className="text-space-pink font-bold mb-1">{t('contact.home.email.title')}</div>
                    <a 
                      href="mailto:ajia.watabe@gmail.com"
                      className="text-white hover:text-space-pink transition-colors duration-300"
                    >
                      ajia.watabe@gmail.com
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="space-button text-lg font-semibold"
              >
                {t('contact.home.form.button')}
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-8">
            {socialLinksData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className={`${section.color} text-xl font-bold mb-6`}>{t(section.titleKey)}</h3>
                <div className="grid grid-cols-3 gap-3">
                  {section.links.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 space-border ${section.hoverColor}`}
                    >
                      <div className={`text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 ${section.color}`}>
                        <social.icon className="w-6 h-6 mx-auto" />
                      </div>
                      <div className="font-bold text-white text-sm mb-1">{social.name}</div>
                      <div className="text-gray-400 text-xs">{social.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Discord Community */}
            <div className="bg-gradient-to-br from-space-blue/10 to-space-blue-light/10 border border-space-blue rounded-xl p-6">
              <h4 className="text-space-blue font-bold text-lg mb-4 flex items-center justify-center gap-2">
                <HiRocketLaunch className="w-5 h-5" /> {t('contact.home.discord.title')}
              </h4>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed whitespace-pre-line">
                {t('contact.home.discord.description')}
              </p>
              <ul className="text-white text-sm space-y-2 mb-6">
                {discordBenefitsKeys.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <benefit.icon className="w-4 h-4 text-yellow-400" /> {t(benefit.textKey)}
                  </li>
                ))}
              </ul>
              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="discord-button w-full flex items-center justify-center gap-2"
              >
                <HiChatBubbleLeftRight className="w-5 h-5" />
                <span>{t('contact.home.discord.join')}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}