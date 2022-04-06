const fs = require('fs');

fs.readFile('display.txt', 'utf-8', function(err, data){
    console.log(data);
});
console.log('Done');