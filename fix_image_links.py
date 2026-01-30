import os
import re
from pathlib import Path

def fix_image_links(docs_dir):
    docs_path = Path(docs_dir)
    if not docs_path.exists():
        print(f"Error: Directory {docs_dir} not found.")
        return

    # 再帰的にmdファイルを検索
    for md_file in docs_path.glob("**/*.md"):
        content = md_file.read_text(encoding="utf-8")
        
        # 画像タグ ![alt](./picture/filename.png) を抽出
        img_pattern = r'!\[.*?\]\((\./picture/(.*?))\)'
        matches = list(re.finditer(img_pattern, content))
        
        if not matches:
            continue
            
        new_content = content
        modified = False
        
        # 該当ディレクトリのpictureフォルダを確認
        picture_dir = md_file.parent / "picture"
        if not picture_dir.exists():
            continue
            
        actual_files = list(picture_dir.glob("*.png"))
        
        for match in matches:
            full_link = match.group(0)
            rel_link = match.group(1) # ./picture/filename.png
            orig_filename = match.group(2) # filename.png
            
            # ファイルが存在するか確認
            target_file = picture_dir / orig_filename
            if target_file.exists():
                continue # 存在するならOK
                
            # 存在しない場合、プレフィックスで検索
            # 例: invariants_cs_study_001_shield.png -> invariants_cs_study_001_
            # 基本的にファイル名の後半が違うことが多いので、最初の3〜4ブロックをプレフィックスにする
            prefix_match = re.search(r'^(.*_study_\d+)_', orig_filename)
            if not prefix_match:
                continue
                
            prefix = prefix_match.group(1)
            
            # 同じプレフィックスを持つ実際のファイルを探す
            candidates = [f for f in actual_files if f.name.startswith(prefix)]
            
            if candidates:
                # 複数ある場合は、とりあえず最初の一つ（または最もそれらしいもの）を選択
                # 今回のケースでは1ファイルに1画像が基本なので、最初の一つで概ね正しい
                new_filename = candidates[0].name
                new_rel_link = f"./picture/{new_filename}"
                new_img_tag = full_link.replace(rel_link, new_rel_link)
                
                print(f"Fixing in {md_file.name}: {orig_filename} -> {new_filename}")
                new_content = new_content.replace(full_link, new_img_tag)
                modified = True
        
        if modified:
            md_file.write_text(new_content, encoding="utf-8")

if __name__ == "__main__":
    base_dir = r"g:\repogitory\site-docusaurus-software-architecture-study\website\docs"
    dirs_to_fix = ["cqrs_cs", "invariants_cs", "invariants_ts"]
    
    for d in dirs_to_fix:
        target = os.path.join(base_dir, d)
        print(f"Processing {target}...")
        fix_image_links(target)
