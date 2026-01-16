
file_path = r'g:\repogitory\site-docusaurus-software-design-study\ddd_cs\picture\image_generation_plan.md'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '- **Prompt**:' in line:
        if 'Text/Labels:' not in line:
             print(f"Line {i+1}: Missing 'Text/Labels:'")
             print(f"Content: {line.strip()}")
