const fs = require('fs');

var data = fs.readFileSync('display.txt', 'utf-8');
console.log(data);
console.log('Done');