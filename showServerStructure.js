// showServerStructure.js
const fs = require('fs');
const path = require('path');

const exclude = ['node_modules', '.git', '.vscode', '.env', '.DS_Store', '.next', '.vite', 'dist', 'build'];

const isVisible = (name) => !name.startsWith('.') && !exclude.includes(name);

const printTree = (dir, prefix = '') => {
  const items = fs.readdirSync(dir).filter(isVisible);
  items.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const isLast = index === items.length - 1;
    const branch = isLast ? '└── ' : '├── ';
    console.log(prefix + branch + item);
    if (fs.statSync(fullPath).isDirectory()) {
      const nextPrefix = prefix + (isLast ? '    ' : '│   ');
      printTree(fullPath, nextPrefix);
    }
  });
};

const baseDir = process.cwd(); // where script is run
console.log('\n📁 server/');
printTree(path.join(baseDir, 'server'));
