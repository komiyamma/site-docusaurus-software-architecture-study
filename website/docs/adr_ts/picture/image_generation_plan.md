# ADR TS 画像生成計画

## 共通設定

*   **Style**: Modern Flat Vector (Clean Line Art).
    *   Simple, geometric shapes.
    *   Clean lines, minimal detail (abstraction).
    *   Soft, harmonious color palette (Pastel tones: Blue, Green, Purple, with soft Gray background).
    *   No shadowing or 3D effects (Flat design).
    *   Professional yet approachable (Tech education context).
*   **Target Audience**: Beginner to Intermediate developers learning TypeScript and Architecture.
*   **Text/Label Rules**:
    *   **NO Text in the image** (Concepts should be conveyed visually).
    *   If labels are absolutely necessary for abstract concepts, use **Japanese** for general concepts (e.g., 「背景」「結論」) and **English** for code terms (e.g., "Context", "Decision").
    *   **Do not** render the prompt text itself.

---

## 生成リスト

### 第1章：ADRってなに？

*   **File**: `adr_ts_study_001_what_is_adr.png`
*   **Section**: 1) ADRってなに？ひとことで言うと📝✨
*   **Prompt**: A modern flat vector illustration of the "ADR Triangle". Three connected nodes labeled "Context", "Decision", and "Consequences". It looks like a stable structure or a map. Visualizing the three core components of an Architecture Decision Record.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_001_forgetful_dev.png`
*   **Section**: 2) なんでADRが必要になるの？あるある😵‍💫💥
*   **Prompt**: A "Time Travel" comparison. Left: A developer looking confused and crying at a messy code block (Future Self). Right: The same developer in the past writing a note (ADR) with a smile. Visualizing "Writing for your future self".
*   **Status**: [x] 済

*   **File**: `adr_ts_study_001_decision_points.png`
*   **Section**: 4) TypeScript開発って、判断が増えやすい😳🧠✨
*   **Prompt**: A developer character standing at a crossroads surrounded by floating bubbles labeled "Strict?", "Validation?", "Libs?", "Error?". Visualizing the overwhelming number of decisions in TypeScript development.
*   **Status**: [x] 済

### 第2章：ADRの基本テンプレ

*   **File**: `adr_ts_study_002_status_lifecycle.png`
*   **Section**: 2-4 Status（状態）って何？どう使うの？🔁🚦
*   **Prompt**: A flowchart of ADR Status Lifecycle. 1. "Proposed" (Draft document icon). 2. Arrow to "Accepted" (Stamped document icon). 3. Arrow to "Superseded" (Old document replaced by a New document). Visualizing the lifecycle of a decision.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_002_template_structure.png`
*   **Section**: 2-2 最小3点セット：Context / Decision / Consequences ✅✅✅
*   **Prompt**: A document structure illustration. Top block: "Context" (Map icon). Middle block: "Decision" (Gavel/Checkmark icon). Bottom block: "Consequences" (Scale/Balance icon). Visualizing the anatomy of an ADR.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_002_color_coded_structure.png`
*   **Section**: 2-8 ワーク（15分）🖍️✍️✨
*   **Prompt**: A document illustration highlighted in three distinct colors. Top section Blue (Context), Middle section Green (Decision), Bottom section Orange (Consequences). A paintbrush or marker is highlighting them. Visualizing "Color-coded structure".
*   **Status**: [x] 済

### 第3章：いつADRを書く？

*   **File**: `adr_ts_study_003_three_conditions.png`
*   **Section**: 3-2. “書きどき判定”の超シンプル3条件🎯✨
*   **Prompt**: Three icons representing the conditions to write an ADR. 1. "High Cost" (Warning sign/Money). 2. "Long Life" (Clock/Calendar). 3. "Wide Impact" (Globe/Network). Visualizing "Cost", "Time", and "Impact".
*   **Status**: [x] 済

*   **File**: `adr_ts_study_003_splitting_adr.png`
*   **Section**: 3-5. 「判断がデカすぎる問題」✂️😇 → 分割ルール
*   **Prompt**: A large, heavy rock labeled "Big Decision" being broken down into three smaller, manageable stones labeled "ADR 1", "ADR 2", "ADR 3". Visualizing splitting a large decision into atomic records.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_003_no_adr_zone.png`
*   **Section**: 3-4. ADR不要ゾーン🙅‍♀️🍃（ここ超大事！）
*   **Prompt**: A filter or funnel illustration. Large, important items pass through to a "Yes" box. Small items like "Rename", "UI Tweak" are filtered out to a "No" box or trash can. Visualizing "What NOT to write".
*   **Status**: [x] 済

### 第4章：判断の作り方（比較軸）

*   **File**: `adr_ts_study_004_comparison_matrix.png`
*   **Section**: 4.4 比較表テンプレ（コピペ用）🧾✨
*   **Prompt**: A clean comparison matrix (table). Rows are "Option A", "Option B". Columns are "DX", "Safety", "Cost". Cells have checks/crosses or simple scores. Visualizing a structured decision-making process.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_004_decision_drivers.png`
*   **Section**: Step4：比較軸を5つ以内で決める⚖️
*   **Prompt**: A balance scale weighing different "Decision Drivers". One side has "Dev Experience", the other has "Runtime Safety". Visualizing the trade-offs and weighting of criteria.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_004_constraints_anchor.png`
*   **Section**: Step2：制約を先に固定する📌
*   **Prompt**: An illustration of a heavy anchor labeled "Constraints" holding a ship (Decision process) steady in choppy water. Visualizing constraints as a stabilizing force.
*   **Status**: [x] 済

### 第5章：書き方① Context

*   **File**: `adr_ts_study_005_context_ingredients.png`
*   **Section**: 5.3 Contextに“入れるべきもの”チェックリスト🍲🔎
*   **Prompt**: A cooking pot labeled "Context". Ingredients are being added: "Pain" (Bandage), "Constraints" (Wall), "Current State" (Map). Visualizing that Context is a mix of specific elements.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_005_bad_vs_good_context.png`
*   **Section**: 5.7 悪いContext → 良いContext（3パターン）🎮🖍️
*   **Prompt**: A visual comparison. Top: A cloudy, blurry document (Bad Context). Bottom: A clear, sharp, structured document (Good Context) with a "Pain" icon and "Constraints" icon. Visualizing clarity.
*   **Status**: [x] 済

### 第6章：書き方② Decision

*   **File**: `adr_ts_study_006_strong_decision.png`
*   **Section**: 2) “一文で言い切る”ための型（テンプレ）🧩✨
*   **Prompt**: Comparison of two documents. Left: A blurry, long text block (Bad/Weak). Right: A sharp, single sentence highlighted (Good/Strong). Visualizing "One clear sentence".
*   **Status**: [x] 済

*   **File**: `adr_ts_study_006_decision_package.png`
*   **Section**: 3) Decision一文 + “添え物3点セット”でプロっぽくなる🎀
*   **Prompt**: A main box "Decision" with three smaller attached boxes: "Scope" (Target), "Exceptions" (Warning), "Acceptance" (Check). Visualizing the Decision package.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_006_ts_decision_topics.png`
*   **Section**: 5) TypeScriptでありがちなDecisionテーマ例（そのまま使える）🎯💕
*   **Prompt**: A collection of flat icons representing TypeScript decision topics: A Shield (Validation), Defines of Module (Puzzle), Broom (Linting), Layered Cake (Architecture). Visualizing common TS decisions.
*   **Status**: [x] 済

### 第7章：書き方③ Consequences

*   **File**: `adr_ts_study_007_pros_cons_balance.png`
*   **Section**: 7.3 Consequencesの「書きやすい型」⚖️✨（おすすめ）
*   **Prompt**: A balance scale showing "Pros" (Thumbs up) and "Cons" (Thumbs down) balanced equally. Visualizing honesty in documenting trade-offs.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_007_cons_to_tasks.png`
*   **Section**: 7.7 Consequencesを「タスク」に変換する魔法🪄📝️
*   **Prompt**: A magic transformation. A "Cons/Negative" cloud is being transformed by a magic wand into a "Task/Action" checklist. Visualizing converting problems into actionable tasks.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_007_tradeoff_threads.png`
*   **Section**: 7.5 TypeScript開発で出やすい Consequences ネタ集🧠✨
*   **Prompt**: A decision node connecting to multiple outcomes via colored threads. Green thread leads to "Safety", Red thread leads to "Extra Work". Visualizing the ripple effects (consequences) of a decision.
*   **Status**: [x] 済

### 第8章：置き場所と管理

*   **File**: `adr_ts_study_008_folder_structure.png`
*   **Section**: 8-1. まず決めるのは「ADRの置き場所」📁✨
*   **Prompt**: A folder structure diagram. Root folder -> `docs` -> `adr`. Inside `adr` are files like `0001.md`, `0002.md` and `README.md`. Visualizing the standard directory layout.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_008_adr_index.png`
*   **Section**: 8-3. “ADR一覧（目次）”を作ると運用が一気にラクになる🧭📚
*   **Prompt**: A clean "Table of Contents" view on a screen. List of items: "0001: Validation", "0002: Error Handling". Each has a status badge (Accepted, Proposed). Visualizing the ADR Index.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_008_naming_convention.png`
*   **Section**: 8-2. 命名ルール：連番＋短い題名で“検索しやすく”🔢🔎
*   **Prompt**: A row of file icons sorted neatly. Labels: "0001", "0002", "0003". A magnifying glass hovers over them. Visualizing "Easy to find".
*   **Status**: [x] 済

### 第9章：開発フローに組み込む

*   **File**: `adr_ts_study_009_pr_workflow.png`
*   **Section**: 9-1 なんで“PRに組み込む”のが強いの？🤔💡
*   **Prompt**: A Pull Request workflow. Steps: 1. Code Change. 2. ADR Document attached. 3. Reviewer checks both. 4. Merge. Visualizing ADR as part of the PR process.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_009_no_adr_gate.png`
*   **Section**: 9-6 仕組み化レベルアップ（できたら強い）⚙️🛡️✨
*   **Prompt**: A security gate at the "Merge" button. A robot guard checks "Has ADR?". If Yes, gate opens. If No, gate stays closed. Visualizing automated checks for ADRs.
*   **Status**: [x] 済

*   **File**: `adr_ts_study_009_pr_template_checkboxes.png`
*   **Section**: 9-3 PRテンプレで“書き忘れ”をゼロにする🧻✨
*   **Prompt**: A close-up of a digital form (PR Template). A checklist item "Has ADR?" is being checked with a green checkmark. Visualizing the reminder.
*   **Status**: [x] 済

### 第10章：最終課題① テーマ決め

*   **File**: `adr_ts_study_010_theme_selection.png`
*   **Section**: 10.3 テーマ例（1つだけ選んでOK）🌷✨
*   **Prompt**: A selection scene. A hand picking one distinct puzzle piece labeled "Theme" from a group of pieces (Validation, State, API). Visualizing "Focusing on one theme". Text/Labels: Use ENGLISH for 'Theme'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_ts_study_010_decision_matrix.png`
*   **Section**: 10.8 比較表テンプレ（そのままコピペOK）🧾✨
*   **Prompt**: A structured decision matrix on a tablet. Columns: Options A, B, C. Rows: Criteria 1, 2, 3. The cells are filled with checks and small notes. Visualizing "Structured Comparison". Text/Labels: Use ENGLISH for 'Options', 'Criteria'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_ts_study_010_decision_question.png`
*   **Section**: 10.4 “テーマ”を1文にする（ここが最重要）✍️✨
*   **Prompt**: A sentence construction kit. Blocks labeled "Whatever", "Why", "How" are being snapped together to form a clear question mark shape. Visualizing "Framing the question".
*   **Status**: [x] 済

### 第11章：最終課題② 実装反映

*   **File**: `adr_ts_study_011_adr_reflection.png`
*   **Section**: 11.7 いよいよ実装に反映する🧑‍💻🔥
*   **Prompt**: A reflection metaphor. An ADR document labeled "Decision" is held up to a mirror, and the reflection shows a Code file labeled "Implementation". Visualizing "ADR reflecting in Code". Text/Labels: Use ENGLISH for 'Decision', 'Code'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_ts_study_011_pr_bundle_ts.png`
*   **Section**: 11.5 ADR 0001 テンプレを貼って書く✍️💗
*   **Prompt**: A digital package labeled "PR". It contains a file "0001.md" and a file "schema.ts". They are tied together. Visualizing "Bundling Document and Code". Text/Labels: Use ENGLISH for 'PR', 'ADR', 'TS'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_ts_study_011_clean_commit_history.png`
*   **Section**: 11.9 コミットの切り方がキレイだと未来で泣ける🥹✨
*   **Prompt**: A git commit history timeline. Two distinct dots on a line. The first dot is labeled "Docs(ADR)", the second dot is labeled "Feat(Code)". Visualizing clean separation of concerns.
*   **Status**: [x] 済

### 第12章：最終課題③ 置き換え

*   **File**: `adr_ts_study_012_supersede_cycle.png`
*   **Section**: 12-5 手順 0002を作って0001をSupersededにする🔁✅
*   **Prompt**: A cycle diagram. 0001 (Old) -> Superseded -> 0002 (New) -> Accepted. Visualizing the lifecycle of replacement. Text/Labels: Use ENGLISH numbers '0001', '0002'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_ts_study_012_review_checklist.png`
*   **Section**: 12-9 最終成果物チェックリスト これが揃えば卒業🎓🌸✨
*   **Prompt**: A final checklist illustration. A clipboard with items checked off: "ADR Created", "Superseded", "Linked", "PR Passed". Visualizing "Completion and Graduation". Text/Labels: Use ENGLISH for 'Done'. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `adr_ts_study_012_edit_vs_replace.png`
*   **Section**: 12-3 変更の種類を仕分けよう✂️✨
*   **Prompt**: Visual comparison. Left side "Edit": A person fixing a window on a house (Minor change). Right side "Replace": A person building a new house next to an old one (Major change/Replacement). Visualizing "Modify vs Supersede".
*   **Status**: [x] 済
