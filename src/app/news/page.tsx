'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { t } = useLanguage()

  const newsArticles = [
    {
      id: 1,
      category: 'company',
      date: t('news.article1.date'),
      title: t('news.article1.title'),
      excerpt: t('news.article1.excerpt'),
      featured: false,
      content: t('news.article1.content')
    }
  ]

  const categories = [
    { id: 'all', name: t('news.filter.all') },
    { id: 'rulette', name: t('news.filter.rulette') },
    { id: 'lemo', name: t('news.filter.lemo') },
    { id: 'company', name: t('news.filter.company') },
    { id: 'event', name: t('news.filter.event') },
  ]

  const filteredArticles = activeFilter === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter)

  const getCategoryStyle = (category: string) => {
    const styles = {
      rulette: 'bg-gradient-to-r from-yellow-400 to-amber-500',
      lemo: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      company: 'bg-gradient-to-r from-space-pink to-space-pink-dark',
      event: 'bg-gradient-to-r from-purple-500 to-pink-500',
    }
    return styles[category as keyof typeof styles] || 'bg-gradient-to-r from-gray-500 to-gray-600'
  }

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 text-center bg-gradient-to-br from-space-pink/10 to-black/80">
        <div className="container mx-auto px-4">
          <h1 className="font-orbitron text-5xl font-bold gradient-text mb-4 text-shadow-glow">
            {t('news.page.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('news.page.subtitle')}
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-space-pink to-space-pink-dark text-white'
                    : 'space-border text-white hover:border-space-pink/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="space-y-12">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className={`space-border rounded-xl p-8 transition-all duration-300 hover:border-space-pink/50 hover:-translate-y-1 ${
                  article.featured ? 'border-space-pink/50 bg-space-pink/5' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <time className="text-space-pink font-bold text-sm">
                    {article.date}
                  </time>
                  <span className={`${getCategoryStyle(article.category)} text-white px-4 py-1 rounded-full text-sm font-medium mt-2 md:mt-0`}>
                    {categories.find(cat => cat.id === article.category)?.name}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
                  {article.title}
                </h2>
                
                {article.featured && (
                  <div className="bg-gradient-to-r from-space-pink/20 to-space-pink-dark/20 border border-space-pink/30 rounded-lg h-48 flex items-center justify-center text-space-pink font-bold text-lg mb-6">
                    📚 Rulette Update
                  </div>
                )}
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                {article.content && (
                  <div className="text-white leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>
                )}
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}