# ADR C# 画像生成計画

## 共通設定

*   **Style**: Modern Flat Vector (Clean Line Art).
    *   Simple, geometric shapes.
    *   Clean lines, minimal detail (abstraction).
    *   Soft, harmonious color palette (Pastel tones: Blue, Green, Purple, with soft Gray background).
    *   No shadowing or 3D effects (Flat design).
    *   Professional yet approachable (Tech education context).
*   **Target Audience**: Beginner to Intermediate developers learning C# and Architecture.
*   **Text/Label Rules**:
    *   **NO Text in the image** (Concepts should be conveyed visually).
    *   If labels are absolutely necessary for abstract concepts, use **Japanese** for general concepts (e.g., 「理由」) and **English** for code terms (e.g., "ADR", "C#").
    *   **Do not** render the prompt text itself.

---

## 生成リスト

### 第1章：ADRってなに？

*   **File**: `adr_cs_study_001_intro_resume.png`
*   **Section**: 1) まず結論：ADRは「大事な判断の理由」を残す短い記録📝✨
*   **Prompt**: A visual metaphor for ADR as a "History Resume" for software. A document labeled 'ADR' connecting a 'Past Developer' (confused) with a 'Future Developer' (happy/understanding). The document highlights 'Why' (Reasons). Visualizing "Communication across time". Text/Labels: Use JAPANESE for concepts ('過去', '未来', '理由'). Use ENGLISH for code terms ('ADR'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_001_lost_knowledge.png`
*   **Section**: 2) ありがちな事故：「なんでこうしたっけ？」😵‍💫💥
*   **Prompt**: A visual comparison of "With ADR" vs "Without ADR". Left side (Without): A developer looking at old code with a confusion bubble '?', thinking "Why?". Right side (With): A developer looking at a document labeled 'ADR' and smiling with an implementation idea bulb. Visualizing "Preventing lost knowledge". Text/Labels: Use ENGLISH for 'ADR', 'Code'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第1章：追加アイデア

*   **File**: `adr_cs_study_001_3_line_sticky.png`
*   **Section**: 6) まず書いてみよう：3行ADRミニ演習✍️😊
*   **Prompt**: A simple sticky note illustration divided into 3 clear sections. Section 1: 'Decision' (Checkbox icon), Section 2: 'Reason' (Lightbulb icon), Section 3: 'Consequence' (Warning icon). Used as a quick memo. Visualizing "Simple 3-line ADR". Text/Labels: Use JAPANESE for section titles ('決定', '理由', '結果'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第2章：基本テンプレ

*   **File**: `adr_cs_study_002_template_structure.png`
*   **Section**: 1) ADRの最小セットはこれ！🧠✅
*   **Prompt**: A puzzle illustration with 3 interlocking pieces labeled 'Context', 'Decision', and 'Consequences'. They fit together to form a complete document. Visualizing the "Core 3 Elements" of an ADR. Text/Labels: Use ENGLISH for terms ('Context', 'Decision', 'Consequences'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_002_one_file_rule.png`
*   **Section**: 3) “運用ルール”の基本：1判断＝1ファイル 📄✅
*   **Prompt**: A file system folder illustration. Inside a folder labeled 'ADR', there are separate files cleanly aligned, each labeled '001', '002', '003'. A "Don't" symbol (red cross) over a single messy file containing multiple topics. Visualizing "One Decision per File". Text/Labels: Use ENGLISH for 'ADR', '001', '002'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第2章：追加アイデア

*   **File**: `adr_cs_study_002_status_badges.png`
*   **Section**: 2) 追加でよく入れる項目（超おすすめ）➕🧩 - Status
*   **Prompt**: A set of 4 colorful status badges/stamps. 1. Proposed (Yellow/Thought bubble), 2. Accepted (Green/Checkmark), 3. Superseded (Gray/Refresh arrow), 4. Deprecated (Red/Fire extinguisher). Visualizing "ADR Status Lifecycle". Text/Labels: Use ENGLISH for status names ('Proposed', 'Accepted', 'Superseded', 'Deprecated'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第3章：書きどき判定

*   **File**: `adr_cs_study_003_when_to_write.png`
*   **Section**: 2) ADRを書いた方がいい判断の特徴👑✅
*   **Prompt**: A filtering process illustration. Small, trivial items (pebbles labeled 'Naming', 'UI') fall through a sieve. Large, heavy items (rocks labeled 'Architecture', 'DB') are caught by the sieve labeled 'ADR'. Visualizing "What deserves an ADR". Text/Labels: Use ENGLISH for labels ('Naming', 'UI', 'DB', 'Arch'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第3章：追加アイデア

*   **File**: `adr_cs_study_003_scorecard.png`
*   **Section**: 5) さらに実戦的！「ADR向き度スコア」📊✨
*   **Prompt**: A clipboard with a scorecard. Items like 'Impact', 'Cost', 'Time' are listed with checkmarks or star ratings. A calculator shows a total score. Visualizing "Scoring execution". Text/Labels: Use JAPANESE for items ('影響', 'コスト', '期間'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第4章：設計判断の作り方

*   **File**: `adr_cs_study_004_decision_matrix.png`
*   **Section**: Step 5：比較軸（Criteria）で並べてみる（ここが本番）📊👀
*   **Prompt**: A simple decision matrix table illustration. Rows represent 'Criteria' (Speed, Cost), Columns represent 'Options' (A, B). Green checks and Red crosses are used to compare. A magnifying glass analyzes the table. Visualizing "Making an informed decision". Text/Labels: Use JAPANESE for concepts if needed ('比較'). Use English for 'Option A', 'Option B'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_004_constraints_anchor.png`
*   **Section**: Step 2：制約を先に固定する（ここが超重要）📌⛓️
*   **Prompt**: An illustration of an anchor fixing a boat or structure. The anchor is labeled 'Constraints'. It holds the decision process steady against waves labeled 'Options'. Visualizing "Constraints as a stabilizer". Text/Labels: Use ENGLISH for 'Constraints'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第4章：追加アイデア

*   **File**: `adr_cs_study_004_confidence_gauge.png`
*   **Section**: Step 6：Confidence（確信度）も書く 🔥➡️🧊
*   **Prompt**: A confidence gauge or battery meter illustration. Three levels shown: Low (Red), Medium (Yellow), High (Green). The needle is pointing to High. Visualizing "Confidence Level". Text/Labels: Use ENGLISH for levels ('High', 'Med', 'Low'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第5章：Context（背景）

*   **File**: `adr_cs_study_005_context_map.png`
*   **Section**: 1) Contextってなに？（超ざっくり）🗺️✨
*   **Prompt**: A map illustration showing a journey. The starting point is 'Pain/Problem' (Rough terrain), the path is the 'Context' (winding road), and the destination is the 'Decision' (Flag). Visualizing "Context as a Map". Text/Labels: Use JAPANESE for map points ('問題', '現在地', '決定'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_005_context_strong_vs_weak.png`
*   **Section**: 6) 例：ログ方針ADRの“悪いContext”→“良いContext”🪵✨
*   **Prompt**: A visual comparison. Top (Weak Context): A cloudy, blurry thought bubble. Bottom (Strong Context): A clear, structured document with bullet points and a 'Pain' icon (bandage). Visualizing "Clarity of Context". Text/Labels: Use JAPANESE for '曖昧', '明確'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第5章：追加アイデア

*   **File**: `adr_cs_study_005_context_checklist.png`
*   **Section**: 3) 良いContextに必ず入ってる6点セット✅🧩
*   **Prompt**: A checklist on a clipboard. The list includes 6 items with checkmarks. Items represent: Pain, As-is, Impact, Constraint, Drivers, Evidence. Visualizing "Context Elements". Text/Labels: Use JAPANESE for list items ('問題', '現状', '影響', '制約', '軸', '根拠'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第6章：Consequences（結果）

*   **File**: `adr_cs_study_006_tradeoffs_scale.png`
*   **Section**: 6.2 Consequences：ここが ADR の本体だよ⚖️💥✨
*   **Prompt**: A balance scale illustration. One side holds 'Pros' (Gemstones), the other holds 'Cons' (Weights/Stones). The scale is balanced, showing that every decision has trade-offs. Visualizing "Decision Consequences". Text/Labels: Use JAPANESE for 'メリット', 'デメリット'. Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_006_decision_clarity.png`
*   **Section**: 6.1 Decision の正体：ここは“結論”だけで勝負！✅💎
*   **Prompt**: A stamp or seal of approval illustration. A document showing a clear "DECIDED" or "ACCEPTED" stamp using bold typography. A gavel (judge's hammer) rests nearby. Visualizing "Decisiveness". Text/Labels: Use ENGLISH for 'DECIDED'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第6章：追加アイデア

*   **File**: `adr_cs_study_006_revisit_alarm.png`
*   **Section**: 5. Revisit conditions（見直し条件） 🔁
*   **Prompt**: An alarm clock or calendar with a specific date marked. Steps to 'Revisit' are shown. Visualizing "Trigger for review". Text/Labels: Use JAPANESE for '見直し'. Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第7章：リポジトリ構成

*   **File**: `adr_cs_study_007_folder_structure.png`
*   **Section**: 7-3. フォルダとファイルの完成形イメージ🌳✨
*   **Prompt**: A clean directory tree structure illustration. A root folder contains a 'docs' folder, which contains an 'adr' folder. The 'adr' folder shows files like '001-xxxx.md' and 'README.md'. Visualizing "Where to keep ADRs". Text/Labels: Use ENGLISH for file/folder names ('docs', 'adr', '001-init.md'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_007_naming_rules.png`
*   **Section**: 7-4. 命名ルール：迷わないための “3つの固定” 🔒🔢🧠
*   **Prompt**: A set of 3 neatly labeled file icons. 1. '001-init.md', 2. '002-log.md', 3. '003-db.md'. They are linked by a chain or bracket labeled 'Naming Rule'. Visualizing "Standardized Naming". Text/Labels: Use ENGLISH for filenames. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第7章：追加アイデア

*   **File**: `adr_cs_study_007_index_book.png`
*   **Section**: 7-6. 索引（README）がないと、ADRは100%迷子になる🧭💥
*   **Prompt**: An open book or index card catalog labeled 'README'. It lists several ADR titles with page numbers. A compass sits nearby. Visualizing "ADR Index for navigation". Text/Labels: Use ENGLISH for 'README', 'ADR Index'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第8章：開発フロー

*   **File**: `adr_cs_study_008_pr_process.png`
*   **Section**: 8-1. なんでPRに組み込むと続くの？🧠💡
*   **Prompt**: A Pull Request visual workflow. A box labeled 'PR' contains both a 'Code' icon and an 'ADR' document icon. It moves towards a 'Merge' gate. Visualizing "Bundling ADR with Code". Text/Labels: Use ENGLISH for terms ('PR', 'Code', 'ADR', 'Merge'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_008_codeowners_shield.png`
*   **Section**: 8-6. “責任の所在”を自然に作る：CODEOWNERS 👩‍⚖️👨‍⚖️
*   **Prompt**: A file icon labeled 'CODEOWNERS' acting as a shield protecting a folder labeled 'ADR'. A reviewer avatar stands behind the shield. Visualizing "Code Ownership/Protection". Text/Labels: Use ENGLISH for 'CODEOWNERS', 'ADR'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第8章：追加アイデア

*   **File**: `adr_cs_study_008_pr_template_form.png`
*   **Section**: 8-3. PRテンプレで「ADR添付」を習慣にする📎📝✨
*   **Prompt**: A digital form or template on a screen. Highlighted fields are 'Summary', 'Changes', and 'ADR Link' (Active). A user is filling it out easily. Visualizing "PR Template usage". Text/Labels: Use ENGLISH for field names ('Summary', 'ADR Link'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第9章：ライフサイクル

*   **File**: `adr_cs_study_009_superseded_baton.png`
*   **Section**: 4) Supersededの正しいやり方（最短ルート）🔁✨
*   **Prompt**: A relay race baton pass illustration. A runner labeled '001' (Old Decision) passes a baton to a runner labeled '002' (New Decision). 001 fades out slightly, 002 runs forward. Visualizing "Superseded status". Text/Labels: Use English numbers ('001', '002'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_009_superseded_vs_deprecated.png`
*   **Section**: 3) “Superseded” と “Deprecated” の違い、ここで決まる！⚖️
*   **Prompt**: A comparison illustration. Left (Superseded): A relay baton pass (Old -> New). Right (Deprecated): A "Construction/Warning" sign or tape blocking a path. Visualizing "Replacement vs Discontinuation". Text/Labels: Use ENGLISH for 'Superseded', 'Deprecated'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第9章：追加アイデア

*   **File**: `adr_cs_study_009_inventory_cleaning.png`
*   **Section**: 7) 棚卸し（ADR Inventory）でズレを早めに発見しよ🔎🧺✨
*   **Prompt**: A library or shop scene where a person is cleaning/organizing shelves labeled 'ADR'. They are dusting off old binders and organizing new ones. Visualizing "Inventory/Maintenance". Text/Labels: Use ENGLISH for label ('ADR'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第10章：ミニプロジェクト① 題材選び

*   **File**: `adr_cs_study_010_scope_slice.png`
*   **Section**: 10.4 スコープを小さくする “5つの切り方” ✂️🧸
*   **Prompt**: A "Scope Slicing" metaphor. A large cake or pizza labeled "Full Scope" being cut, and a small, manageable slice labeled "Mini Project" is served. Visualizing "Start Small". Text/Labels: Use ENGLISH for 'Full Scope', 'Mini'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_010_choice_paths.png`
*   **Section**: 10.2 題材候補（どれか1つ！）🎲✨
*   **Prompt**: A signpost with 3 directions. ONE: 'Log' (Wood log icon). TWO: 'Exception' (Warning triangle). THREE: 'DB' (Database cylinder). A character is choosing one path. Visualizing "Choosing a topic". Text/Labels: Use ENGLISH for 'Log', 'Exception', 'DB'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_010_one_page_memo.png`
*   **Section**: 10.5 成果物：「1枚メモ」テンプレ 🧾✨（コピペOK）
*   **Prompt**: A clean "One Page Memo" document. It has clear sections: "Theme", "Options", "Criteria". It looks like a blueprint for a decision. Visualizing the project definition. Text/Labels: Use JAPANESE for section titles ('テーマ', '選択肢', '比較'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第11章：ミニプロジェクト② 実戦

*   **File**: `adr_cs_study_011_pr_bundle.png`
*   **Section**: 5. PR に “ADR を乗せる” 手順（ここが実戦）🔁📎
*   **Prompt**: A shipping box labeled "PR". Inside, there is a "Code" block and an "ADR" document packed together. Visualizing "ADR belongs in the PR" or "Bundling". Text/Labels: Use ENGLISH for 'PR', 'Code', 'ADR'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_011_review_robot.png`
*   **Section**: 8.1 ADRレビューをAIにやらせる（優秀な後輩ムーブ）🤝🤖
*   **Prompt**: A friendly robot assistant reviewing an ADR document. It is holding a magnifying glass and pointing out a missing section. Visualizing "AI as a Reviewer". Text/Labels: Use ENGLISH for 'ADR'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第12章：ミニプロジェクト③ 卒業

*   **File**: `adr_cs_study_012_supersede_stamp.png`
*   **Section**: 12-4. 「Supersededごっこ」：わざと置き換えを体験する🔁🎮
*   **Prompt**: Two documents. The back one is faded with a "Superseded" stamp. The front one is bright with an "Accepted" stamp and a link arrow to the old one. Visualizing "Replacement" or "Superseding". Text/Labels: Use ENGLISH for stamps ('Superseded', 'Accepted'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_cs_study_012_my_checklist.png`
*   **Section**: 12-5. 自分専用「ADRチェックリスト」を作る🧾💖（この章の主役！）
*   **Prompt**: A personalized "Toolbelt" or "Checklist" held by a developer. It has custom items like 'My Rules'. Visualizing "Internalizing the process" / "My Toolkit". Text/Labels: Use ENGLISH for 'My Rules' or 'Checklist'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済
