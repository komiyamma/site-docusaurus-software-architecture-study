
import os
import re

COMMON_SETTINGS = """
-----------------------------------------------

## 共通設定 (Common Settings)

*   **Tool Capability**: Use `nanobanana` (or compatible model) which **CAN** render Japanese text correctly.
*   **Style**: **Modern Flat Vector (Clean Line Art)**.
    *   **Keep**: Simple, geometric shapes, bold outlines, flat colors (Blue/Teal/White).
    *   **Keep**: Professional yet approachable (Tech editorial style).
    *   **Avoid**: Overly "Kawaii" or childish elements. Keep it "Cool & Clean".
    *   **Vibe**: High-quality tech documentation.
*   **Target Audience**: Japanese developers (Beginners to Intermediate).
*   **Text/Label Rules**:
    *   **Use Japanese Proactively**: Since the model supports it, use Japanese for key concepts to make it intuitive.
    *   **Format**: Use "English" for code terms (e.g. `String`, `Entity`), and "Japanese" for explanatory labels (e.g. 「値」「不変」).
    *   **Font Style**: Clean, sans-serif, legible.

-----------------------------------------------------

# 画像のスタイルガイド

## 背景は真っ白でかつ不透明とすること

## イラストスタイルガイド：モダンで親しみやすいフラットベクター風

## 🎨 決定したスタイル
**モダンで親しみやすいフラットベクター風（Modern Flat Vector / Clean Line Art）**

学習の旅を、整理された「モダンなテックガイド」として案内するためのスタイルです。可愛らしさを残しつつ、技術的な概念をクリアに伝えることを目的としています。

### 主な特徴（Key Characteristics）
- **線画 (Line Work)**: 明確で均一な太さの線（Bold Outlines）。スケッチ風のかすれや揺れはなく、滑らかでクリーンなベクターライン。
- **色使い (Color Palette)**: フラットな塗り（Flat Colors）。グラデーションや複雑なテクスチャは避け、はっきりとした色分けを行う。Webデザインやアイコンに近い、洗練された配色（ブルー、ティール、オレンジなどを基調に、目に優しいトーン）。
- **雰囲気 (Vibe)**: プロフェッショナルだが親しみやすい、整理されている、教育的、テックフレンドリー。
- **比喩 (Metaphors)**: 既存の比喩（積み木、冒険、魔法など）は維持しつつ、それを「子供の落書き」ではなく「デザインされたアイコン/イラスト」として表現する。

---

## 📝 プロンプトのテンプレート

AIへの指示（プロンプト）は以下の構成にします。

**重要**: AIに対して「日本語のテキストを描画せよ」と明示的に指示します。

```text
{PROMPT}

Target Audience: Japanese learners.
Text Rendering:
- The image MUST contain specific Japanese text.
- Font should be clean and rounded sans-serif.

Labels to Render:
- [英語ラベル]: "[日本語のテキスト]"
- [英語ラベル]: "[日本語のテキスト]"
...

Visual Details:
[具体的な視覚的指示]
```
"""

def parse_plan_details(plan_path):
    with open(plan_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract filename and prompt
    # * **filename.png**
    # ...
    # **Prompt**: `...`
    
    tasks = []
    # Split by logic roughly
    lines = content.split('\n')
    current_file = None
    
    for i, line in enumerate(lines):
        file_match = re.search(r'\*\s+\*\*(.+?\.png)\*\*', line)
        if file_match:
            current_file = file_match.group(1).replace('.png', '.txt')
            continue
            
        if current_file and '**Prompt**:' in line:
            # Extract prompt content between backticks
            prompt_match = re.search(r'`(.+)`', line)
            if prompt_match:
                prompt_text = prompt_match.group(1)
                tasks.append({'filename': current_file, 'prompt': prompt_text})
                current_file = None # Reset
            
    return tasks

def fix_prompts():
    plan_path = r'g:\repogitory\software_architecture_study_roadmap\err_model_cs\picture\image_generation_plan.md'
    dir_path = r'g:\repogitory\software_architecture_study_roadmap\err_model_cs\picture'
    
    planned_tasks = parse_plan_details(plan_path)
    expected_filenames = [t['filename'] for t in planned_tasks]
    
    # 1. Delete Extra Files
    existing_files = [f for f in os.listdir(dir_path) if f.endswith('.txt')]
    for f in existing_files:
        if f not in expected_filenames:
            print(f"Deleting extra file: {f}")
            os.remove(os.path.join(dir_path, f))
            
    # 2. Create Missing Files
    for task in planned_tasks:
        fname = task['filename']
        prompt_text = task['prompt']
        
        file_path = os.path.join(dir_path, fname)
        if not os.path.exists(file_path):
            print(f"Creating missing file: {fname}")
            
            # Formatting the content
            # Insert prompt into the common template
            content = "# 画像生成計画\n\n以下の画像を作成してください。「共通設定」や「画像のスタイルガイド」に従ってください。\n\n"
            content += COMMON_SETTINGS.replace("{PROMPT}", prompt_text)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == '__main__':
    fix_prompts()
