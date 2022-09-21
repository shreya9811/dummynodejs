const path = require('path');

console.log(path.sep);

const filePAth = path.join('/content','subfolder','test.txt');
console.log(filePAth);

const base = path.basename(filePAth);
console.log(base); //filename

//absolute path
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);