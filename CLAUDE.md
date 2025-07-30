# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

このプロジェクトは宇宙をテーマにしたゲーム開発会社Spacianのコーポレートサイトで、Next.js 15.1.4のApp RouterとTypeScript、Tailwind CSSを使用して構築されています。

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# ESLintチェック
npm run lint
```

## アーキテクチャ構成

### ディレクトリ構造
- `src/app/` - Next.js App Routerのページ定義（各ページにpage.tsxを配置）
- `src/components/` - 再利用可能なReactコンポーネント
- `public/images/` - 画像リソース（logos, hero, services, social, team, iconsフォルダに分類）

### 主要な技術仕様

**フレームワーク・ライブラリ:**
- Next.js 15.1.4 (App Router使用)
- React 18.3.1
- TypeScript 5
- Tailwind CSS 3.4.1

**フォント:**
- Orbitron（見出し・ロゴ用、宇宙的なフォント）
- Exo 2（本文用、モダンなフォント）

**カラーパレット:**
- `space-pink`: #ff59e6（メインカラー）
- `space-pink-dark`: #ff3d8a（アクセント）  
- `space-blue`: #5865f2（Discord色）
- `space-blue-light`: #7289da（ライトブルー）
- 背景: 黒（#000000）

### 重要なコンポーネント設計

**レイアウト構造:**
- `layout.tsx`: Google Fontsの読み込み、SpaceBackground、Navbar、Footerの配置
- `SpaceBackground.tsx`: 星空の動的背景アニメーション
- `Navbar.tsx`: レスポンシブナビゲーション（スクロール時の背景変化、モバイルメニュー）

**アニメーション:**
- 軌道回転アニメーション（rotate, counter-rotate）
- 星の流れるアニメーション（stars）
- 点滅エフェクト（twinkle）

### カスタムCSS設定

Tailwind configでカスタムアニメーション、カラー、フォントファミリーを定義。宇宙をテーマとした視覚効果（グロー、グラデーション）を多用。

### 開発時の注意点

- 日本語コンテンツ中心のサイト（lang="ja"設定）
- メタデータはSEO最適化済み
- 画像は Next.js の Image コンポーネントを使用して最適化
- レスポンシブデザイン対応（モバイルファースト）
- スムーススクロールとホバーエフェクトを重視した UX