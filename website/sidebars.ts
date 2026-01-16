import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Function to generate file IDs with configurable folder and prefix
function generateStudyIds(folder: string, prefix: string, start: number, end: number): string[] {
  const ids: string[] = [];
  for (let i = start; i <= end; i++) {
    const idStr = i.toString().padStart(3, '0');
    ids.push(`${folder}/${prefix}_study_${idStr}`);
  }
  return ids;
}

const reactModules = [
  { title: "Module 1: 準備とTypeScriptの「考え方」", start: 1, end: 10 },
  { title: "Module 2: JSXと「型」のキホン", start: 11, end: 20 },
  { title: "Module 3: Props（型付きデータの受け渡し）", start: 21, end: 30 },
  { title: "Module 4: useStateとイベントの「型」", start: 31, end: 40 },
  { title: "Module 5: UIの動的構築（型と一緒に）", start: 41, end: 50 },
  { title: "Module 6: スタイリング", start: 51, end: 55 },
  { title: "Module 7: useEffect（「表示」以外のウラ仕事）", start: 56, end: 65 },
  { title: "Module 8: useReducer（型でガチガチに管理）", start: 66, end: 70 },
  { title: "Module 9: useContext（型付きの「みんなのデータ」）", start: 71, end: 80 },
  { title: "Module 10: 動きをサクサクにする", start: 81, end: 90 },
  { title: "Module 11: useRef 集中講座", start: 91, end: 100 },
  { title: "Module 12: 知ってると便利なフックたち", start: 101, end: 110 },
  { title: "Module 13: v19データ取得 use & Suspense", start: 111, end: 120 },
  { title: "Module 14: v19フォーム革命 Actions", start: 121, end: 130 },
  { title: "Module 15: カスタムフック（オリジナルのフック）", start: 131, end: 140 },
  { title: "Module 16: ルーティングとプロジェクト構成", start: 141, end: 150 },
  { title: "Module 17: テストと公開", start: 151, end: 160 },
  { title: "Module 18: 非同期データの最強管理術 (TanStack Query)", start: 161, end: 170 },
  { title: "Module 19: グローバルステート管理の決定版 (Zustand)", start: 171, end: 180 },
  { title: "Module 20: フォームバリデーションの鉄板 (RHF & Zod)", start: 181, end: 190 },
  { title: "Module 21: ユーザー認証と「自分だけのアプリ」", start: 191, end: 200 },
  { title: "Module 22: アニメーションで「プロ感」を出す", start: 201, end: 210 },
  { title: "Module 23: UIライブラリで「車輪の再発明」を防ぐ", start: 211, end: 220 },
  { title: "Module 24: AI統合とストリーミング (Vercel AI SDK)", start: 221, end: 230 },
  { title: "Module 25: 信頼性を高めるE2Eテスト (Playwright)", start: 231, end: 240 },
  { title: "Module 26: アトミックな状態管理 (Jotai)", start: 241, end: 250 },
  { title: "Module 27: 次世代バリデーション (Valibot)", start: 251, end: 260 },
  { title: "Module 28: 次世代ビルドツール (Biome)", start: 261, end: 270 },
  { title: "Module 29: React Email メール実装革命", start: 271, end: 280 },
  { title: "Module 30: フルスタック・エッジ開発 (Hono & Cloudflare)", start: 281, end: 290 },
];

const nextModules = [
  { title: "Module 1: Next.jsってなに？全体像をつかむ", start: 1, end: 10 },
  { title: "Module 2: プロジェクト作成と初期設定", start: 11, end: 22 },
  { title: "Module 3: App Router 基本", start: 23, end: 36 },
  { title: "Module 4: コンポーネント設計", start: 37, end: 48 },
  { title: "Module 5: スタイリング", start: 49, end: 60 },
  { title: "Module 6: ルーティング応用", start: 61, end: 74 },
  { title: "Module 7: データ取得（基本）とキャッシュ感覚", start: 75, end: 90 },
  { title: "Module 8: Suspense / Streaming / エラー設計", start: 91, end: 104 },
  { title: "Module 9: Route Handlers（API）入門", start: 105, end: 118 },
  { title: "Module 10: MiddlewareとEdgeの考え方", start: 119, end: 132 },
  { title: "Module 11: Server Actions & フォーム革命", start: 133, end: 150 },
  { title: "Module 12: セキュリティ基本（XSS/CSRF/依存更新）", start: 151, end: 160 },
  { title: "Module 13: DBとCRUD（Prisma想定）", start: 161, end: 174 },
  { title: "Module 14: 認証（Auth.js/NextAuth系の考え方）", start: 175, end: 188 },
  { title: "Module 15: 画像・フォント・SEO", start: 189, end: 202 },
  { title: "Module 16: テスト（Vitest / RTL / E2E）", start: 203, end: 218 },
  { title: "Module 17: デプロイ & 運用（Vercel中心）", start: 219, end: 232 },
  { title: "Module 18: 卒業制作（企画→実装→公開）", start: 233, end: 244 },
  { title: "Module 19: 運用保守・エコシステム", start: 245, end: 254 },
  { title: "Module 20: App Router時代の状態管理（Server連携特化）", start: 255, end: 264 },
  { title: "Module 21: 次世代スタイリング（Panda CSS）", start: 265, end: 274 },
  { title: "Module 22: 次世代バリデーション（Valibot）", start: 275, end: 284 },
];

const dddModules = [
  { title: "第1部：【そもそも設計とは何か？】なぜコードを書く前に考えるのか", start: 1, end: 10 },
  { title: "第2部：【DDDの大きな枠組み】万能ではない「道具」の使い所", start: 11, end: 20 },
  { title: "第3部：【戦略的設計】AIに「このアプリの正解」を教える", start: 21, end: 35 },
  { title: "第4部：【設計の基礎力：戦術】AIを暴走させない「型」の作り方", start: 36, end: 55 },
  { title: "第5部：【アーキテクチャ】1人のスピードを最大化する構造", start: 56, end: 75 },
  { title: "第6部：【DDD以外の選択肢と割り切り】現実的な設計者へ", start: 76, end: 90 },
  { title: "第7部：【継続と成長】AI時代に生き残る設計者になる", start: 91, end: 100 },
];

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  reactStudySidebar: [
    {
      type: 'doc',
      id: 'react-study/react_index',
    },
    ...reactModules.map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('react-study', 'react', mod.start, mod.end),
    })),
  ],
  nextStudySidebar: [
    {
      type: 'doc',
      id: 'next-study/next_index',
    },
    ...nextModules.map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('next-study', 'next', mod.start, mod.end),
    })),
  ],
  dddCsSidebar: [
    {
      type: 'doc',
      id: 'ddd_cs/ddd_cs_index',
    },
    ...dddModules.map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('ddd_cs', 'ddd_cs', mod.start, mod.end),
    })),
  ],
  adrCsSidebar: [
    {
      type: 'doc',
      id: 'adr_cs/adr_cs_index',
    },
    ...[
      { title: "第1章：ADRってなに？未来の自分を助ける「設計メモ」じゃないよ😊📌", start: 1, end: 1 },
      { title: "第2章：ADRの基本テンプレを覚えよう（型があると最強）🧩📄", start: 2, end: 2 },
      { title: "第3章：いつADRを書く？「書きどき判定」スキル🔍✅", start: 3, end: 3 },
      { title: "第4章：設計判断の作り方（比較軸と選択肢を作る）🎛️🧠", start: 4, end: 4 },
      { title: "第5章：ADRの書き方① Context（背景）が弱いと読まれない🥺➡️😊", start: 5, end: 5 },
      { title: "第6章：ADRの書き方② Decision＆Consequences（結論と言い切り＋トレードオフ）⚖️✨", start: 6, end: 6 },
      { title: "第7章：リポジトリにADRを置く（迷子にならない仕組み）📁🧭", start: 7, end: 7 },
      { title: "第8章：開発フローに組み込む（PRとレビューで“後回し”を防ぐ）🔁✅", start: 8, end: 8 },
      { title: "第9章：ADRを腐らせない（Supersededと棚卸し）🌿🛠️", start: 9, end: 9 },
      { title: "第10章：ミニプロジェクト① 題材選び＆スコープ決め（1本に絞る！）🎯🍀", start: 10, end: 10 },
      { title: "第11章：ミニプロジェクト② ADRを書いてPRに乗せる（実戦！）🧑‍💻📦", start: 11, end: 11 },
      { title: "第12章：ミニプロジェクト③ レビュー反映＆“自分の型”を作って卒業🎓🌸", start: 12, end: 12 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('adr_cs', 'adr_cs', mod.start, mod.end),
    })),
  ],
  adrTsSidebar: [
    {
      type: 'doc',
      id: 'adr_ts/adr_ts_index',
    },
    ...[
      { title: "第1章：ADRってなに？「設計の理由」を未来に残すノート📒🌸", start: 1, end: 1 },
      { title: "第2章：ADRの基本テンプレ（型）を手に入れよう🧩📝", start: 2, end: 2 },
      { title: "第3章：いつADRを書く？“書きどき判定”ルール🎯✅", start: 3, end: 3 },
      { title: "第4章：TypeScript向け「判断の作り方」— 比較軸と選択肢の出し方⚖️✨", start: 4, end: 4 },
      { title: "第5章：書き方① Context（背景）を短く強く！📌🗺️", start: 5, end: 5 },
      { title: "第6章：書き方② Decision（結論）は“一文で言い切る”✨🧠", start: 6, end: 6 },
      { title: "第7章：書き方③ Consequences（結果）— “痛み”もちゃんと書く💦💎", start: 7, end: 7 },
      { title: "第8章：置き場所と管理（VS Codeで迷子にならないADR運用）📁🧭", start: 8, end: 8 },
      { title: "第9章：開発フローに組み込む（PRとレビューで文化にする）🔁✅", start: 9, end: 9 },
      { title: "第10章：最終課題① テーマ決め＆比較表づくり（1テーマに絞る！）🎯🍀", start: 10, end: 10 },
      { title: "第11章：最終課題② ADRを書いて、実装に反映する📝🧑‍💻", start: 11, end: 11 },
      { title: "第12章：最終課題③ レビュー反映＆置き換え体験（Superseded）で卒業🎓🌸", start: 12, end: 12 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('adr_ts', 'adr_ts', mod.start, mod.end),
    })),
  ],
};

export default sidebars;
