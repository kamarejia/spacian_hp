'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ja' | 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 翻訳データの型定義
interface TranslationData {
  [key: string]: {
    ja: string
    en: string
    de: string
  }
}

// 翻訳データ
const translations: TranslationData = {
  // ナビゲーション
  'nav.home': { ja: 'Home', en: 'Home', de: 'Home' },
  'nav.about': { ja: 'About', en: 'About', de: 'Über uns' },
  'nav.services': { ja: 'Services', en: 'Services', de: 'Services' },
  'nav.news': { ja: 'News', en: 'News', de: 'News' },
  'nav.contact': { ja: 'Contact', en: 'Contact', de: 'Kontakt' },
  
  // ホームページ - Hero
  'hero.title': { 
    ja: 'ボードゲームをサブカルからメインカルチャーへ', 
    en: 'From Subculture to Mainstream: Board Games for Everyone',
    de: 'Von der Subkultur zum Mainstream: Brettspiele für alle' 
  },
  'hero.subtitle': { 
    ja: '「Rulette」でボードゲームの楽しさを深掘りし、「Project: LEMO」でデジタルの世界へ飛び出す。', 
    en: 'Dive deep into board game fun with "Rulette" and leap into the digital world with "Project: LEMO".',
    de: 'Tauchen Sie mit "Rulette" tief in den Brettspielspaß ein und springen Sie mit "Project: LEMO" in die digitale Welt.' 
  },
  'hero.cta': { ja: 'サービスを見る', en: 'View Our Services', de: 'Unsere Services ansehen' },
  
  // About
  'about.title': { ja: 'Spacianとは', en: 'About Spacian', de: 'Über Spacian' },
  'about.description': { 
    ja: 'Spacianは"ボードゲーム"をテーマに\nデジタル体験をデザインするクリエイティブスタジオです。\n遊びの境界を拡張する革新的なサービスを提供していきます。', 
    en: 'Spacian is a creative studio that designs digital experiences\nwith "board games" as the theme.\nWe provide innovative services that expand the boundaries of play.',
    de: 'Spacian ist ein Kreativstudio, das digitale Erfahrungen\nmit "Brettspielen" als Thema gestaltet.\nWir bieten innovative Services, die die Grenzen des Spiels erweitern.' 
  },
  'about.cta': { ja: '詳しく見る', en: 'Learn More', de: 'Mehr erfahren' },
  
  // About Page
  'about.page.title': { ja: 'About Spacian', en: 'About Spacian', de: 'Über Spacian' },
  'about.page.subtitle': { ja: 'ボードゲームは次の段階へ', en: 'Board Games to the Next Level', de: 'Brettspiele auf die nächste Stufe' },
  'about.page.mission.title': { ja: 'Mission & Vision', en: 'Mission & Vision', de: 'Mission & Vision' },
  'about.page.mission.p1': { 
    ja: 'Spacianは"ボードゲーム"をテーマにデジタル体験をデザインするクリエイティブスタジオです。', 
    en: 'Spacian is a creative studio that designs digital experiences themed around "board games".', 
    de: 'Spacian ist ein Kreativstudio, das digitale Erfahrungen mit "Brettspielen" als Thema gestaltet.' 
  },
  'about.page.mission.p2': { 
    ja: '近年ボードゲームはユーロ圏だけでなく、日本にも広がりを見せています。しかしまだまだサブカルチャーの域を出ていません。', 
    en: 'In recent years, board games have spread not only in Europe but also in Japan. However, they are still within the realm of subculture.', 
    de: 'In den letzten Jahren haben sich Brettspiele nicht nur in Europa, sondern auch in Japan ausgebreitet. Sie befinden sich jedoch noch immer im Bereich der Subkultur.' 
  },
  'about.page.mission.p3': { 
    ja: 'Spacianではボードゲームが普及するにあたって抱えるさまざまなハードルを解決するために、IT技術を活用した革新的なサービスを提供していきます。', 
    en: 'Spacian provides innovative services using IT technology to solve various hurdles in the spread of board games.', 
    de: 'Spacian bietet innovative Services mit IT-Technologie, um verschiedene Hürden bei der Verbreitung von Brettspielen zu lösen.' 
  },
  'about.page.mission.p4': { 
    ja: 'ボードゲームをサブカルからメインカルチャーへ', 
    en: 'From subculture to mainstream: Board games for everyone', 
    de: 'Von der Subkultur zum Mainstream: Brettspiele für alle' 
  },
  'about.page.studio.title': { ja: 'Studio Information', en: 'Studio Information', de: 'Studio-Informationen' },
  'about.page.studio.established': { ja: 'Established', en: 'Established', de: 'Gegründet' },
  'about.page.studio.location': { ja: 'Location', en: 'Location', de: 'Standort' },
  'about.page.studio.services': { ja: 'Services', en: 'Services', de: 'Services' },
  'about.page.studio.expertise': { ja: 'Expertise', en: 'Expertise', de: 'Expertise' },
  'about.page.studio.services.content': { 
    ja: 'Game Development\nCommunity Platform', 
    en: 'Game Development\nCommunity Platform', 
    de: 'Spieleentwicklung\nCommunity-Plattform' 
  },
  'about.page.studio.expertise.content': { 
    ja: 'Board Games\nWeb Development\nCommunity Building', 
    en: 'Board Games\nWeb Development\nCommunity Building', 
    de: 'Brettspiele\nWebentwicklung\nCommunity Building' 
  },
  'about.page.founder.title': { ja: 'Founder', en: 'Founder', de: 'Gründer' },
  'about.page.founder.background': { ja: 'Background', en: 'Background', de: 'Hintergrund' },
  'about.page.founder.expertise': { ja: 'Expertise', en: 'Expertise', de: 'Expertise' },
  'about.page.founder.bio': { 
    ja: '大学では宇宙工学を学びながらボードゲームの制作活動やボードゲームカフェのスタッフを経験。幼い頃から好きだったボードゲームの道での活動を決めSpacianを設立。', 
    en: 'Studied aerospace engineering at university while experiencing board game production and working as staff at board game cafes. Decided to pursue activities in the board game field, which he loved since childhood, and established Spacian.', 
    de: 'Studierte Luft- und Raumfahrttechnik an der Universität und sammelte gleichzeitig Erfahrungen in der Brettspielproduktion und als Mitarbeiter in Brettspielfcafés. Entschied sich für Aktivitäten im Bereich Brettspiele, die er seit seiner Kindheit liebte, und gründete Spacian.' 
  },
  'about.page.founder.skill1': { ja: 'Game Design & Development', en: 'Game Design & Development', de: 'Spieledesign & Entwicklung' },
  'about.page.founder.skill2': { ja: 'Community Building', en: 'Community Building', de: 'Community Building' },
  'about.page.founder.skill3': { ja: 'Digital Platform Design', en: 'Digital Platform Design', de: 'Digitale Plattform-Design' },
  
  // ミッション・ビジョン
  'mission.title': { ja: 'Mission & Vision', en: 'Mission & Vision', de: 'Mission & Vision' },
  'mission.content': { 
    ja: '私たちは、ゲームを通じて人々をつなぎ、無限の可能性を創造します。\n宇宙のように広がる想像力で、新しい遊びの体験を提供し続けます。', 
    en: 'We connect people through games and create infinite possibilities.\nWith imagination as vast as the universe, we continue to provide new gaming experiences.',
    de: 'Wir verbinden Menschen durch Spiele und schaffen unendliche Möglichkeiten.\nMit einer Vorstellungskraft so weit wie das Universum bieten wir weiterhin neue Spielerfahrungen.' 
  },
  
  // サービス紹介（ホームページ）
  'services.title': { ja: 'Services', en: 'Services', de: 'Services' },
  'services.subtitle': { 
    ja: 'ボードゲーム体験を拡張する2つのプラットフォーム', 
    en: 'Two Platforms Expanding Your Board Game Experience',
    de: 'Zwei Plattformen, die Ihr Brettspielerlebnis erweitern' 
  },
  'services.rulette.title': { ja: 'Rulette', en: 'Rulette', de: 'Rulette' },
  'services.rulette.subtitle': { ja: '最速でわかるボードゲーム紹介メディア', en: 'The Fastest Board Game Guide Media', de: 'Das schnellste Brettspielführer-Medium' },
  'services.rulette.description': { 
    ja: 'ボードゲーム選びにこまった方、ルールがわからない方へおくるメディアサービスです。', 
    en: 'A media service for those who have trouble choosing board games or understanding rules.',
    de: 'Ein Medienservice für alle, die Schwierigkeiten bei der Auswahl von Brettspielen oder beim Verstehen der Regeln haben.' 
  },
  'services.lemo.title': { ja: 'Project: LEMO', en: 'Project: LEMO', de: 'Project: LEMO' },
  'services.lemo.subtitle': { ja: 'デジタルボードゲームプラットフォーム', en: 'Digital Board Game Platform', de: 'Digitale Brettspiel-Plattform' },
  'services.lemo.description': { 
    ja: 'ボードゲームの体験をスマホでもPCでも。\nレモと共にデジタルの世界でボードゲームを楽しみましょう。', 
    en: 'Experience board games on both mobile and PC.\nEnjoy board games in the digital world with Lemo.',
    de: 'Erleben Sie Brettspiele sowohl auf dem Handy als auch am PC.\nGenießen Sie Brettspiele in der digitalen Welt mit Lemo.' 
  },
  'services.cta': { ja: 'サービス詳細を見る', en: 'View Service Details', de: 'Service-Details ansehen' },
  
  // News
  'news.title': { ja: 'News', en: 'News', de: 'News' },
  'news.cta': { ja: 'ニュース一覧を見る', en: 'View All News', de: 'Alle News ansehen' },
  'news.item1.date': { ja: '2025年1月29日', en: 'January 29, 2025', de: '29. Januar 2025' },
  'news.item1.title': { ja: 'Spacian HP 始動', en: 'Spacian Website Launch', de: 'Spacian Website-Start' },
  'news.item1.excerpt': { 
    ja: 'ボードゲームをサブカルからメインカルチャーへ。Spacianの公式HPが正式に始動しました。', 
    en: 'From subculture to mainstream: Board games for everyone. Spacian\'s official website has officially launched.', 
    de: 'Von der Subkultur zum Mainstream: Brettspiele für alle. Spacians offizielle Website ist offiziell gestartet.' 
  },
  'news.category.company': { ja: '会社情報', en: 'Company', de: 'Unternehmen' },
  'news.category.rulette': { ja: 'Rulette', en: 'Rulette', de: 'Rulette' },
  'news.category.lemo': { ja: 'Project: LEMO', en: 'Project: LEMO', de: 'Project: LEMO' },
  'news.category.event': { ja: 'イベント', en: 'Event', de: 'Event' },
  
  // News Page
  'news.page.title': { ja: 'News & Updates', en: 'News & Updates', de: 'News & Updates' },
  'news.page.subtitle': { ja: 'Spacianの最新情報をお届け', en: 'Latest updates from Spacian', de: 'Die neuesten Updates von Spacian' },
  'news.filter.all': { ja: 'すべて', en: 'All', de: 'Alle' },
  'news.filter.rulette': { ja: 'Rulette', en: 'Rulette', de: 'Rulette' },
  'news.filter.lemo': { ja: 'Project: LEMO', en: 'Project: LEMO', de: 'Project: LEMO' },
  'news.filter.company': { ja: '活動報告', en: 'Company Updates', de: 'Unternehmens-Updates' },
  'news.filter.event': { ja: 'イベント', en: 'Events', de: 'Events' },
  
  // News Article 1 - 元の文章内容は変更せず翻訳
  'news.article1.date': { ja: '2025年7月30日', en: 'July 30, 2025', de: '30. Juli 2025' },
  'news.article1.title': { ja: 'Spacian HP 始動✨', en: 'Spacian Website Launch ✨', de: 'Spacian Website-Start ✨' },
  'news.article1.excerpt': { ja: 'Spacianの公式HPが正式に始動しました。', en: 'Spacian\'s official website has officially launched.', de: 'Spacians offizielle Website ist offiziell gestartet.' },
  'news.article1.content': { 
    ja: 'この度、Spacianの公式ホームページが正式に始動いたしました。\n\nSpacianは宇宙に住む人という意味です。\nHPは宇宙をテーマにデザインしてみました。\n\n今後はRuletteとProject: LEMOという2つの主要プロジェクトを通じて、\n皆様により豊かなゲーム体験をお届けしてまいります。', 
    en: 'We are pleased to announce that Spacian\'s official website has officially launched.\n\nSpacian means "people who live in space."\nWe designed the website with a space theme.\n\nGoing forward, we will deliver richer gaming experiences to everyone through our two main projects: Rulette and Project: LEMO.', 
    de: 'Wir freuen uns, ankündigen zu können, dass Spacians offizielle Website offiziell gestartet ist.\n\nSpacian bedeutet "Menschen, die im Weltraum leben".\nWir haben die Website mit einem Weltraum-Thema gestaltet.\n\nZukünftig werden wir durch unsere beiden Hauptprojekte Rulette und Project: LEMO allen reichere Spielerfahrungen bieten.' 
  },
  
  // Rulette
  'rulette.title': { ja: 'Rulette', en: 'Rulette', de: 'Rulette' },
  'rulette.subtitle': { ja: '最速でわかるボードゲーム紹介メディア', en: 'The Fastest Board Game Guide Media', de: 'Das schnellste Brettspiel-Guide-Medium' },
  'rulette.description': { 
    ja: 'Ruletteはボードゲームルールをすぐに理解し、プレイができるメディアサービスです。\nどんなゲームでも短文の説明とスライドで100%のルールを理解できます。\n現在はテスト版が公開されています。', 
    en: 'Rulette is a media service that helps you quickly understand board game rules and start playing.\nAny game can be 100% understood through short explanations and slides.\nCurrently in beta version.', 
    de: 'Rulette ist ein Medienservice, der Ihnen hilft, Brettspielregeln schnell zu verstehen und mit dem Spielen zu beginnen.\nJedes Spiel kann durch kurze Erklärungen und Folien zu 100% verstanden werden.\nDerzeit in der Beta-Version.' 
  },
  'rulette.feature1.title': { ja: 'ゲームデータベース', en: 'Game Database', de: 'Spiele-Datenbank' },
  'rulette.feature1.desc': { ja: '詳細なルール説明、プレイ時間、推奨人数などを確認。', en: 'Check detailed rules, play time, recommended players, and more.', de: 'Überprüfen Sie detaillierte Regeln, Spielzeit, empfohlene Spieleranzahl und mehr.' },
  'rulette.feature2.title': { ja: 'ランキング＆おすすめ', en: 'Rankings & Recommendations', de: 'Rankings & Empfehlungen' },
  'rulette.feature2.desc': { ja: '週間／月間ランキングであなたにぴったりのゲームを発見。', en: 'Discover games perfect for you through weekly/monthly rankings.', de: 'Entdecken Sie perfekte Spiele für Sie durch wöchentliche/monatliche Rankings.' },
  'rulette.feature3.title': { ja: 'レビュー＆コメント', en: 'Reviews & Comments', de: 'Bewertungen & Kommentare' },
  'rulette.feature3.desc': { ja: 'ユーザー同士の感想シェア＆戦略交流で、より深いゲーム体験を。', en: 'Share insights and strategies with other users for deeper gaming experiences.', de: 'Teilen Sie Einblicke und Strategien mit anderen Nutzern für tiefere Spielerfahrungen.' },
  'rulette.feature4.title': { ja: '通知＆メール配信', en: 'Notifications & Email', de: 'Benachrichtigungen & E-Mail' },
  'rulette.feature4.desc': { ja: 'フォロー中ゲームの最新情報を即キャッチ。', en: 'Instantly catch the latest updates on your followed games.', de: 'Erhalten Sie sofort die neuesten Updates zu Ihren verfolgten Spielen.' },
  
  // LEMO
  'lemo.title': { ja: 'Project:LEMO', en: 'Project:LEMO', de: 'Project:LEMO' },
  'lemo.subtitle': { ja: '宇宙がテーマのデジタルボードゲームプラットフォーム', en: 'Space-Themed Digital Board Game Platform', de: 'Weltraum-thematische digitale Brettspiel-Plattform' },
  'lemo.description': { 
    ja: 'アソビが大好きな宇宙人レモたちが地球のボードゲームを回収！\nどこからでも、誰とでも、気軽にボードゲームを楽しめるプラットフォームです。', 
    en: 'Space aliens called Lemo who love games are collecting Earth\'s board games!\nA platform where you can enjoy board games casually, anywhere, with anyone.', 
    de: 'Weltraum-Aliens namens Lemo, die Spiele lieben, sammeln die Brettspiele der Erde!\nEine Plattform, auf der Sie überall und mit jedem ungezwungen Brettspiele genießen können.' 
  },
  'lemo.feature1.title': { ja: 'リアルタイム対戦', en: 'Real-time Battles', de: 'Echtzeit-Kämpfe' },
  'lemo.feature1.desc': { ja: '4人まで参加OKのシンプルゲーム。初心者でもすぐに楽しめる設計。', en: 'Simple games for up to 4 players. Designed for beginners to enjoy immediately.', de: 'Einfache Spiele für bis zu 4 Spieler. Entwickelt, damit Anfänger sofort Spaß haben können.' },
  'lemo.feature2.title': { ja: 'マッチング機能', en: 'Matching System', de: 'Matching-System' },
  'lemo.feature2.desc': { ja: 'ランダム／フレンドルーム切替自由。気分に合わせて対戦相手を選択。', en: 'Switch freely between random/friend rooms. Choose opponents based on your mood.', de: 'Wechseln Sie frei zwischen zufälligen/Freundesräumen. Wählen Sie Gegner je nach Stimmung aus.' },
  'lemo.feature3.title': { ja: 'モバイル対応', en: 'Mobile Support', de: 'Mobile Unterstützung' },
  'lemo.feature3.desc': { ja: 'スマホアプリとして最適化されたUX。外出先でもサクサクプレイ。', en: 'UX optimized as a smartphone app. Play smoothly even on the go.', de: 'Als Smartphone-App optimierte UX. Spielen Sie auch unterwegs reibungslos.' },
  
  // Services Page
  'services.page.title': { ja: 'Services', en: 'Services', de: 'Services' },
  'services.page.subtitle': { 
    ja: 'ボードゲーム体験を拡張する2つのプラットフォーム', 
    en: 'Two Platforms Expanding Your Board Game Experience', 
    de: 'Zwei Plattformen, die Ihr Brettspielerlebnis erweitern' 
  },

  // CTA
  'cta.title': { ja: '今すぐ宇宙の冒険を始めよう', en: 'Start Your Space Adventure Now', de: 'Beginnen Sie jetzt Ihr Weltraum-Abenteuer' },
  'cta.subtitle': { 
    ja: 'RuletteとProject: LEMOで、あなたの遊びの世界を無限に広げましょう。', 
    en: 'Expand your world of play infinitely with Rulette and Project: LEMO.', 
    de: 'Erweitern Sie Ihre Spielwelt unendlich mit Rulette und Project: LEMO.' 
  },
  'cta.rulette': { ja: 'Ruletteを見る', en: 'Visit Rulette', de: 'Rulette besuchen' },
  'cta.lemo': { ja: 'Project: LEMOをプレイ（開発中）', en: 'Play Project: LEMO (In Development)', de: 'Project: LEMO spielen (In Entwicklung)' },
  
  // Contact（ホームページ）
  'contact.home.title': { ja: 'Contact', en: 'Contact', de: 'Kontakt' },
  'contact.home.subtitle': {
    ja: 'ゲーム×宇宙の新体験について、取材・提携・採用のご相談はお気軽にどうぞ。',
    en: 'For interviews, partnerships, and recruitment regarding new Game × Space experiences, please feel free to contact us.',
    de: 'Für Interviews, Partnerschaften und Personalfragen bezüglich neuer Spiel × Weltraum-Erfahrungen können Sie uns gerne kontaktieren.'
  },
  'contact.home.form.title': { ja: 'お問い合わせ', en: 'Contact Form', de: 'Kontaktformular' },
  'contact.home.form.button': { ja: 'Google Form', en: 'Google Form', de: 'Google Formular' },
  'contact.home.email.title': { ja: 'メール', en: 'Email', de: 'E-Mail' },
  'contact.home.discord.title': { ja: 'Discord開発コミュニティ', en: 'Discord Dev Community', de: 'Discord-Entwickler-Community' },
  'contact.home.discord.description': {
    ja: '開発プロセスを間近で見て、フィードバックを提供し、\n同じ志を持つ仲間と交流しませんか？',
    en: 'Watch the development process up close, provide feedback,\nand connect with like-minded people.',
    de: 'Beobachten Sie den Entwicklungsprozess aus nächster Nähe, geben Sie Feedback\nund vernetzen Sie sich mit Gleichgesinnten.'
  },
  'contact.home.discord.benefit1': { ja: '新機能の先行体験', en: 'Early access to new features', de: 'Früher Zugang zu neuen Funktionen' },
  'contact.home.discord.benefit2': { ja: '開発チームとの直接対話', en: 'Direct dialogue with dev team', de: 'Direkter Dialog mit dem Entwicklungsteam' },
  'contact.home.discord.benefit3': { ja: 'β版テストへの参加権', en: 'Beta testing participation', de: 'Teilnahme an Beta-Tests' },
  'contact.home.discord.join': { ja: '参加する', en: 'Join Now', de: 'Jetzt beitreten' },
  
  // Contact（専用ページ）
  'contact.title': { ja: 'Contact Us', en: 'Contact Us', de: 'Kontakt' },
  'contact.subtitle': { 
    ja: 'ゲーム×宇宙の新体験について、お気軽にご相談ください', 
    en: 'Feel free to contact us about new Game × Space experiences', 
    de: 'Kontaktieren Sie uns gerne bezüglich neuer Spiel × Weltraum-Erfahrungen' 
  },
  'contact.form.title': { ja: 'お問い合わせ', en: 'Contact Form', de: 'Kontaktformular' },
  'contact.form.description': { 
    ja: '取材・提携・採用などのご相談は\nGoogle Formからお気軽にお問い合わせください', 
    en: 'For interviews, partnerships, recruitment, etc.\nPlease feel free to contact us via Google Form', 
    de: 'Für Interviews, Partnerschaften, Personalfragen usw.\nKontaktieren Sie uns gerne über das Google Formular' 
  },
  'contact.form.button': { ja: 'お問い合わせフォーム', en: 'Contact Form', de: 'Kontaktformular' },
  'contact.email.title': { ja: '直接メール', en: 'Direct Email', de: 'Direkte E-Mail' },
  'contact.email': { ja: 'メール', en: 'Email', de: 'E-Mail' },
  'contact.sns.rulette': { ja: 'Rulette SNS', en: 'Rulette SNS', de: 'Rulette SNS' },
  'contact.sns.lemo': { ja: 'Project: LEMO SNS', en: 'Project: LEMO SNS', de: 'Project: LEMO SNS' },
  'contact.discord.title': { ja: 'Discord開発コミュニティ', en: 'Discord Dev Community', de: 'Discord-Entwickler-Community' },
  'contact.discord.description': { 
    ja: '開発プロセスを間近で見て、フィードバックを提供し、\n同じ志を持つ仲間と交流しませんか？', 
    en: 'Watch the development process up close, provide feedback,\nand connect with like-minded people.', 
    de: 'Beobachten Sie den Entwicklungsprozess aus nächster Nähe, geben Sie Feedback\nund vernetzen Sie sich mit Gleichgesinnten.' 
  },
  'contact.discord.benefit1': { ja: '新機能の先行体験', en: 'Early access to new features', de: 'Früher Zugang zu neuen Funktionen' },
  'contact.discord.benefit2': { ja: '開発チームとの直接対話', en: 'Direct dialogue with dev team', de: 'Direkter Dialog mit dem Entwicklungsteam' },
  'contact.discord.benefit3': { ja: 'β版テストへの参加権', en: 'Beta testing participation', de: 'Teilnahme an Beta-Tests' },
  'contact.discord.join': { ja: '参加する', en: 'Join Now', de: 'Jetzt beitreten' },
  
  // SNS説明文 
  'sns.rulette.x.desc': { ja: 'ボードゲーム情報発信', en: 'Board game information', de: 'Brettspiel-Informationen' },
  'sns.rulette.instagram.desc': { ja: 'ゲーム写真・動画', en: 'Game photos & videos', de: 'Spielfotos & Videos' },
  'sns.rulette.note.desc': { ja: 'ボードゲームレビュー', en: 'Board game reviews', de: 'Brettspiel-Bewertungen' },
  'sns.lemo.x.desc': { ja: '開発進捗・リリース情報', en: 'Development updates & releases', de: 'Entwicklungs-Updates & Releases' },
  'sns.lemo.instagram.desc': { ja: 'ゲームプレイ動画', en: 'Gameplay videos', de: 'Gameplay-Videos' },
  'sns.lemo.note.desc': { ja: '技術記事・開発ブログ', en: 'Technical articles & dev blog', de: 'Technische Artikel & Entwicklungs-Blog' },
  
  // Footer
  'footer.description': { ja: 'ボードゲームのクリエイティブスタジオ', en: 'Board Game Creative Studio', de: 'Brettspiel-Kreativstudio' },
  'footer.services': { ja: 'サービス', en: 'Services', de: 'Services' },
  'footer.company': { ja: '会社情報', en: 'Company', de: 'Unternehmen' },
  'footer.support': { ja: 'サポート', en: 'Support', de: 'Support' },
  'footer.privacy': { ja: 'プライバシーポリシー', en: 'Privacy Policy', de: 'Datenschutzrichtlinie' },
  'footer.terms': { ja: '利用規約', en: 'Terms of Service', de: 'Nutzungsbedingungen' },
  'footer.copyright': { ja: '© 2025 Spacian. All rights reserved.', en: '© 2025 Spacian. All rights reserved.', de: '© 2025 Spacian. Alle Rechte vorbehalten.' },
  
  // 共通
  'common.developing': { ja: '開発中', en: 'In Development', de: 'In Entwicklung' },
  'common.beta': { ja: 'β版', en: 'Beta', de: 'Beta' },
  'common.comingSoon': { ja: '近日公開', en: 'Coming Soon', de: 'Demnächst verfügbar' },
  
  // Discord Floating Button
  'discord.tooltip': { ja: 'Discord開発コミュニティ', en: 'Discord Dev Community', de: 'Discord-Entwickler-Community' },
  'discord.title': { ja: 'Discord開発コミュニティ', en: 'Discord Dev Community', de: 'Discord-Entwickler-Community' },
  'discord.description': { 
    ja: '開発プロセスを間近で見て、フィードバックを提供し、\n同じ志を持つ仲間と交流しませんか？', 
    en: 'Watch the development process up close, provide feedback,\nand connect with like-minded people.', 
    de: 'Beobachten Sie den Entwicklungsprozess aus nächster Nähe, geben Sie Feedback\nund vernetzen Sie sich mit Gleichgesinnten.' 
  },
  'discord.benefit1': { ja: '新機能の先行体験', en: 'Early access to new features', de: 'Früher Zugang zu neuen Funktionen' },
  'discord.benefit2': { ja: '開発チームとの直接対話', en: 'Direct dialogue with dev team', de: 'Direkter Dialog mit dem Entwicklungsteam' },
  'discord.benefit3': { ja: 'β版テストへの参加権', en: 'Beta testing participation', de: 'Teilnahme an Beta-Tests' },
  'discord.join': { ja: '参加する', en: 'Join Now', de: 'Jetzt beitreten' },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ja')

  // ローカルストレージから言語設定を読み込み
  useEffect(() => {
    const savedLanguage = localStorage.getItem('spacian-language') as Language
    if (savedLanguage && (savedLanguage === 'ja' || savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // 言語変更時にローカルストレージに保存
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('spacian-language', lang)
    // HTMLのlang属性も更新
    document.documentElement.lang = lang
  }

  // 翻訳関数
  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translation[language] || translation.ja || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}