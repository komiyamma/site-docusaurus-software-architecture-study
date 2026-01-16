const fs = require('fs');
const path = 'g:/repogitory/site-docusaurus-software-architecture-study/website/sidebars.ts';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/\{ title: ".*?", start: (\d+), end: \1 \}/g, '{ start: $1, end: $1 }');
fs.writeFileSync(path, content);
console.log('Successfully updated sidebars.ts');
