'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { socialLinks } from '@/lib/social-links'
import { 
  HiChatBubbleLeftRight, 
  HiRocketLaunch, 
  HiSparkles, 
  HiPuzzlePiece 
} from 'react-icons/hi2'

export default function DiscordCommunity() {
  const { t } = useLanguage()
  
  const benefits = [
    { icon: HiSparkles, textKey: 'discord.benefit1' },
    { icon: HiChatBubbleLeftRight, textKey: 'discord.benefit2' },
    { icon: HiPuzzlePiece, textKey: 'discord.benefit3' }
  ]

  return (
    <div className="bg-gradient-to-br from-space-blue/10 to-space-blue-light/10 border border-space-blue rounded-xl p-6">
      <h4 className="text-space-blue font-bold text-2xl mb-2 flex items-center justify-center gap-2">
        <HiRocketLaunch className="w-5 h-5" /> {t('discord.title')}
      </h4>
      
      {/* Encouragement Message */}
      <p className="text-white text-center text-base mb-6">
        {t('discord.message')}
      </p>
      
      {/* Benefits */}
      <div className="mb-6 flex justify-center">
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <benefit.icon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="text-lg font-medium">{t(benefit.textKey)}</span>
            </div>
          ))}
        </div>
      </div>
      
      <a
        href={socialLinks.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="discord-button w-full flex items-center justify-center gap-2"
      >
        <HiChatBubbleLeftRight className="w-5 h-5" />
        <span>{t('discord.join')}</span>
        <span>→</span>
      </a>
    </div>
  )
}