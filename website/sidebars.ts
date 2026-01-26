import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const fs = require('fs');
const path = require('path');

/**
 * Custom function to generate sidebar items from a directory.
 * It enforces that files ending with '_index.md' appear first in the list.
 */
function generateProjectSidebar(dirName: string) {
  const docsPath = path.join(__dirname, 'docs', dirName);

  if (!fs.existsSync(docsPath)) {
    console.warn(`Warning: Docs directory not found: ${docsPath}`);
    return [];
  }

  const files = fs.readdirSync(docsPath)
    .filter(file => file.endsWith('.md'))
    .sort((a, b) => {
      // Prioritize files containing '_index'
      const aIsIndex = a.includes('_index');
      const bIsIndex = b.includes('_index');

      if (aIsIndex && !bIsIndex) return -1;
      if (!aIsIndex && bIsIndex) return 1;

      return a.localeCompare(b);
    });

  return files.map(file => {
    const id = `${dirName}/${file.replace(/\.md$/, '')}`;
    return {
      type: 'doc' as const,
      id: id,
    };
  });
}

// Helper for DDD which uses manual grouping
function generateStudyIds(folder: string, prefix: string, start: number, end: number): string[] {
  const ids: string[] = [];
  for (let i = start; i <= end; i++) {
    const idStr = i.toString().padStart(3, '0');
    ids.push(`${folder}/${prefix}_study_${idStr}`);
  }
  return ids;
}

function generateSidebarItems(folder: string, prefix: string, modules: { title?: string; start: number; end: number }[]) {
  return modules.flatMap(mod => {
    const items = generateStudyIds(folder, prefix, mod.start, mod.end);

    // If title is provided, create a Category (Folder)
    if (mod.title) {
      return [{
        type: 'category' as const,
        label: mod.title,
        items: items,
      }];
    }

    // If no title, expand as Flat Docs (No Folder)
    return items.map(id => ({
      type: 'doc' as const,
      id: id,
    }));
  });
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



  entityObjCsSidebar: [
    {
      type: 'doc',
      id: 'entity_obj_cs/entity_obj_cs_index',
    },
    ...[
      { title: "第1章：まず全体像！Entity/VOって何が嬉しいの？🤔🌟", start: 1, end: 1 },
      { title: "第2章：開発環境セットアップ（Windows）🪟🛠️", start: 2, end: 2 },
      { title: "第3章：題材を決めて“言葉”を揃える（超かんたんユビキタス言語）🗣️☕️", start: 3, end: 3 },
      { title: "第4章：「同じ」の意味を分けよう（同一性 vs 等価性）🧠🔍", start: 4, end: 4 },
      { title: "第5章：Entity入門（ID・更新・履歴）🆔🧍‍♀️", start: 5, end: 5 },
      { title: "第6章：Value Object入門（不変・自己検証・等価性）💎✅", start: 6, end: 6 },
      { title: "第7章：C#でVOを“気持ちよく”書くための道具箱🧰✨", start: 7, end: 7 },
      { title: "第8章：等価性をちゃんと理解（比較・辞書・Hashの話）🧷✨", start: 8, end: 8 },
      { title: "第9章：VO実装① Email（バリデーションの基本）📧✅", start: 9, end: 9 },
      { title: "第10章：VO実装② Money（通貨・丸め・演算）💰🧮", start: 10, end: 10 },
      { title: "第11章：VO実装③ Quantity / Percentage / Code（よく出る形）📦💎", start: 11, end: 11 },
      { title: "第12章：VOの作り方パターン集（Factory/Parse/TryCreate）🏭🧩", start: 12, end: 12 },
      { title: "第13章：エラー設計の超入門（例外？Result？どこで返す？）⚠️🧠", start: 13, end: 13 },
      { title: "第14章：Entityに“ルール”を置く（貧血モデル回避）💪🧾", start: 14, end: 14 },
      { title: "第15章：ID設計（GuidでOK？型付きIDって何？）🆔🧷", start: 15, end: 15 },
      { title: "第16章：不変条件① VOで守る（無効状態を作れない）🔒💎", start: 16, end: 16 },
      { title: "第17章：不変条件② Entityで守る（状態とルール）🧾🔒", start: 17, end: 17 },
      { title: "第18章：状態機械（State Machine）超入門：表にしてみる📊🔁", start: 18, end: 18 },
      { title: "第19章：集約① “一緒に守る範囲”って何？（超やさしい）📦🌸", start: 19, end: 19 },
      { title: "第20章：集約② Order/OrderLine設計（VOの置き場所）🧾📦", start: 20, end: 20 },
      { title: "第21章：判断チェックリスト① “判断軸”を作る✅🧭", start: 21, end: 21 },
      { title: "第22章：判断チェックリスト② 分類クイズで定着🎯🧠", start: 22, end: 22 },
      { title: "第23章：境界① DTO/API/画面入力 → ドメイン変換🌉🧾", start: 23, end: 23 },
      { title: "第24章：境界② 永続化＆テスト＆リファクタ＆AI（総仕上げ）🎓✨", start: 24, end: 24 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('entity_obj_cs', 'entity_obj_cs', mod.start, mod.end),
    })),
  ],

  entityObjTsSidebar: [
    {
      type: 'doc',
      id: 'entity_obj_ts/entity_obj_ts_index',
    },
    ...[
      { title: "第1章：はじめに（この学習のゴール）🎯😊", start: 1, end: 1 },
      { title: "第2章：Windows＋VS Code＋TypeScript環境づくり💻🪟", start: 2, end: 2 },
      { title: "第3章：題材の“業務ルール”を決めよう（超ミニ仕様）🧾✨", start: 3, end: 3 },
      { title: "第4章：Entity/VOを分ける前に…「同一性」ってなに？🪪🧸", start: 4, end: 4 },
      { title: "第5章：Value Objectの芯＝不変＋自己検証＋値の等価性💎✅", start: 5, end: 5 },
      { title: "第6章：Entityの芯＝更新の入口を絞って“壊れない”設計🧱🪪", start: 6, end: 6 },
      { title: "第7章：迷わないための“判定フロー”を作る🗺️✨", start: 7, end: 7 },
      { title: "第8章：VO実装①「Email」や「PostalCode」みたいな“形式の値”📧📮", start: 8, end: 8 },
      { title: "第9章：VO実装②「Money」みたいな“計算する値”💰➕", start: 9, end: 9 },
      { title: "第10章：VO実装③「Period」みたいな“範囲の値”📅↔️", start: 10, end: 10 },
      { title: "第11章：VOの“等価性”と“コレクション”設計（Set/List）🧺💎", start: 11, end: 11 },
      { title: "第12章：Entity実装①「基本のEntity骨格」を作る🪪🧱", start: 12, end: 12 },
      { title: "第13章：Entity実装②「VOを持たせる」＋“更新は差し替え”🔁💎", start: 13, end: 13 },
      { title: "第14章：Aggregateの入口（更新ルートを1つに絞る）🚪👑", start: 14, end: 14 },
      { title: "第15章：不変条件を“入口”で守る（作れない状態を作らない）🛡️🚪", start: 15, end: 15 },
      { title: "第16章：状態遷移（超入門のState Machine）🚦🔄", start: 16, end: 16 },
      { title: "第17章：境界（DTO→ドメイン）とエラーの基本（Result/例外）🚪⚠️", start: 17, end: 17 },
      { title: "第18章：永続化とドメインは別物（分離の考え方）💾🧼", start: 18, end: 18 },
      { title: "第19章：Repositoryの入口（interfaceで守る：DIP入門）🧩🧱", start: 19, end: 19 },
      { title: "第20章：Mapper（変換）入門：Domain ↔ Persistence🔁💾", start: 20, end: 20 },
      { title: "第21章：ACL（外部APIの歪みを入れない翻訳層）🌉🧼", start: 21, end: 21 },
      { title: "第22章：テスト戦略（VO・Entity・境界・変換）🧪🍰", start: 22, end: 22 },
      { title: "第23章：リファクタ演習（Entity→VO化でバグを減らす）🔧✨", start: 23, end: 23 },
      { title: "第24章：総合ミニプロジェクト（統合）＋実務チェックリスト🎒🏁✅", start: 24, end: 24 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('entity_obj_ts', 'entity_obj_ts', mod.start, mod.end),
    })),
  ],

  dryCsSidebar: generateProjectSidebar('dry_cs'),
  dryTsSidebar: generateProjectSidebar('dry_ts'),

  dddCsSidebar: [
    {
      type: 'doc',
      id: 'ddd_cs/ddd_cs_index',
    },
    ...generateSidebarItems('ddd_cs', 'ddd_cs', dddModules),
  ],

  adrCsSidebar: generateProjectSidebar('adr_cs'),
  adrTsSidebar: generateProjectSidebar('adr_ts'),
  yagniCsSidebar: generateProjectSidebar('yagni_cs'),
  yagniTsSidebar: generateProjectSidebar('yagni_ts'),
  kissCsSidebar: generateProjectSidebar('kiss_cs'),
  kissTsSidebar: generateProjectSidebar('kiss_ts'),
  solidCsSidebar: generateProjectSidebar('solid_cs'),
  solidTsSidebar: generateProjectSidebar('solid_ts'),
  socCsSidebar: generateProjectSidebar('soc_cs'),
  socTsSidebar: generateProjectSidebar('soc_ts'),
  hcLcCsSidebar: generateProjectSidebar('hc_lc_cs'),
  hcLcTsSidebar: generateProjectSidebar('hc_lc_ts'),
  mvcCsSidebar: generateProjectSidebar('mvc_cs'),
  mvcTsSidebar: generateProjectSidebar('mvc_ts'),
  diCsSidebar: generateProjectSidebar('di_cs'),
  diTsSidebar: generateProjectSidebar('di_ts'),
  dipCsSidebar: generateProjectSidebar('dip_cs'),
  dipTsSidebar: generateProjectSidebar('dip_ts'),
  isaHasaCsSidebar: generateProjectSidebar('isa_hasa_cs'),
  isaHasaTsSidebar: generateProjectSidebar('isa_hasa_ts'),

  dpnRuleCsSidebar: [
    {
      type: 'doc',
      id: 'dpn_rule_cs/dpn_rule_cs_index',
    },
    ...[
      { title: "第1章 依存ってなに？怖さの正体を知ろう😱🔗", start: 1, end: 1 },
      { title: "第2章 Dependency Ruleの一言まとめ：矢印の向きを固定する🧭➡️", start: 2, end: 2 },
      { title: "第3章 層の考え方入門：中心と外側の地図を作る🧅🗺️", start: 3, end: 3 },
      { title: "第4章 まずは物理で守る：Visual Studioでプロジェクト分割📦🛠️", start: 4, end: 4 },
      { title: "第5章 プロジェクト参照ルール：どこがどこを参照していい？🚦➡️", start: 5, end: 5 },
      { title: "第6章 依存を守る最重要テク：インターフェースの置き場所🧷🎯", start: 6, end: 6 },
      { title: "第7章 DI入門：newしないで渡す（コンストラクタ注入）📥🧪", start: 7, end: 7 },
      { title: "第8章 Composition Root：組み立ては“外側”でやる🏗️🧭", start: 8, end: 8 },
      { title: "第9章 境界の型：DTO/Port/Adapterの超入門🚪📦", start: 9, end: 9 },
      { title: "第10章 “破れない”最短ルート①：参照を切って守る✂️🚫", start: 10, end: 10 },
      { title: "第11章 “破れない”最短ルート②：公開範囲を絞って守る🔒🧼", start: 11, end: 11 },
      { title: "第12章 アーキテクチャテスト入門：違反したら検知する🧪🚨", start: 12, end: 12 },
      { title: "第13章 Shared地獄を回避①：共有していいもの・ダメなもの📦⚠️", start: 13, end: 13 },
      { title: "第14章 Shared地獄を回避②：契約（Contract）を中心に置く📜🎯", start: 14, end: 14 },
      { title: "第15章 横断関心の扱い：ログ・設定・例外を中心に混ぜない🧼🧩", start: 15, end: 15 },
      { title: "第16章 仕上げプロジェクト：小さく作って、守り続ける🏁🎀", start: 16, end: 16 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('dpn_rule_cs', 'dpn_rule_cs', mod.start, mod.end),
    })),
  ],

  dpnRuleTsSidebar: [
    {
      type: 'doc',
      id: 'dpn_rule_ts/dpn_rule_ts_index',
    },
    ...[
      { title: "第1章 依存ってなに？TSの依存はまず「import」から😱🔗", start: 1, end: 1 },
      { title: "第2章 Dependency Ruleのコア：「中心（方針）」を「外側（詳細）」から守る🧭🎯", start: 2, end: 2 },
      { title: "第3章 “境界”の作り方入門①：まずはフォルダ境界でOK📁🧱", start: 3, end: 3 },
      { title: "第4章 “境界”の作り方入門②：パッケージ/monorepoはいつ必要？📦✨", start: 4, end: 4 },
      { title: "第5章 迷わない層モデル：Domain / Application / Adapters を決めよう🧅🗺️", start: 5, end: 5 },
      { title: "第6章 TypeScriptの武器：type/interfaceで“契約”を作る📜🧡", start: 6, end: 6 },
      { title: "第7章 依存逆転（DIP）をTSで体験：中心→外側importを断つ🔄🚫", start: 7, end: 7 },
      { title: "第8章 Composition Root入門①：組み立て場所（entry）を決める🏗️📌", start: 8, end: 8 },
      { title: "第9章 Composition Root入門②：DIコンテナ無しで回す設計パターン🧪🪶", start: 9, end: 9 },
      { title: "第10章 境界の設計①：DTO/変換をどこに置く？🚪📦", start: 10, end: 10 },
      { title: "第11章 境界の設計②：エラーも境界で翻訳しよう🧯🔁", start: 11, end: 11 },
      { title: "第12章 循環参照を倒す①：循環が起きる典型パターン🌀😵‍💫", start: 12, end: 12 },
      { title: "第13章 循環参照を倒す②：barrel（index.ts）と依存方向の整え方📦➡️", start: 13, end: 13 },
      { title: "第14章 shared/utils沼を回避①：共有していいもの・ダメなもの🕳️🐥", start: 14, end: 14 },
      { title: "第15章 shared/utils沼を回避②：契約（Contract）を中心に置く📜🎯", start: 15, end: 15 },
      { title: "第16章 ルールを自動で守る：ESLint境界ルール＋依存の見える化🛡️📈🏁", start: 16, end: 16 },
    ].map(mod => ({
      type: 'category' as const,
      label: mod.title,
      items: generateStudyIds('dpn_rule_ts', 'dpn_rule_ts', mod.start, mod.end),
    })),
  ],
};

export default sidebars;
