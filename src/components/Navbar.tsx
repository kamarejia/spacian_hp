'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { HiGlobeAlt } from 'react-icons/hi2'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/news', label: t('nav.news') },
    { href: '/contact', label: t('nav.contact') }
  ] as const

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-lg border-b border-space-pink/30'
          : 'bg-black/90 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <Image
                src="/images/logos/spacian-icon.png"
                alt="Spacian"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-300 space-glow"
              />
            </div>
            <span className="font-orbitron text-2xl font-bold gradient-text tracking-wider text-shadow-glow">
              SPACIAN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-medium tracking-wide transition-all duration-300 hover:text-space-pink ${
                      pathname === item.href
                        ? 'text-space-pink bg-space-pink/10 px-4 py-2 rounded-full'
                        : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-space-pink/10 hover:bg-space-pink/20 transition-all duration-300 border border-space-pink/30"
                aria-label="言語を変更"
              >
                <HiGlobeAlt className="w-4 h-4 text-space-pink" />
                <span className="text-sm font-medium text-space-pink uppercase">
                  {language}
                </span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-black/95 border border-space-pink/30 rounded-lg overflow-hidden backdrop-blur-lg">
                  <button
                    onClick={() => {
                      setLanguage('ja')
                      setIsLangMenuOpen(false)
                    }}
                    className={`block w-full px-4 py-2 text-sm hover:bg-space-pink/10 transition-colors text-left ${
                      language === 'ja' ? 'text-space-pink bg-space-pink/5' : 'text-white'
                    }`}
                  >
                    日本語 (JA)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setIsLangMenuOpen(false)
                    }}
                    className={`block w-full px-4 py-2 text-sm hover:bg-space-pink/10 transition-colors text-left ${
                      language === 'en' ? 'text-space-pink bg-space-pink/5' : 'text-white'
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('de')
                      setIsLangMenuOpen(false)
                    }}
                    className={`block w-full px-4 py-2 text-sm hover:bg-space-pink/10 transition-colors text-left ${
                      language === 'de' ? 'text-space-pink bg-space-pink/5' : 'text-white'
                    }`}
                  >
                    Deutsch (DE)
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center"
            aria-label="メニューを開く"
          >
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 font-medium tracking-wide transition-all duration-300 hover:text-space-pink hover:bg-space-pink/10 rounded-lg ${
                    pathname === item.href ? 'text-space-pink bg-space-pink/10' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Mobile Language Switcher */}
            <li className="px-4 py-2">
              <div className="flex items-center gap-2 mb-2">
                <HiGlobeAlt className="w-4 h-4 text-space-pink" />
                <span className="text-sm font-medium text-space-pink">Language</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setLanguage('ja')
                    setIsMobileMenuOpen(false)
                  }}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    language === 'ja' 
                      ? 'bg-space-pink text-black' 
                      : 'bg-space-pink/10 text-space-pink hover:bg-space-pink/20'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => {
                    setLanguage('en')
                    setIsMobileMenuOpen(false)
                  }}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    language === 'en' 
                      ? 'bg-space-pink text-black' 
                      : 'bg-space-pink/10 text-space-pink hover:bg-space-pink/20'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage('de')
                    setIsMobileMenuOpen(false)
                  }}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    language === 'de' 
                      ? 'bg-space-pink text-black' 
                      : 'bg-space-pink/10 text-space-pink hover:bg-space-pink/20'
                  }`}
                >
                  Deutsch
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}