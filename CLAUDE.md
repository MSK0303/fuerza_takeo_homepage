# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code（claude.ai/code）向けのガイダンスを提供します。

## 言語設定

**重要: このリポジトリで作業する際は、必ず日本語で回答してください。**

## プロジェクト概要

FC フェルサ武雄（FC Fuerza Takeo）の公式ホームページ
- React 18 + TypeScript で構築
- Create React App をベースとした構成
- Material-UI (MUI) を使用したコンポーネント設計
- GitHub Pages でホスティング（fuerza-takeo.com）

## 開発コマンド

### 基本コマンド
```bash
npm start          # 開発サーバー起動 (localhost:3000)
npm run build      # 本番用ビルド
npm test           # テスト実行
npm run deploy     # GitHub Pages へデプロイ
```

### デプロイメント
- `npm run predeploy` でビルド後、`npm run deploy` で gh-pages へデプロイ
- CNAME ファイルで fuerza-takeo.com ドメインを設定済み

## アーキテクチャ

### ディレクトリ構成
```
src/
├── theme/                 # デザインシステム
│   └── theme.ts          # Material-UI テーマ設定
├── RouteManager/          # ルーティング管理
├── components/            # 再利用可能コンポーネント
│   ├── common/           # 共通スタイルコンポーネント
│   │   └── StyledComponents.tsx
│   ├── layout/           # ページレイアウト
│   ├── header/           # モダンなヘッダー (固定ナビゲーション)
│   ├── footer/           # 情報豊富なフッター
│   ├── hero/             # ヒーローセクション
│   ├── sections/         # ページセクション (Info, CTA)
│   └── slideshow/        # モダンなスライドショー
├── pages/                # ページコンポーネント
│   ├── home.tsx          # ホームページ (ヒーロー、スライド、情報、CTA)
│   ├── club.tsx          # クラブ紹介 (特徴、詳細情報、料金表)
│   ├── experience.tsx    # 体験申し込み (フォーム、完了画面)
│   ├── contact.tsx       # お問い合わせ (フォーム、完了画面)
│   └── notfound.tsx      # 404エラー
└── assets/images/        # 画像リソース
```

### 技術スタック
- **フロントエンド**: React 18 + TypeScript
- **ルーティング**: React Router DOM v6
- **UI ライブラリ**: Material-UI v5 (@mui/material)
- **デザインシステム**: カスタムテーマ + Styled Components
- **スライダー**: カスタム実装 (旧 Swiper から移行)
- **メール送信**: EmailJS
- **SEO**: react-helmet-async
- **フォント**: Noto Sans JP (Google Fonts)

### ルーティング構成
```typescript
'/'           => Home (ホームページ)
'/club'       => Club (クラブ紹介)
'/experience' => Experience (体験入団)
'/contact'    => Contact (お問い合わせ)
'*'           => NotFound (404エラー)
```

### デザインシステム
- **カラーパレット**: 
  - Primary: 深い緑 (#2E7D32)
  - Secondary: アクセント黄色 (#FFC107)
  - Background: 軽いグレー (#FAFAFA)
- **タイポグラフィ**: Noto Sans JP + レスポンシブフォントサイズ
- **コンポーネント**: 再利用可能なStyledComponents使用
- **アニメーション**: CSS transitions + keyframes

### レイアウト設計
- **固定ヘッダー**: スクロール時非表示、アクティブページ表示
- **レスポンシブデザイン**: モバイルファースト
- **情報豊富なフッター**: サイトマップ、連絡先、練習情報
- **統一されたレイアウト**: 全ページで Layout コンポーネント使用

### ページ構成
- **ホーム**: ヒーロー → スライド → 情報 → CTA
- **クラブ紹介**: ヒーロー → 特徴カード → 詳細情報
- **体験申し込み**: ヒーロー → フォーム → 完了画面
- **お問い合わせ**: ヒーロー → フォーム → 完了画面

### 画像管理
- `/src/assets/images/` にスライドショー用画像を配置
- `/public/` にfavicon用ロゴを配置
- スライドショー画像: slide1.jpg ～ slide5.jpg

## 開発上の注意点

### デザインシステム活用
- `/src/theme/theme.ts` でグローバルテーマ設定
- `/src/components/common/StyledComponents.tsx` で共通コンポーネント
- 統一されたカラーパレットとタイポグラフィ使用

### レスポンシブ対応
- Material-UI のブレークポイント活用
- clamp() 使用でフルードタイポグラフィ
- モバイル・タブレット・デスクトップ対応

### アクセシビリティ
- セマンティックHTML使用
- ARIA属性適切に設定
- キーボードナビゲーション対応

### パフォーマンス
- 画像最適化
- CSSアニメーション（GPUアクセラレーション）
- レンダリング最適化