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

function generateSidebarItems(folder: string, prefix: string, modules: { title?: string; start: number; end: number }[]) {
  return modules.map(mod => {
    const items = generateStudyIds(folder, prefix, mod.start, mod.end);
    if (mod.start === mod.end) {
      return {
        type: 'doc' as const,
        id: items[0],
      };
    }
    if (!mod.title) {
      throw new Error(`Title is required for category: ${folder} ${mod.start}-${mod.end}`);
    }
    return {
      type: 'category' as const,
      label: mod.title,
      items: items,
    };
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


  dryCsSidebar: [
    {
      type: 'doc',
      id: 'dry_cs/dry_cs_index',
    },
    ...generateSidebarItems('dry_cs', 'dry_cs', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
    ]),
  ],
  dryTsSidebar: [
    {
      type: 'doc',
      id: 'dry_ts/dry_ts_index',
    },
    ...generateSidebarItems('dry_ts', 'dry_ts', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
    ]),
  ],

  dddCsSidebar: [
    {
      type: 'doc',
      id: 'ddd_cs/ddd_cs_index',
    },
    ...generateSidebarItems('ddd_cs', 'ddd_cs', dddModules),
  ],
  adrCsSidebar: [
    {
      type: 'doc',
      id: 'adr_cs/adr_cs_index',
    },
    ...generateSidebarItems('adr_cs', 'adr_cs', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
      { start: 10, end: 10 },
      { start: 11, end: 11 },
      { start: 12, end: 12 },
    ]),
  ],
  adrTsSidebar: [
    {
      type: 'doc',
      id: 'adr_ts/adr_ts_index',
    },
    ...generateSidebarItems('adr_ts', 'adr_ts', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
      { start: 10, end: 10 },
      { start: 11, end: 11 },
      { start: 12, end: 12 },
    ]),
  ],
  yagniCsSidebar: [
    {
      type: 'doc',
      id: 'yagni_cs/yagni_cs_index',
    },
    ...generateSidebarItems('yagni_cs', 'yagni_cs', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
    ]),
  ],
  yagniTsSidebar: [
    {
      type: 'doc',
      id: 'yagni_ts/yagni_ts_index',
    },
    ...generateSidebarItems('yagni_ts', 'yagni_ts', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
    ]),
  ],
  kissCsSidebar: [
    {
      type: 'doc',
      id: 'kiss_cs/kiss_cs_index',
    },
    ...generateSidebarItems('kiss_cs', 'kiss_cs', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
    ]),
  ],
  kissTsSidebar: [
    {
      type: 'doc',
      id: 'kiss_ts/kiss_ts_index',
    },
    ...generateSidebarItems('kiss_ts', 'kiss_ts', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
    ]),
  ],
  solidCsSidebar: [
    {
      type: 'doc',
      id: 'solid_cs/solid_cs_index',
    },
    ...generateSidebarItems('solid_cs', 'solid_cs', [
      { title: "第1部：SOLIDの基礎と準備（なぜ学ぶのか？）", start: 1, end: 7 },
      { title: "S：SRP（単一責務の原則）", start: 8, end: 11 },
      { title: "O：OCP（開放閉鎖の原則）", start: 12, end: 15 },
      { title: "L：LSP（リスコフ置換の原則）", start: 16, end: 18 },
      { title: "I：ISP（インターフェース分離の原則）", start: 19, end: 21 },
      { title: "D：DIP（依存性逆転の原則）", start: 22, end: 25 },
      { title: "総合演習：SOLIDを使いこなす", start: 26, end: 28 },
    ]),
  ],
  solidTsSidebar: [
    {
      type: 'doc',
      id: 'solid_ts/solid_ts_index',
    },
    ...generateSidebarItems('solid_ts', 'solid_ts', [
      { title: "第1部：設計の基礎とTypeScript環境", start: 1, end: 8 },
      { title: "S：SRP（単一責任の原則）", start: 9, end: 11 },
      { title: "O：OCP（開放閉鎖の原則）", start: 12, end: 15 },
      { title: "L：LSP（リスコフ置換の原則）", start: 16, end: 19 },
      { title: "I：ISP（インターフェース分離の原則）", start: 20, end: 22 },
      { title: "D：DIP（依存性逆転の原則）", start: 23, end: 25 },
      { title: "卒業制作：SOLID統合リファクタ", start: 26, end: 28 },
    ]),
  ],
  socCsSidebar: [
    {
      type: 'doc',
      id: 'soc_cs/soc_cs_index',
    },
    ...generateSidebarItems('soc_cs', 'soc_cs', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
      { start: 10, end: 10 },
      { start: 11, end: 11 },
      { start: 12, end: 12 },
      { start: 13, end: 13 },
      { start: 14, end: 14 },
      { start: 15, end: 15 },
      { start: 16, end: 16 },
      { start: 17, end: 17 },
    ]),
  ],
  socTsSidebar: [
    {
      type: 'doc',
      id: 'soc_ts/soc_ts_index',
    },
    ...generateSidebarItems('soc_ts', 'soc_ts', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
      { start: 10, end: 10 },
      { start: 11, end: 11 },
      { start: 12, end: 12 },
      { start: 13, end: 13 },
      { start: 14, end: 14 },
      { start: 15, end: 15 },
      { start: 16, end: 16 },
      { start: 17, end: 17 },
    ]),
  ],
  hcLcCsSidebar: [
    {
      type: 'doc',
      id: 'hc_lc_cs/hc_lc_cs_index',
    },
    ...generateSidebarItems('hc_lc_cs', 'hc_lc_cs', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
      { start: 10, end: 10 },
      { start: 11, end: 11 },
      { start: 12, end: 12 },
      { start: 13, end: 13 },
      { start: 14, end: 14 },
      { start: 15, end: 15 },
      { start: 16, end: 16 },
      { start: 17, end: 17 },
    ]),
  ],
  hcLcTsSidebar: [
    {
      type: 'doc',
      id: 'hc_lc_ts/hc_lc_ts_index',
    },
    ...generateSidebarItems('hc_lc_ts', 'hc_lc_ts', [
      { start: 1, end: 1 },
      { start: 2, end: 2 },
      { start: 3, end: 3 },
      { start: 4, end: 4 },
      { start: 5, end: 5 },
      { start: 6, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 8 },
      { start: 9, end: 9 },
      { start: 10, end: 10 },
      { start: 11, end: 11 },
      { start: 12, end: 12 },
      { start: 13, end: 13 },
      { start: 14, end: 14 },
      { start: 15, end: 15 },
      { start: 16, end: 16 },
      { start: 17, end: 17 },
    ]),
  ],
};

export default sidebars;
