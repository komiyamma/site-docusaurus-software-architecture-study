
import os
import re

def parse_plan(plan_path):
    with open(plan_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract filenames like * **filename.png**
    # The regex looks for lines starting with * **...**
    matches = re.findall(r'\*\s+\*\*(.+?\.png)\*\*', content)
    return matches

def list_generated_files(dir_path):
    files = [f for f in os.listdir(dir_path) if f.endswith('.txt')]
    return files

def check_consistency():
    plan_path = r'g:\repogitory\software_architecture_study_roadmap\err_model_cs\picture\image_generation_plan.md'
    dir_path = r'g:\repogitory\software_architecture_study_roadmap\err_model_cs\picture'
    
    planned_images = parse_plan(plan_path)
    generated_files = list_generated_files(dir_path)
    
    # Convert plan png filenames to expected txt filenames
    expected_txts = [p.replace('.png', '.txt') for p in planned_images]
    
    print(f"Total Planned: {len(expected_txts)}")
    print(f"Total Generated: {len(generated_files)}")
    
    missing = []
    for expected in expected_txts:
        if expected not in generated_files:
            missing.append(expected)
            
    extra = []
    for gen in generated_files:
        if gen not in expected_txts:
            extra.append(gen)
            
    print("\n[Missing Files (Planned but not generated)]")
    for m in missing:
        print(m)
        
    print("\n[Extra Files (Generated but not in plan)]")
    for e in extra:
        print(e)

if __name__ == '__main__':
    check_consistency()
