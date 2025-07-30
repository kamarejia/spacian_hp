# Spacian HP - Next.js Version

宇宙をテーマにしたゲーム開発会社SpacianのコーポレートサイトをNext.jsで構築しました。

## 🚀 技術スタック

- **Next.js 15.1.4** (App Router)
- **TypeScript** 
- **Tailwind CSS**
- **React Icons**
- **Google Fonts** (Orbitron, Exo 2)

## 🌍 多言語対応

- **日本語 (ja)**: デフォルト言語
- **英語 (en)**: English support
- **ドイツ語 (de)**: Deutsche Unterstützung

React Context APIを使用した動的言語切り替え機能を実装。ユーザーの言語選択はローカルストレージに保存されます。

## 📁 プロジェクト構造

```
spacian_hp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # ホームページ
│   │   ├── globals.css         # グローバルスタイル
│   │   ├── about/
│   │   │   └── page.tsx        # About ページ
│   │   ├── services/
│   │   │   └── page.tsx        # Services ページ
│   │   ├── news/
│   │   │   └── page.tsx        # News ページ
│   │   └── contact/
│   │       └── page.tsx        # Contact ページ
│   ├── components/
│   │   ├── Navbar.tsx          # ナビゲーション（多言語対応）
│   │   ├── Footer.tsx          # フッター
│   │   ├── SpaceBackground.tsx # 宇宙背景アニメーション
│   │   ├── Hero.tsx            # ヒーローセクション（多言語対応）
│   │   ├── About.tsx           # About セクション（多言語対応）
│   │   ├── Services.tsx        # Services セクション（多言語対応）
│   │   ├── News.tsx            # News セクション（多言語対応）
│   │   ├── Contact.tsx         # Contact セクション（多言語対応）
│   │   ├── OrbitAnimation.tsx  # 軌道アニメーション
│   │   └── SpaceDiagram.tsx    # 宇宙図表
│   ├── contexts/
│   │   └── LanguageContext.tsx # 多言語対応Context
│   └── lib/
│       └── social-links.ts     # SNSリンク管理
├── public/
│   └── images/
│       ├── logos/              # ロゴファイル
│       ├── hero/               # ヒーロー画像
│       ├── services/           # サービス関連画像
│       ├── social/             # SNSアイコン
│       ├── team/               # チーム画像
│       └── icons/              # 汎用アイコン
├── tailwind.config.js          # Tailwind設定
├── next.config.js              # Next.js設定
└── package.json               # 依存関係
```

## 🎨 デザイン特徴

### カラーパレット
- **メイン**: #ff59e6 (Space Pink)
- **アクセント**: #ff3d8a (Space Pink Dark)
- **Discord**: #5865f2 (Space Blue)
- **背景**: 真っ黒 (#000000)

### アニメーション
- 星空の動的背景
- 惑星軌道の回転アニメーション
- ホバーエフェクト
- グロー効果

### フォント
- **見出し**: Orbitron (宇宙的)
- **本文**: Exo 2 (モダン)

## 🖼️ 画像構成

### `/public/images/` 構造
```
images/
├── logos/
│   ├── spacian-logo.svg       # メインロゴ
│   └── spacian-icon.svg       # アイコンのみ
├── social/
│   ├── twitter-x.svg          # X/Twitter
│   ├── discord.svg            # Discord
│   ├── note.svg               # Note
│   └── instagram.svg          # Instagram
├── hero/                      # ヒーロー背景画像
├── services/                  # サービス関連画像
├── team/                      # チームメンバー画像
└── icons/                     # ファビコンなど
```

## 🌟 主要機能

### 1. レスポンシブ対応
- モバイル、タブレット、デスクトップ全対応
- ハンバーガーメニュー
- フレキシブルグリッドレイアウト

### 2. インタラクティブ要素
- スムーススクロール
- ホバーアニメーション
- 動的フィルタリング（ニュースページ）
- フォームバリデーション

### 3. SEO対応
- 適切なメタタグ
- セマンティックHTML
- 構造化データ対応準備

### 4. パフォーマンス
- Next.js Image最適化
- コード分割
- 静的生成対応

## 🚀 開発・デプロイ

### 開発環境起動
```bash
npm run dev
```

### 本番ビルド
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🌐 Vercel デプロイ

### 自動デプロイ（推奨）
1. GitHubリポジトリをVercelプロジェクトに接続
2. `main`ブランチへのプッシュで自動デプロイが実行
3. プレビューデプロイもPull Requestで自動生成

### 手動デプロイ
```bash
# Vercel CLIをインストール
npm i -g vercel

# 初回デプロイ（設定）
vercel

# 本番デプロイ
vercel --prod
```

### 環境変数設定
Vercelダッシュボードで設定：
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=Spacian
```

### デプロイ最適化設定
- `vercel.json`: Vercel固有の設定
- `next.config.js`: パフォーマンス最適化済み
- 静的生成とサーバーサイドレンダリングの適切な分離

## 📱 SNS・コミュニティ

- **X (Twitter)**: @SpacianOfficial
- **Note**: spacian公式
- **Instagram**: @spacian_official  
- **Discord**: 開発コミュニティあり（特別にプロモート）

## 🎮 サービス

### Rulette
ボードゲーム紹介メディア＆コミュニティプラットフォーム

### Project: LEMO
Webベースのマルチプレイヤーデジタルボードゲームプラットフォーム

## 📞 お問い合わせ

- **メール**: hello@spacian.example.com
- **お問い合わせフォーム**: 詳細な項目で構成

---

**🌌 宇宙の果てまで、無限の"遊び"をあなたに。**