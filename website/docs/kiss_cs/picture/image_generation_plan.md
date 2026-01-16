# KISS C# 画像生成計画

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
    *   If labels are absolutely necessary for abstract concepts, use **Japanese** for general concepts (e.g., 「シンプル」「短い」) and **English** for code terms (e.g., "KISS", "C#").
    *   **Do not** render the prompt text itself.

---

## 生成リスト

### 第1章：KISSってなに？

*   **File**: `kiss_cs_study_001_intro_simple_vs_short.png`
*   **Section**: 3. 「シンプル」って結局なに？🍀
*   **Prompt**: A comparison illustration. Left side labeled '短い' (Short): A tiny but infinitely tangled, dense, black knot of wires (hard to understand). Right side labeled 'シンプル' (Simple): A slightly larger but perfectly organized, straight, clean cable (easy to trace). Visualizing that "Short" does not always mean "Simple". Text/Labels: Use JAPANESE for labels ('短い', 'シンプル'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `kiss_cs_study_001_read_aloud.png`
*   **Section**: 6. KISSの“判断のコツ”3つだけ覚えよ🐣✨
*   **Prompt**: A developer reading a book (representing Code) out loud. Musical notes or smooth speech bubbles flow from them, signifying "Readable Code". In contrast to a developer struggling, sweating, and silent. Visualizing "The Read-Aloud Test". Text/Labels: Use JAPANESE for context if needed. Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第2章：複雑さの正体

*   **File**: `kiss_cs_study_002_complexity_monsters.png`
*   **Section**: 2-2. 複雑さが増える“典型パターン”図鑑📚✨
*   **Prompt**: Three cute "Complexity Monsters" representing code problems. 1. A Hydra-like tree monster (representing nested 'if' statements or Japanese 'ifの増殖'). 2. A "Bento Box" overflowed with too many different foods (representing "one method doing everything" or Japanese '全部盛り'). 3. A ghost fading in and out (representing scattered exceptions). Flat vector style, clean and not too scary. Text/Labels: Use ENGLISH for code terms. Use JAPANESE for concepts (e.g., 'ifの増殖', '全部盛り'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `kiss_cs_study_002_five_elements.png`
*   **Section**: 2-3. まずは「複雑さを言語化」する型を持とう🗣️✨
*   **Prompt**: A detective's magnifying glass focusing on a block of code. Through the glass, 5 distinct icons are revealed: A Brain (Decision), A Calculator (Calculation), A Shield (Guard/Check), A Box (Side Effect), and A Plug (Dependency). Visualizing the "5 Elements of Complexity" analysis. Text/Labels: Use JAPANESE for element names (e.g., '判断', '計算', 'ガード', '副作用', '依存'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第3章：KISSの基本テク

*   **File**: `kiss_cs_study_003_guard_clause.png`
*   **Section**: 1) ガード節（早期return）🚪✨
*   **Prompt**: A visual metaphor for "Guard Clause". A friendly Bouncer (Security Guard) standing at a door. He is stopping a spiky, red shape (Bad Data) from entering, but allowing a smooth, blue round shape (Good Data) to pass through. Label the door '入り口' (Entry). Clean line art. Text/Labels: Use JAPANESE for labels ('入り口', 'OK', 'NG'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `kiss_cs_study_003_toolbox.png`
*   **Section**: 2. KISSの基本テク10選🧰✨
*   **Prompt**: A clean, open toolbox labeled "KISS". Inside are neat, distinct tools representing coding techniques: A Shield (Guard Clause), A Pair of Scissors (Split Function), A Name Tag (Naming), and A Map (Dictionary/Table). White background, pastel colors. Text/Labels: Use JAPANESE for tool names (e.g., 'ガード', '分割', '命名', '辞書'). Use ENGLISH for "KISS" label. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第4章：C#リファクタ

*   **File**: `kiss_cs_study_004_switch_organization.png`
*   **Section**: 4-1. switch/パターンが増えすぎ問題🎭🌀
*   **Prompt**: Comparison of "Messy Switch" vs "Organized Switch". Left: A disorganized pile of loose papers (representing messy case statements). Right: A neat filing cabinet with clear tabs/folders labeled '見出し' (Headings). Visualizing utilizing Switch as an index rather than raw logic. Text/Labels: Use JAPANESE for labels (e.g., '見出し', '整理'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `kiss_cs_study_004_linq_spell.png`
*   **Section**: 4-2. LINQで“賢くしすぎ”問題🧠⚡
*   **Prompt**: A comparison illustration. Left side: A Wizard casting a chaotic, swirling purple magical cloud (representing complex LINQ chains that are hard to understand). Right side: A Chef arranging ingredients in 3 clear, distinct steps on a table (representing LINQ broken down into intermediate variables for clarity). Text/Labels: Use JAPANESE for concepts (e.g., '魔法', '料理'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `kiss_cs_study_004_null_barrier.png`
*   **Section**: 4-3. null処理が散る問題🌧️
*   **Prompt**: A security checkpoint illustration. A friendly Guard standing at a clear gate labeled '入り口' (Entry). The guard stops a transparent Ghost labeled 'Null' (or Japanese 「Null」) from entering the city. Inside the gate, everything is solid and safe. Visualizing "Stopping Null at the boundary". Text/Labels: Use JAPANESE for labels (e.g., '入り口'). Use ENGLISH for code terms ('Null'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第5章：AIとKISS

*   **File**: `kiss_cs_study_005_ai_partner.png`
*   **Section**: 5. AIを“KISSの相棒”にするミニ技🤖💗
*   **Prompt**: A human developer high-fiving a friendly AI robot. The robot is holding a magnifying glass (representing "Review" or "Diagnosis"), not a magic wand. Symbolizing "AI as a partner/checker" rather than "AI doing magic". Clean lines, happy vibe. Text/Labels: Use JAPANESE for concepts (e.g., '相棒', 'レビュー'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第6章：運用チェックリスト

*   **File**: `kiss_cs_study_006_daily_check.png`
*   **Section**: 6-1. KISSチェックリストは「3段階」にすると続くよ✅🧁
*   **Prompt**: A developer character looking at a simple 3-step checklist on a wall. Step 1 is labeled '30秒' (30 sec), Step 2 '3分' (3 min). Green checkmarks clearly visible. Relaxed, confident atmosphere. Text/Labels: Use JAPANESE for times ('30秒', '3分'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `kiss_cs_study_006_adr_card.png`
*   **Section**: 6-4. 1分で書く“小さなADR”📝✨
*   **Prompt**: A simple, clean index card pinned to a corkboard. The card has a Title, a Checkbox vs Cross (Decision), and a short note lines. Label the card "ADR". It looks lightweight and easy to write, not a heavy document. Visualizing "Architecture Decision Record". Text/Labels: Use JAPANESE for concept (e.g., '設計メモ', '仕様書'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済
