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
  discord: '#', // 今後設定予定
  googleForm: '#' // Google Form URL（今後設定予定）
} as const

export type SocialPlatform = 'x' | 'instagram' | 'note' | 'website'
export type Project = 'rulette' | 'lemo'