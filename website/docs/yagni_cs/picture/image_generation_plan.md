# YAGNI C# 画像生成計画

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
    *   If labels are absolutely necessary for abstract concepts, use **Japanese** for general concepts (e.g., 「シンプル」「短い」) and **English** for code terms (e.g., "YAGNI", "C#").
    *   **Do not** render the prompt text itself.

---

## 生成リスト

### 第1章：YAGNI入門

*   **File**: `yagni_cs_study_001_definition.png`
*   **Section**: 1. まず結論：YAGNIの一言定義 🧩
*   **Prompt**: A comparison illustration. Left: A simple, small, solid functional box labeled '今' (Now). Right: A huge, ghostly, transparent castle labeled '未来' (Future). The developer is focusing on the '今' box. Visualizing "Build only what you need now". Text/Labels: Use JAPANESE for concepts (e.g., '今', '未来'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `yagni_cs_study_001_mvp_cut.png`
*   **Section**: 5. ミニ演習📝：「今必要」だけに絞る練習✂️✨
*   **Prompt**: A delicious cake representing "Features". A developer is slicing just one perfect piece labeled 'MVP' to eat now, leaving the rest for later. Visualizing "Cutting the Scope". Text/Labels: Use JAPANESE for concepts where applicable (or 'MVP' is distinct enough). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第2章：作り込みすぎのサイン

*   **File**: `yagni_cs_study_002_warning_signs.png`
*   **Section**: 作り込みすぎのサイン図鑑（あるある）📚🚨
*   **Prompt**: A detective looking at three suspicious footprints through a magnifying glass. The footprints represented by icons: 1. A complex maze (for "Too many Interfaces"), 2. A Russian nesting doll (for "Layers"), 3. A crystal ball (for "Future Guessing"). Visualizing "Signs of Over-Engineering". Text/Labels: Use JAPANESE for labels (e.g., '複雑な迷路', '過剰な階層', '未来予測'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `yagni_cs_study_002_decision_balance.png`
*   **Section**: 「今必要」を決めるための“基準”🧭✅
*   **Prompt**: A balance scale. Left side: A gold nugget labeled '価値' (Value). Right side: A heavy question mark block labeled 'たぶん' (Maybe). The '価値' side outweighs the 'たぶん' side. Visualizing "Prioritizing Value over Uncertainty". Text/Labels: Use JAPANESE for concepts (e.g., '価値', 'たぶん'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `yagni_cs_study_002_config_hell.png`
*   **Section**: サイン5：設定ファイル・フラグ・プラグインで何でも差し替え可能 🔧🎛️
*   **Prompt**: A complex control panel with hundreds of switches, knobs, and cables (representing "Over-configuration"). Next to it, a simple box with a single "On/Off" button (representing "Simple Code"). Visualizing "Avoid Config Hell". Text/Labels: Use JAPANESE for labels (e.g., '設定地獄', 'シンプル'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第3章：スコープの切り方

*   **File**: `yagni_cs_study_003_scope_boxes.png`
*   **Section**: (A) スコープ箱（In / Out / Later）�
*   **Prompt**: Three sorting boxes. Box 1: Small and open, labeled 'やる' (In), containing a few essential items. Box 2: Closed and taped, labeled 'やらない' (Out). Box 3: Open but transparent/faded, labeled 'あとで' (Later). Visualizing "Scope Management". Text/Labels: Use JAPANESE for box labels ('やる', 'やらない', 'あとで'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `yagni_cs_study_003_three_screens.png`
*   **Section**: (B) “3画面ルール”📱✨
*   **Prompt**: Three smart phone screens lined up. 1. List, 2. Detail, 3. Input. A dashed border surrounds them indicating a limit. Visualizing the "Three Screen Rule" for MVP. Text/Labels: Use JAPANESE for screen types (e.g., '一覧', '詳細', '入力'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `yagni_cs_study_003_vertical_slice.png`
*   **Section**: 2) MVPの切り方：おすすめは「狭く深く」🍰✨
*   **Prompt**: A multi-layered cake representing software architecture. A knife is cutting a "Vertical Slice" through all layers (from top to bottom), taking a small but complete piece. Visualizing "Narrow and Deep MVP". Text/Labels: Use JAPANESE for concept (e.g., '垂直スライス'). Use ENGLISH for layer names. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第4章：小さく作って育てる

*   **File**: `yagni_cs_study_004_seedling_code.png`
*   **Section**: クセ①：まず“動く最小”を作る（完成を先に見に行く）�‍♀️💨
*   **Prompt**: A small, healthy green seedling growing in a pot, representing "Small Code". Next to it, a large, complex, artificial plastic tree, representing "Over-designed Code". The seedling looks vibrant. Visualizing "Start Small and Grow". Text/Labels: Use JAPANESE for labels (e.g., '小さく始める', '作りすぎ'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `yagni_cs_study_004_test_breakwater.png`
*   **Section**: クセ④：テストは“最小の防波堤”だけ作る🧪🧱
*   **Prompt**: A small, solid stone wall (breakwater) protecting a sandcastle from a wave. The wall is minimal but effective. Visualizing "Minimal Tests for Safety". Text/Labels: Use JAPANESE for labels (e.g., '最小限のテスト', '防波堤'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第5章：安全な先送り技術

*   **File**: `yagni_cs_study_005_manual_injection.png`
*   **Section**: ② 境界は“フォルダ”でいい（最初は）📁
*   **Prompt**: A simple, direct connection between two blocks (Manual Wiring) compared to a massive, tangled switchboard (Complex Container). Visualizing "Manual Injection" as simple and sufficient. Text/Labels: Use JAPANESE for comparison (e.g., '手動ワイヤリング', '複雑なコンテナ'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

*   **File**: `yagni_cs_study_005_interface_axe.png`
*   **Section**: interface はいつ切る？🪓
*   **Prompt**: An emergency glass case containing an axe. The label says '痛くなったら使う' (Break in case of Pain). The axe is labeled "Interface". Visualizing "Interfaces are for solving pain, not for decoration". Text/Labels: Use JAPANESE for the warning text ('痛くなったら使う'). Use ENGLISH for code terms ('Interface'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第6章：YAGNI開発フロー

*   **File**: `yagni_cs_study_006_yagni_cycle.png`
*   **Section**: 1. まず結論：YAGNIは「ループ」で回すと強い �🌱
*   **Prompt**: A circular process diagram with 4 steps. 1. MVP (Slice of Cake), 2. Code (Brick), 3. Refactor (Broom), 4. Next (Footprints). Minimal icons. Visualizing the "YAGNI Development Cycle". Text/Labels: Use JAPANESE for steps ('MVP', '実装', 'リファクタ', '次へ'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第7章：AIとYAGNI

*   **File**: `yagni_cs_study_007_ai_pruning.png`
*   **Section**: 7-6. “生成 → 削る”が基本ワークフロー ✂️�✨
*   **Prompt**: A friendly robot (AI) holding a bush that has overgrown branches. A human developer is using shears to trim the bush into a nice shape. Visualizing "Pruning AI Suggestions". Text/Labels: Use JAPANESE for roles ('AI提案', '人間が削る'). Use ENGLISH for code terms. Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済

### 第8章：最終ミニ課題

*   **File**: `yagni_cs_study_008_small_diff.png`
*   **Section**: 7. 「差分が小さい＝勝ち」を目で確認しよう�🏆
*   **Prompt**: Two developers high-fiving. One holds a paper showing a very short list of changes (Diff). A trophy is on the desk. Visualizing "Small Diff = Victory". Text/Labels: Use JAPANESE for concept ('差分は小さく', '勝利'). Use ENGLISH for code terms ('Diff'). Do NOT render the text 'Target Audience'. Style: Modern Flat Vector (Clean Line Art).
*   **Status**: [x] 済
