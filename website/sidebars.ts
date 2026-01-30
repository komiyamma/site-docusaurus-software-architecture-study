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
    const id = `${folder}/${prefix}_study_${idStr}`;
    const filePath = path.join(__dirname, 'docs', `${id}.md`);
    if (fs.existsSync(filePath)) {
      ids.push(id);
    }
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

const cleanCsModules = [
  { title: "Part 0：クリーンアーキの芯", start: 1, end: 7 },
  { title: "Part 1：Entities（Enterprise Business Rules）を厚く", start: 8, end: 16 },
  { title: "Part 2：Use Cases（Application Business Rules）を厚く", start: 17, end: 28 },
  { title: "Part 3：Interface Adapters（変換層）を厚く", start: 29, end: 38 },
  { title: "Part 4：Frameworks & Drivers（外側）を“外に閉じる”", start: 39, end: 42 },
  { title: "Part 5：テストと“依存ルール強制”は中核の一部", start: 43, end: 45 },
];

const cleanTsModules = [
  { title: "Part 1：核をつかむ", start: 1, end: 7 },
  { title: "Part 2：Entities（中心のルール）を作る", start: 8, end: 13 },
  { title: "Part 3：Use Cases（アプリの方針）を作る", start: 14, end: 23 },
  { title: "Part 4：Ports（差し替え口）を最小で設計", start: 24, end: 29 },
  { title: "Part 5：Interface Adapters（変換して繋ぐ）を作る", start: 30, end: 38 },
  { title: "Part 6：Frameworks & Drivers（外側に押し出す）", start: 39, end: 42 },
  { title: "Part 7：Composition Root（組み立て）で完成", start: 43, end: 45 },
];

const cqrsCsModules = [
  { title: "第1章〜第10章：CQRSの基礎と準備", start: 1, end: 10 },
  { title: "第11章〜第16章：Command（書き込み）の基本", start: 11, end: 16 },
  { title: "第17章〜第21章：Query（読み取り）の基本", start: 17, end: 21 },
  { title: "第22章〜第25章：API層とDispatcherの仕組み", start: 22, end: 25 },
  { title: "第26章〜第28章：横断関心（ログ・エラー・検証）", start: 26, end: 28 },
  { title: "第29章〜第33章：テストとパフォーマンス", start: 29, end: 33 },
  { title: "第34章〜第37章：Readモデルの分離と仕上げ", start: 34, end: 37 },
];

const cqrsTsModules = [
  { title: "第1章〜第7章：CQRSの基本と体験", start: 1, end: 7 },
  { title: "第8章〜第15章：Command（書き込み）側の設計", start: 8, end: 15 },
  { title: "第16章〜第20章：Query（読み取り）側の設計", start: 16, end: 20 },
  { title: "第21章〜第24章：エラー設計とテスト", start: 21, end: 24 },
  { title: "第25章〜第29章：投影（Projection）と整合性", start: 25, end: 29 },
  { title: "第30章〜第33章：冪等性とRead最適化", start: 30, end: 33 },
  { title: "第34章〜第37章：API設計と卒業制作", start: 34, end: 37 },
];

const invariantsCsModules = [
  { title: "第1章〜第6章：不変条件の基本と境界", start: 1, end: 6 },
  { title: "第7章〜第11章：失敗の表現と型の導入", start: 7, end: 11 },
  { title: "第12章〜第15章：値オブジェクトの実装", start: 12, end: 15 },
  { title: "第16章〜第20章：不変条件のパターンと集合", start: 16, end: 20 },
  { title: "第21章〜第25章：更新処理と状態管理", start: 21, end: 25 },
  { title: "第26章〜第30章：境界の設計と仕上げ", start: 26, end: 30 },
];

const invariantsTsModules = [
  { title: "第1章〜第6章：不変条件の基本とTypeScript", start: 1, end: 6 },
  { title: "第7章〜第11章：型の武器（プリミティブ地獄からの脱却）", start: 7, end: 11 },
  { title: "第12章〜第16章：値オブジェクトと更新設計", start: 12, end: 16 },
  { title: "第17章〜第21章：境界の設計と検証", start: 17, end: 21 },
  { title: "第22章〜第25章：エラー設計と状態", start: 22, end: 25 },
  { title: "第26章〜第30章：永続化・テスト・仕上げ", start: 26, end: 30 },
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



  entityObjCsSidebar: generateProjectSidebar('entity_obj_cs'),
  entityObjTsSidebar: generateProjectSidebar('entity_obj_ts'),

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
  hexCsSidebar: generateProjectSidebar('hex_cs'),
  hexTsSidebar: generateProjectSidebar('hex_ts'),

  dpnRuleCsSidebar: generateProjectSidebar('dpn_rule_cs'),
  dpnRuleTsSidebar: generateProjectSidebar('dpn_rule_ts'),

  layerCsSidebar: generateProjectSidebar('layer_cs'),
  layerTsSidebar: generateProjectSidebar('layer_ts'),

  errModelCsSidebar: generateProjectSidebar('err_model_cs'),
  errModelTsSidebar: generateProjectSidebar('err_model_ts'),

  observerCsSidebar: generateProjectSidebar('observer_cs'),
  observerTsSidebar: generateProjectSidebar('observer_ts'),

  cleanCsSidebar: [
    {
      type: 'doc',
      id: 'clean_cs/clean_cs_index',
    },
    ...generateSidebarItems('clean_cs', 'clean_cs', cleanCsModules),
  ],

  cleanTsSidebar: [
    {
      type: 'doc',
      id: 'clean_ts/clean_ts_index',
    },
    ...generateSidebarItems('clean_ts', 'clean_ts', cleanTsModules),
  ],
  cqsCsSidebar: generateProjectSidebar('cqs_cs'),
  cqsTsSidebar: generateProjectSidebar('cqs_ts'),

  cqrsCsSidebar: [
    {
      type: 'doc',
      id: 'cqrs_cs/cqrs_cs_index',
    },
    ...generateSidebarItems('cqrs_cs', 'cqrs_cs', cqrsCsModules),
  ],

  cqrsTsSidebar: [
    {
      type: 'doc',
      id: 'cqrs_ts/cqrs_ts_index',
    },
    ...generateSidebarItems('cqrs_ts', 'cqrs_ts', cqrsTsModules),
  ],
  invariantsCsSidebar: [
    {
      type: 'doc',
      id: 'invariants_cs/invariants_cs_index',
    },
    ...generateSidebarItems('invariants_cs', 'invariants_cs', invariantsCsModules),
  ],
  invariantsTsSidebar: [
    {
      type: 'doc',
      id: 'invariants_ts/invariants_ts_index',
    },
    ...generateSidebarItems('invariants_ts', 'invariants_ts', invariantsTsModules),
  ],
};

export default sidebars;
