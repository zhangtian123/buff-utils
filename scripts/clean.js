const fs = require('fs')

function cleanDir(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(file => {
            const curPath = `${path}/${file}`;
            if (fs.lstatSync(curPath).isDirectory()) {
                cleanDir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });

        fs.rmdirSync(path);
    }
}

cleanDir('dist/lib');
console.log('\x1B[32m%s\x1B[0m', 'clean dist success');