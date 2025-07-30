'use client'

import Link from 'next/link'
import { HiSparkles } from 'react-icons/hi2'
import { useLanguage } from '@/contexts/LanguageContext'

export default function News() {
  const { t } = useLanguage()
  
  const newsItems = [
    {
      date: t('news.item1.date'),
      title: t('news.item1.title'),
      icon: HiSparkles,
      excerpt: t('news.item1.excerpt'),
      category: t('news.category.company')
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      [t('news.category.rulette')]: 'bg-gradient-to-r from-yellow-400 to-amber-500',
      [t('news.category.lemo')]: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      [t('news.category.event')]: 'bg-gradient-to-r from-purple-500 to-pink-500',
      [t('news.category.company')]: 'bg-gradient-to-r from-space-pink to-space-pink-dark',
    }
    return colors[category] || 'bg-gradient-to-r from-gray-500 to-gray-600'
  }

  return (
    <section className="py-24 bg-gradient-to-br from-space-pink/5 to-black/80">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text text-center mb-16 text-shadow-glow">
          {t('news.title')}
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="space-border rounded-xl p-6 hover:border-space-pink/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-4">
                <time className="text-space-pink font-bold text-sm">
                  {item.date}
                </time>
                <span className={`${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-space-pink transition-colors duration-300 flex items-center gap-2">
                <item.icon className="w-5 h-5 text-space-pink" />
                {item.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 border-2 border-space-pink text-space-pink px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-space-pink hover:text-white group"
          >
            <span>{t('news.cta')}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}