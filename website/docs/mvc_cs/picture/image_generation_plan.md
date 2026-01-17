# MVC CS 画像生成計画

## 共通設定

*   **Style**: Modern Flat Vector (Clean Line Art).
    *   Simple, geometric shapes.
    *   Clean lines, minimal detail (abstraction).
    *   Soft, harmonious color palette (Pastel tones: Blue, Green, Purple, with soft Gray background).
    *   No shadowing or 3D effects (Flat design).
    *   Professional yet approachable (Tech education context).
*   **Target Audience**: Beginner to Intermediate developers learning C# and MVC Architecture.
*   **Text/Label Rules**:
    *   **NO Text in the image** (Concepts should be conveyed visually).
    *   If labels are absolutely necessary for abstract concepts, use **Japanese** for general concepts (e.g., 「入力」「表示」) and **English** for code terms (e.g., "Model", "View").
    *   **Do not** render the prompt text itself.

---

## 生成リスト

### 第1章：MVCってなに？

*   **File**: `mvc_cs_study_001_mvc_trio.png`
*   **Section**: 1) MVCは“役割分担”の設計パターンだよ🍱✨
*   **Prompt**: Three distinct character-like geometrical shapes standing together. 1. "Model" (A box/cube shield). 2. "View" (An eye or a canvas). 3. "Controller" (A traffic light or game controller). Visualizing the three roles of MVC.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_001_bento_separation.png`
*   **Section**: 2) なんで分けるの？混ぜるほど地獄だから😇🔥
*   **Prompt**: Comparison of two Bento boxes. Left: Messy, mixed food (Spaghetti code). Right: Clean, separated compartments (Model, View, Controller). Visualizing "Separation of Concerns".
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_001_mvc_flow.png`
*   **Section**: 4) MVCの“流れ”を1枚でイメージしよう🌀✨
*   **Prompt**: A cycle diagram showing the flow of MVC. User -> Controller (Traffic Cop) -> Model (Box) -> View (Screen) -> User. Arrows indicate the direction of data and control.
*   **Status**: [x] 済

### 第2章：環境構築

*   **File**: `mvc_cs_study_002_ai_partner.png`
*   **Section**: 4) AI相棒の“正しい使い方”ルール（超大事）⚠️🤝
*   **Prompt**: A developer (human) and a robot (AI) shaking hands or looking at a screen together. The robot is holding a pair of scissors (representing "Cut small") and a magnifying glass (representing "Review diffs"). Visualizing a healthy AI pair-programming relationship.
*   **Status**: [x] 済

### 第3章：要件定義

*   **File**: `mvc_cs_study_003_mvp_scope.png`
*   **Section**: 4. ユーザーストーリーを3つだけ作る🧾✨
*   **Prompt**: A target board with "MVP" in the center. Three arrows hitting the center labeled "Add", "List", "Done". Other arrows (Edit, Delete) are outside the rings. Visualizing focusing on the Minimum Viable Product.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_003_requirement_mapping.png`
*   **Section**: 5. “画面（表示）”と“操作（入力）”を洗い出す🧼✨
*   **Prompt**: A diagram showing the extraction of MVC elements from a document. A document labeled "Requirements" is being filtered into three colored buckets labeled "View" (Screen), "Controller" (Input), and "Model" (Data). Visualizing requirements analysis. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms (e.g., 'View', 'Controller', 'Model'). Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第4章：Model入門①

*   **File**: `mvc_cs_study_004_data_types.png`
*   **Section**: 4-2. “型”で守ると、何がうれしいの？🥹✨
*   **Prompt**: Comparison of "String" vs "Strong Types". Left: A loose, shapeless bag labeled "String" containing random garbage. Right: Shaped containers labeled "Date", "Enum", "Bool" fitting perfectly into slots. Visualizing type safety.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_004_yagni_cut.png`
*   **Section**: 4-3. CampusTodo の TodoItem を設計しよう✍️📦
*   **Prompt**: A pair of scissors cutting away unnecessary branches from a tree structure. The branches are labeled with faint text like "Memo", "Tag", "User". The core trunk is labeled "Title", "Done". Visualizing YAGNI (You Ain't Gonna Need It) and minimal design. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms (e.g., 'Title', 'Done'). Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第5章：View入門①

*   **File**: `mvc_cs_study_005_view_responsibility.png`
*   **Section**: まず大事：Viewって何する係？👀🎨
*   **Prompt**: A painter or a printer (View) receiving raw data (Model) and producing a beautiful picture (Output). The painter is refusing to accept a "Calculator" or "Save Button", symbolizing "No Logic, Just Display".
*   **Status**: [x] 済

### 第6章：Controller入門①

*   **File**: `mvc_cs_study_006_traffic_cop.png`
*   **Section**: Controllerってなに？一言でいうと…🚦✨
*   **Prompt**: A traffic police officer (Controller) standing at an intersection. Directing "Input" cars to either "Model" lane or "View" lane. Visualizing the role of traffic control.
*   **Status**: [x] 済

### 第7章：MVC接続

*   **File**: `mvc_cs_study_007_dependency_vs_flow.png`
*   **Section**: まず大事：2つの矢印を分けよう🧠➡️➡️
*   **Prompt**: A diagram showing two overlays. Layer 1 (Data Flow): Arrows going in a circle (C -> M -> V). Layer 2 (Dependency): Arrows pointing inwards/downwards (C -> M, V -> M, C -> V). Visualizing the difference between runtime flow and static dependency.
*   **Status**: [x] 済

### 第8章：Controller入門②（ルーティング）

*   **File**: `mvc_cs_study_008_routing_map.png`
*   **Section**: 3. 解決アイデア：コマンド辞書（ルート表）🗂️✨
*   **Prompt**: A chaotic tangle of wires (If/Else) being organized into a clean switchboard or map (Routing Table) where inputs connect directly to their handlers.
*   **Status**: [x] 済

### 第9章：Model入門②（不変条件）

*   **File**: `mvc_cs_study_009_invariant_shield.png`
*   **Section**: 2) 不変条件ってなに？🍀
*   **Prompt**: A castle gate (Model). A guard (Invariant/Constructor) is stopping invalid inputs (Empty Title, Past Date) from entering. Inside the castle, everything is clean and orderly.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_009_controller_vs_model_guard.png`
*   **Section**: 3) なんでControllerじゃなくてModelに置くの？🚦➡️📦
*   **Prompt**: Comparison of two shields. Left: A Swiss cheese shield (Controller) full of holes, letting arrows (Invalid Data) pass through. Right: A solid steel shield (Model) blocking all arrows. Visualizing robust protection in the Model. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms. Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第10章：ViewModel

*   **File**: `mvc_cs_study_010_viewmodel_mapping.png`
*   **Section**: 2) なんで ViewModel が必要なの？🥺🧩
*   **Prompt**: A transformation factory. Raw "Model" (Data) enters one side. It passes through a "ViewModel" process where it gets decorated (Dates formatted, Icons added). Ready-to-display "View Data" exits the other side.
*   **Status**: [x] 済

### 第11章：Validation

*   **File**: `mvc_cs_study_011_validation_layers.png`
*   **Section**: まず結論：Validationは2種類に分けると超ラク！🧠✨
*   **Prompt**: Two checkpoints. Checkpoint 1 (Controller): Checking the shape of the ticket (Format). Checkpoint 2 (Model): Checking the validity of the passport (Rules). Visualizing two layers of validation.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_011_result_box.png`
*   **Section**: Step1：失敗を「例外」じゃなくて「結果」で返す（Resultパターン）📦📨✨
*   **Prompt**: A delivery box labeled "Result" that can maintain its shape. Inside, it can hold either a "Gift" (Web Success) OR an "Error Note" (Failure). It does not explode or break. Visualizing the Result pattern vs Exceptions. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms (e.g., 'Result', 'Success', 'Failure'). Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第12章：Service層

*   **File**: `mvc_cs_study_012_layered_architecture.png`
*   **Section**: 3) MVC + Service の形（イメージ図）🗺️✨
*   **Prompt**: A layered cake or stack diagram. Top: Controller. Middle: Service. Bottom: Model. View is on the side, observing. Visualizing the architectural layers.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_012_fat_controller.png`
*   **Section**: 1) まず「Fat Controller」ってなに？😵‍💫🍔
*   **Prompt**: A traffic police officer (Controller) looking exhausted and engaging in too many activities: cooking, cleaning, and directing traffic all at once. He is bloated/oversized. Visualizing the "Fat Controller" anti-pattern. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms. Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第13章：永続化①（ファイル）

*   **File**: `mvc_cs_study_013_hospital_chart.png`
*   **Section**: 2) まず考え方：永続化は「アプリの外」🌍➡️📦
*   **Prompt**: An application as a clean house. "Saving" is depicted as taking a box out of the house to a storage shed (File System). The house (Model) doesn't need to know how the shed works.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_013_safe_save.png`
*   **Section**: 5) ファイルが壊れにくい保存のコツ（超入門）🛡️💾
*   **Prompt**: A safe atomic swap process. Step 1: Writing to a "Draft" paper. Step 2: Instantly swapping the "Draft" with the "Official" document in a frame. Visualizing atomic save operations using temp files. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms (e.g., 'Temp', 'File'). Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第14章：永続化②（Repository）

*   **File**: `mvc_cs_study_014_repository_plug.png`
*   **Section**: なんでRepositoryが必要なの？🤔💡
*   **Prompt**: A power socket (Interface) on a wall. Different plugs (JSON, SQLite, Cloud) can be plugged into it. The lamp (Service) works regardless of which plug is used. Visualizing the Repository pattern and DIP.
*   **Status**: [x] 済

### 第15章：DI（依存注入）

*   **File**: `mvc_cs_study_015_construction_site.png`
*   **Section**: 7) 依存を “組み立てる場所” を1か所に集める（Composition Root）🏗️✨
*   **Prompt**: A construction crane (Program.cs/DI Container) lowering parts (Service, Repository) into place to build a machine. The machine parts don't build themselves; they are assembled from outside.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_015_fake_repository.png`
*   **Section**: 9) ミニ演習：FakeRepository を差し替えて動作確認🧸✅
*   **Prompt**: A movie set scene. The actor for "Database" (a heavy safe) is swapped out for a "Stunt Double" (a lightweight teddy bear) for a practice scene. Visualizing using Fake objects for testing. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms (e.g., 'Fake', 'Real'). Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第16章：テスト

*   **File**: `mvc_cs_study_016_safety_net.png`
*   **Section**: 1. テストって結局なに？🧠🧪
*   **Prompt**: An acrobat (App) performing on a high wire. Below, there is a strong safety net (Tests) ready to catch them if they fall (Bug). Visualizing reliability.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_016_boundary_ruler.png`
*   **Section**: 6. 境界値テストってなに？📏🧪（やさしく）
*   **Prompt**: A ruler measuring the exact edge of a dangerous cliff. On the safe side is "Valid", over the edge is "Invalid". A magnifying glass focuses on the exact edge line. Visualizing boundary value testing. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms. Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済

### 第17章：総合

*   **File**: `mvc_cs_study_017_full_architecture.png`
*   **Section**: 8) “MVCの責務”を1枚メモにする📝✨
*   **Prompt**: A complete, harmonious machine showing all parts working together: Controller, Service, Model, View, Repository. All connected with clean lines, representing the finished CampusTodo architecture.
*   **Status**: [x] 済

*   **File**: `mvc_cs_study_017_search_spotlight.png`
*   **Section**: 3) 仕上げ機能①：検索を入れて「使える感」爆上げ🔍✨
*   **Prompt**: A spotlight in a dark room illuminating only specific shapes (e.g., only Circles) while Squares and Triangles remain in the dark. Visualizing filtering/search functionality. The style should be clean, bold, and minimal, resembling high-quality tech editorial illustrations or icons. Uniform bold outlines, flat colors, no gradients, white background. Target Audience: Japanese learners. Do NOT render the text 'Target Audience'. Text/Labels: Use ENGLISH for code terms. Use JAPANESE (Hiragana/Katakana/Simple Kanji) for general labels/speech bubbles if text is needed.
*   **Status**: [x] 済
