# Google Form設定手順

## 📝 Google Formの作成と設定

### 1. Google Formの作成
1. [Google Forms](https://forms.google.com/) にアクセス
2. 「空白のフォーム」を作成
3. フォーム名を設定（例：「Spacian お問い合わせフォーム」）

### 2. フォーム項目の設定
以下の項目を追加してください：

#### 必須項目
- **お問い合わせ種別** (選択式)
  - 取材・提携について
  - 採用について
  - 開発協力について
  - コミュニティ参加について
  - バグ報告
  - 機能要望
  - その他

- **お名前** (記述式・短答式)
- **メールアドレス** (記述式・短答式、メール形式で検証)
- **件名** (記述式・短答式)
- **お問い合わせ内容** (記述式・長答式)

#### 任意項目
- **会社名・団体名** (記述式・短答式)
- **電話番号** (記述式・短答式)

### 3. フォームの設定
1. 設定ボタン（歯車アイコン）をクリック
2. 「回答を1回に制限する」をオフに設定
3. 「回答のコピーを回答者に送信」を有効化（任意）
4. 「メール通知を受け取る」を有効化して ajia.watabe@gmail.com に設定

### 4. フォームURLの取得
1. 「送信」ボタンをクリック
2. リンクアイコンを選択
3. 「短縮URL」をチェック
4. URLをコピー

### 5. サイトへの適用
以下のファイルの `href="#"` 部分を実際のGoogle FormのURLに置き換えてください：

#### `/src/app/contact/page.tsx`
```typescript
// 行38-46付近
<a
  href="YOUR_GOOGLE_FORM_URL_HERE"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 space-button text-lg font-semibold"
>
```

#### `/src/components/Contact.tsx` 
```typescript
// 行83-90付近
<a
  href="YOUR_GOOGLE_FORM_URL_HERE"
  target="_blank"
  rel="noopener noreferrer"
  className="space-button text-lg font-semibold"
>
```

## 📋 実装内容

### 変更されたファイル
- `/src/app/contact/page.tsx` - フォームをGoogle Formボタンに置き換え
- `/src/components/Contact.tsx` - ホーム画面のContactセクション更新

### SNSセクションの更新
- **Rulette SNS**: 黄色テーマでボードゲーム関連
- **Project: LEMO SNS**: シアンテーマでゲーム開発関連
- **Discord**: 共通の開発コミュニティ

### 削除されたファイル/機能
- ❌ `/src/app/api/contact/route.ts` - API Route
- ❌ `.env.local` - 環境変数ファイル
- ❌ `MAIL_SETUP.md` - メール設定ドキュメント
- ❌ `nodemailer` と `@types/nodemailer` - パッケージ

## ✅ メリット
- **セキュリティ**: Google側でスパム対策・セキュリティ管理
- **管理**: Google Spreadsheetで回答を自動管理
- **通知**: メール通知機能
- **カスタマイズ**: テーマやロゴの設定可能
- **運用**: サーバー管理不要、完全にクライアントサイド

## 🚀 デプロイ
- Vercelに環境変数設定不要
- Google FormのURLを設定するだけで完成
- 静的サイトとして完全に動作