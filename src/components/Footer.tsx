'use client'

import Link from 'next/link'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { HiPencilSquare } from 'react-icons/hi2'
import { socialLinks } from '@/lib/social-links'
import { useLanguage } from '@/contexts/LanguageContext'

interface SocialSection {
  title: string
  color: string
  hoverColor: string
  links: { href: string; icon: React.ComponentType<{ className?: string }> }[]
}

export default function Footer() {
  const { t } = useLanguage()
  
  const socialSections: SocialSection[] = [
    {
      title: 'Rulette',
      color: 'text-yellow-400',
      hoverColor: 'hover:text-yellow-400',
      links: [
        { href: socialLinks.rulette.x, icon: FaXTwitter },
        { href: socialLinks.rulette.instagram, icon: FaInstagram },
        { href: socialLinks.rulette.note, icon: HiPencilSquare }
      ]
    },
    {
      title: 'Project: LEMO',
      color: 'text-cyan-400',
      hoverColor: 'hover:text-cyan-400',
      links: [
        { href: socialLinks.lemo.x, icon: FaXTwitter },
        { href: socialLinks.lemo.instagram, icon: FaInstagram },
        { href: socialLinks.lemo.note, icon: HiPencilSquare }
      ]
    }
  ]
  return (
    <footer className="relative z-10 border-t border-space-pink/30 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Spacian Info */}
          <div className="text-center md:text-left">
            <h3 className="font-orbitron text-xl font-bold gradient-text mb-4">Spacian</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {socialSections.map((section, index) => (
            <div key={index} className="text-center">
              <h4 className={`font-bold ${section.color} mb-4`}>{section.title}</h4>
              <div className="flex justify-center gap-4">
                {section.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${section.hoverColor} transition-colors duration-300`}
                  >
                    <link.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-space-pink/30 pt-8">
          <p className="text-gray-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}