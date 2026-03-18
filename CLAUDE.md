# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # 開発サーバー起動 (Vite)
npm run build     # TypeScript型チェック + Viteビルド (tsc -b && vite build)
npm run lint      # ESLint実行
npm run preview   # ビルド済みファイルのプレビュー
```

テストは未導入。新規追加時は Jest + React Testing Library を使用する。

## Architecture

グループホーム「コスモスの里」の情報サイト。React 19 + TypeScript + Vite 8 のSPA。
ルーティングなし。1ページのスクロール型サイトで、セクションIDへのスムーススクロールでナビゲーションする。

### データフロー

`src/data/siteData.ts` にすべてのコンテンツデータを集約。型定義は `src/types/index.ts`。
コンポーネントはデータファイルからインポートして表示する。状態管理はローカルの useState のみ。

### コンポーネント構成

- `src/components/layout/` — Header, Footer（サイト共通）
- `src/components/sections/` — 各セクション（Hero, Features, DailySchedule, Flow, Company, Contact）
- `src/components/ui/` — 再利用可能なUI部品（Button, SectionTitle）
- `src/hooks/` — カスタムフック（useScrollAnimation: Intersection Observer によるスクロールアニメーション）

## Conventions

- **CSS**: CSS Modules。各コンポーネントに `.module.css` を対にする。Tailwind不使用
- **CSS変数**: `src/index.css` でカラー・フォント・spacing等を定義（`--color-primary`, `--color-cream` 等）
- **レスポンシブ**: 768px をブレークポイントとしたモバイル対応（`@media (max-width: 768px)`）
- **アイコン**: Material Symbols Outlined（Google Fonts経由、`<span class="material-symbols-outlined">`）
- **フォント**: Noto Sans JP / Noto Serif JP（Google Fonts）
- **アクセシビリティ**: セマンティックHTML、ARIA属性、キーボード操作対応、prefers-reduced-motion対応
- **アニメーション**: `index.css` に定義されたスクロールトリガーのfade-in/slide-inアニメーション。`is-visible` クラスと `stagger-N` クラスで制御
