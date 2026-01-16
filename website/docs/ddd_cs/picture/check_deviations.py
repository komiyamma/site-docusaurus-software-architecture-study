
import sys

file_path = r'g:\repogitory\site-docusaurus-software-design-study\ddd_cs\picture\image_generation_plan.md'
# The expected part that MUST be present if "Use ENGLISH for code terms" is present
match_part = "Use JAPANESE for concepts"

print(f"Checking {file_path} for missing '{match_part}'")

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

found_issues = False
for i, line in enumerate(lines):
    if '**Prompt**' in line:
        has_english = "Use ENGLISH for code terms" in line or "Use English for code terms" in line
        has_japanese = match_part in line
        
        # Condition: Has English instruction but MISSING Japanese instruction
        if has_english and not has_japanese:
            print(f"Line {i+1}: Missing Japanese instruction")
            print(f"Content: {line.strip()}")
            found_issues = True
        elif has_english and has_japanese:
            # Good case, verify exact casing if needed, but 'match_part' checks casing
            pass
        elif not has_english and "Text/Labels" in line:
             print(f"Line {i+1}: Text/Labels present but missing English instruction (unusual)")
             print(f"Content: {line.strip()}")
             # This might be where the error is too?

if not found_issues:
    print("No issues found where English instruction is present but Japanese is missing.")
