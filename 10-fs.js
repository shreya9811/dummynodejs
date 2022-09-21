//sync or async in both ways done

//synchronous
const fs = require('fs');

console.log('start');

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/subfolder/test.txt', 'utf8');
console.log(first);
console.log(second);

//creates new file and writes or replaces existing file
fs.writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`);

//append not overwrite
fs.writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'});

console.log('done with the task');
console.log('start next one');