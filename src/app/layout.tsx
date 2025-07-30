import type { Metadata } from 'next'
import { Orbitron, Exo_2 } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SpaceBackground from '@/components/SpaceBackground'
import { LanguageProvider } from '@/contexts/LanguageContext'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
})

export const metadata: Metadata = {
  title: 'Spacian - 宇宙の果てまで、無限の"遊び"をあなたに',
  description: 'ゲームと宇宙が交差する創造空間──Spacianへようこそ。「Rulette」でボードゲームの楽しさを深掘りし、「Project: LEMO」でデジタルの世界へ飛び出す。',
  keywords: 'ゲーム, 宇宙, ボードゲーム, デジタルゲーム, Spacian, Rulette, Project LEMO',
  authors: [{ name: 'Spacian' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/logos/spacian-icon.png',
    apple: '/images/logos/spacian-icon.png',
    shortcut: '/images/logos/spacian-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-black text-white min-h-screen overflow-x-hidden" suppressHydrationWarning={true}>
        <LanguageProvider>
          <SpaceBackground />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}