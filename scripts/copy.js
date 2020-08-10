const fs = require('fs');
function copyFile(source, target) {
    fs.copyFileSync(source, target);
}

copyFile('./package.json', './dist/lib/package.json');
console.log('\x1B[32m%s\x1B[0m', 'copy package.json success');