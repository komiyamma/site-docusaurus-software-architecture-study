const fs = require('fs');
const path = require('path');

const docsDir = 'docs';

function findIndexFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            findIndexFiles(filePath, fileList);
        } else if (file.endsWith('_index.md')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const files = findIndexFiles(docsDir);
console.log(`Found ${files.length} index files.`);

files.forEach(fullPath => {
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');

        if (content.includes('sidebar_position: 0')) {
            content = content.replace(/sidebar_position: 0\n?/, '');
            // Clean up empty frontmatter if referencing that
            content = content.replace(/---\n\n---/, '');
            content = content.replace(/---\n---/, '');
            fs.writeFileSync(fullPath, content);
            console.log(`Removed position from: ${fullPath}`);
        } else {
            console.log(`No position found in: ${fullPath}`);
        }
    }
});
