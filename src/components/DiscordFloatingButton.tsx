'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { socialLinks } from '@/lib/social-links'
import { 
  HiXMark, 
  HiSparkles, 
  HiChatBubbleLeftRight, 
  HiPuzzlePiece,
  HiRocketLaunch 
} from 'react-icons/hi2'

export default function DiscordFloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useLanguage()

  const benefits = [
    { icon: HiSparkles, textKey: 'discord.benefit1' },
    { icon: HiChatBubbleLeftRight, textKey: 'discord.benefit2' },
    { icon: HiPuzzlePiece, textKey: 'discord.benefit3' }
  ]

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Discord開発コミュニティに参加"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-space-blue to-space-blue-light shadow-2xl shadow-space-blue/50 hover:shadow-space-blue/70 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
            <Image
              src="/images/icons/discordlemo.webp"
              alt="Discord LEMO"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-space-blue/30 animate-ping"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/90 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap border border-space-blue/30 backdrop-blur-sm">
              {t('discord.tooltip')}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false)
            }
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-space-blue/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-space-blue/20">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="閉じる"
            >
              <HiXMark className="w-6 h-6" />
            </button>
            
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-space-blue to-space-blue-light p-4">
                <Image
                  src="/images/icons/discordlemo.webp"
                  alt="Discord LEMO"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-space-blue mb-2 flex items-center justify-center gap-2">
                <HiRocketLaunch className="w-6 h-6" />
                {t('discord.title')}
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              {t('discord.description')}
            </p>
            
            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <benefit.icon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">{t(benefit.textKey)}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-space-blue to-space-blue-light text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-space-blue/50 transition-all duration-300 hover:scale-105"
              >
                <HiChatBubbleLeftRight className="w-5 h-5" />
                <span>{t('discord.join')}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}