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


  dryCsSidebar: [
    {
      type: 'doc',
      id: 'dry_cs/dry_cs_index',
    },
    ...[
      { title: "1章：DRYってなに？「コピペがダメ」だけじゃないよ 😺🧻", start: 1, end: 1 },
      { title: "2章：重複の種類を見分けよう 👀🔍（コピペ／条件分岐／データ／例外処理）", start: 2, end: 2 },
      { title: "3章：いちばん効く！「メソッド抽出」でDRYは8割いける ✂️🧩", start: 3, end: 3 },
      { title: "4章：値を散らさない！定数・設定・ルールの「置き場所」問題 🗃️📌", start: 4, end: 4 },
      { title: "5章：条件分岐のDRY（同じifが増える地獄を止める）🌪️➡️🌿", start: 5, end: 5 },
      { title: "6章：型でDRY（住所・金額・期間を「値オブジェクトっぽく」する）🧱💎", start: 6, end: 6 },
      { title: "7章：重複を“検知して戻す”仕組み（テスト＋AI＋IDE）🧪🤖🛠️", start: 7, end: 7 },
      { title: "第8章：DRYの落とし穴（やりすぎ注意！）🐙⚠️", start: 8, end: 8 },
      { title: "第9章：まとめプロジェクト（DRY改善を1周やる）🎯🛠️✨", start: 9, end: 9 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('dry_cs', 'dry_cs', mod.start, mod.end),
    })),
  ],
  dryTsSidebar: [
    {
      type: 'doc',
      id: 'dry_ts/dry_ts_index',
    },
    ...[
      { title: "第1章：DRYってなに？「コピペ禁止」より大事な話🧻✨", start: 1, end: 1 },
      { title: "第2章：重複の種類を見分けよう👀🔍（コード／ルール／データ／例外）", start: 2, end: 2 },
      { title: "第3章：まずは最強の基本技！関数抽出＆引数化✂️🧩", start: 3, end: 3 },
      { title: "第4章：魔法の文字列を卒業！定数・辞書・ユニオン型でDRY🏷️✨", start: 4, end: 4 },
      { title: "第5章：TypeScriptならでは！型でDRY（形の重複を減らす）🧠🧱", start: 5, end: 5 },
      { title: "第6章：条件分岐のDRY（同じifが増える地獄を止める）🌪️➡️🌿", start: 6, end: 6 },
      { title: "第7章：エラー処理のDRY（try/catchコピペ地獄から脱出）🚨🧯", start: 7, end: 7 },
      { title: "第8章：DRYの落とし穴（やりすぎ注意！）🐙⚠️", start: 8, end: 8 },
      { title: "第9章：まとめプロジェクト（DRY改善を1周する）🎯🛠️🎉", start: 9, end: 9 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('dry_ts', 'dry_ts', mod.start, mod.end),
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
  yagniCsSidebar: [
    {
      type: 'doc',
      id: 'yagni_cs/yagni_cs_index',
    },
    ...[
      { title: "第1章：YAGNIってなに？「作らない勇気」の入門 🌱🙂", start: 1, end: 1 },
      { title: "第2章：作り込みすぎのサインを見抜く 👀🚨", start: 2, end: 2 },
      { title: "第3章：「今必要」を決める技術（スコープの切り方）✂️🗺️", start: 3, end: 3 },
      { title: "第4章：YAGNIを支える実装スタイル（小さく作って育てる）🧱🌿", start: 4, end: 4 },
      { title: "第5章：C#でやりがちな“未来用設計”を安全に先送りする 🧯🧠", start: 5, end: 5 },
      { title: "第6章：YAGNIで進める開発フロー（基本）🚶‍♀️✨", start: 6, end: 6 },
      { title: "第7章：AIと一緒にYAGNI（盛らせない使い方）🤖🧯", start: 7, end: 7 },
      { title: "第8章：最終ミニ課題（追加要件1つで育てる）🎓🌱", start: 8, end: 8 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('yagni_cs', 'yagni_cs', mod.start, mod.end),
    })),
  ],
  yagniTsSidebar: [
    {
      type: 'doc',
      id: 'yagni_ts/yagni_ts_index',
    },
    ...[
      { title: "第1章：YAGNIってなに？「作らない勇気」の入門 🌱🙂", start: 1, end: 1 },
      { title: "第2章：作り込みすぎのサインを見抜く 👀🚨", start: 2, end: 2 },
      { title: "第3章：「今必要」を決める技術（MVPとスコープの切り方）✂️🗺️", start: 3, end: 3 },
      { title: "第4章：YAGNIを支える実装スタイル（小さく作って育てる）🧱🌿", start: 4, end: 4 },
      { title: "第5章：TypeScriptでやりがちな“未来用設計”を安全に先送りする 🧯🧠", start: 5, end: 5 },
      { title: "第6章：YAGNIで進める開発フロー（基本）🚶‍♀️✨", start: 6, end: 6 },
      { title: "第7章：AIと一緒にYAGNI（盛らせない使い方）🤖🧯", start: 7, end: 7 },
      { title: "第8章：最終ミニ課題（追加要件1つで育てる）🎓🌱", start: 8, end: 8 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('yagni_ts', 'yagni_ts', mod.start, mod.end),
    })),
  ],
  kissCsSidebar: [
    {
      type: 'doc',
      id: 'kiss_cs/kiss_cs_index',
    },
    ...[
      { title: "第1章：KISSってなに？😺", start: 1, end: 1 },
      { title: "第2章：複雑さの正体を知ろう🧠", start: 2, end: 2 },
      { title: "第3章：KISSの基本テク10選🧰", start: 3, end: 3 },
      { title: "第4章：C#でやりがち！KISSリファクタ🍰", start: 4, end: 4 },
      { title: "第5章：AIとKISS🤖💗", start: 5, end: 5 },
      { title: "第6章：仕上げ：KISS運用チェックリスト✅", start: 6, end: 6 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('kiss_cs', 'kiss_cs', mod.start, mod.end),
    })),
  ],
  kissTsSidebar: [
    {
      type: 'doc',
      id: 'kiss_ts/kiss_ts_index',
    },
    ...[
      { title: "第1章：KISSってなに？🐣💡", start: 1, end: 1 },
      { title: "第2章：TSで複雑になりがちな3大ポイント🌀🧠", start: 2, end: 2 },
      { title: "第3章：KISSの基本ワザ10選🧰✨", start: 3, end: 3 },
      { title: "第4章：TypeScriptのKISS：型とコードのバランス⚖️🧩", start: 4, end: 4 },
      { title: "第5章：AIとKISS：お願いテンプレ＆レビュー術🤖💗", start: 5, end: 5 },
      { title: "第6章：仕上げ：KISS運用ルール＆チェックリスト✅🌈", start: 6, end: 6 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('kiss_ts', 'kiss_ts', mod.start, mod.end),
    })),
  ],
  solidCsSidebar: [
    {
      type: 'doc',
      id: 'solid_cs/solid_cs_index',
    },
    ...[
      { title: "第1部：SOLIDの基礎と準備（なぜ学ぶのか？）", start: 1, end: 7 },
      { title: "S：SRP（単一責務の原則）", start: 8, end: 11 },
      { title: "O：OCP（開放閉鎖の原則）", start: 12, end: 15 },
      { title: "L：LSP（リスコフ置換の原則）", start: 16, end: 18 },
      { title: "I：ISP（インターフェース分離の原則）", start: 19, end: 21 },
      { title: "D：DIP（依存性逆転の原則）", start: 22, end: 25 },
      { title: "総合演習：SOLIDを使いこなす", start: 26, end: 28 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('solid_cs', 'solid_cs', mod.start, mod.end),
    })),
  ],
  solidTsSidebar: [
    {
      type: 'doc',
      id: 'solid_ts/solid_ts_index',
    },
    ...[
      { title: "第1部：設計の基礎とTypeScript環境", start: 1, end: 8 },
      { title: "S：SRP（単一責任の原則）", start: 9, end: 11 },
      { title: "O：OCP（開放閉鎖の原則）", start: 12, end: 15 },
      { title: "L：LSP（リスコフ置換の原則）", start: 16, end: 19 },
      { title: "I：ISP（インターフェース分離の原則）", start: 20, end: 22 },
      { title: "D：DIP（依存性逆転の原則）", start: 23, end: 25 },
      { title: "卒業制作：SOLID統合リファクタ", start: 26, end: 28 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('solid_ts', 'solid_ts', mod.start, mod.end),
    })),
  ],
  socCsSidebar: [
    {
      type: 'doc',
      id: 'soc_cs/soc_cs_index',
    },
    ...[
      { title: "第1章：SoCって何？まずは一言で掴む📌😊", start: 1, end: 1 },
      { title: "第2章：混ざったコードが生む“修正地獄”あるある😇💥", start: 2, end: 2 },
      { title: "第3章：SoCとSOLID（特にSRP）の関係🧩✨", start: 3, end: 3 },
      { title: "第4章：分離の基本はこの3つだけ覚えればOK🙆‍♀️🪄", start: 4, end: 4 },
      { title: "第5章：境界線を引く練習（最初は線引きだけで勝ち）✍️✨", start: 5, end: 5 },
      { title: "第6章：UIの関心を分ける（イベントハンドラを痩せさせる）🖥️🍃", start: 6, end: 6 },
      { title: "第7章：業務ロジックの関心を分ける（ルールの置き場所）🧠✨", start: 7, end: 7 },
      { title: "第8章：データアクセスの関心を分ける（DBの都合を外に追い出す）🗄️🚪", start: 8, end: 8 },
      { title: "第9章：なぜ「データの箱」を分けるの？（God Classの回避）📦🙅‍♀️", start: 9, end: 9 },
      { title: "第10章：実践！データの詰め替え（ViewModel / DTO / Entity）🔄✨", start: 10, end: 10 },
      { title: "第11章：依存の向き（DIPの入口）をSoCで体験🧲🌟", start: 11, end: 11 },
      { title: "第12章：DI（依存性注入）の超入門（まずはコンストラクタ注入）💉😊", start: 12, end: 12 },
      { title: "第13章：テストしやすいSoC（I/O境界の分離）🧪✨", start: 13, end: 13 },
      { title: "第14章：小さなリファクタでSoCに近づく手順🔧🌱", start: 14, end: 14 },
      { title: "第15章：ケーススタディ（フォーム地獄→3分離）📚🔥", start: 15, end: 15 },
      { title: "第16章：AI導入前提の学び方（Copilot/Codexを味方に🤖💡）", start: 16, end: 16 },
      { title: "第17章：サイト用「共通リソース集」🧰🌸", start: 17, end: 17 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('soc_cs', 'soc_cs', mod.start, mod.end),
    })),
  ],
  socTsSidebar: [
    {
      type: 'doc',
      id: 'soc_ts/soc_ts_index',
    },
    ...[
      { title: "第1章：SoCってなに？30秒でつかむ超入門🎀", start: 1, end: 1 },
      { title: "第2章：なぜ混ぜるとツラいの？“修正が怖いコード”の正体😵‍💫💥", start: 2, end: 2 },
      { title: "第3章：SoCとSOLID（特にSRP）をやさしくつなぐ🧩💖", start: 3, end: 3 },
      { title: "第4章：TypeScriptの世界の“関心”を棚卸ししよう🧺✨", start: 4, end: 4 },
      { title: "第5章：Windows＋VS Codeの最小セットを整える🪟🛠️", start: 5, end: 5 },
      { title: "第6章：プロジェクトの最小フォルダ設計（サイトの骨格）📁🏗️", start: 6, end: 6 },
      { title: "第7章：最強の第一歩！「純粋な処理」と「副作用」を分ける🧼⚡", start: 7, end: 7 },
      { title: "第8章：モジュール分割（ファイル境界）でSoCを作る🏠📦", start: 8, end: 8 },
      { title: "第9章：ライトな3層設計（UI / Application / Domain）🍰✨", start: 9, end: 9 },
      { title: "第10章：型で境界を守る（ドメイン型の作り方）🧠🛡️", start: 10, end: 10 },
      { title: "第11章：DTOとドメインを混ぜない（変換の設計）📦🔁", start: 11, end: 11 },
      { title: "第12章：依存の向き（DIPの入口）をSoCで体験🧲🌟", start: 12, end: 12 },
      { title: "第13章：DIの基本（まずは「渡すだけDI」でOK）💉😊", start: 13, end: 13 },
      { title: "第14章：DIの実践（差し替え設計と境界の保ち方）🔄🧪", start: 14, end: 14 },
      { title: "第15章：テスト戦略（SoCがあると楽になる）🧪🌸", start: 15, end: 15 },
      { title: "第16章：ケーススタディ（ごちゃ混ぜ→分離してスッキリ）📚🔥", start: 16, end: 16 },
      { title: "第17章：AI導入前提のSoC運用（Copilot/Codex活用＋レビュー）🤖✅💖", start: 17, end: 17 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('soc_ts', 'soc_ts', mod.start, mod.end),
    })),
  ],
};

export default sidebars;
