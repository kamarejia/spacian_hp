// SNSリンクの一元管理
export const socialLinks = {
  rulette: {
    x: 'https://x.com/rulettebg',
    instagram: 'https://www.instagram.com/rulette_bg',
    note: 'https://note.com/rulette',
    website: 'https://www.rulette.games/'
  },
  lemo: {
    x: 'https://x.com/projectlemo',
    instagram: 'https://www.instagram.com/projectlemo',
    note: 'https://note.com/project_lemo',
    website: '#', // 開発中
    discord: '#' // Discord開発コミュニティ（今後設定予定）
  },
  discord: 'https://discord.gg/gMjGnFsAY6',
  googleForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc6S8Ptem82a6vHuNnVp0EyS0fH-I0aMaOoq4EzjZX_Vlsg4w/viewform?usp=dialog'
} as const

export type SocialPlatform = 'x' | 'instagram' | 'note' | 'website'
export type Project = 'rulette' | 'lemo'