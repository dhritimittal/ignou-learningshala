const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = [...walk('./src/components/course'), ...walk('./src/components/home')];
let changedCount = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match className=" ... " or className={` ... `}
  // This is a bit tricky with template literals, let's just do className="..." for now.
  const newContent = content.replace(/className=\"([\s\S]*?)\"/g, (match, p1) => {
    if (p1.includes('\n')) {
      const flattened = p1.replace(/\s+/g, ' ').trim();
      return 'className=\"' + flattened + '\"';
    }
    return match;
  });
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changedCount++;
    console.log('Fixed ' + file);
  }
});
console.log('Total files changed: ' + changedCount);
