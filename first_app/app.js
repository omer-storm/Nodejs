function sayHello(name) {
    console.log('Hello '+name);
}
 sayHello('Omer');
 //loading module
 const logger = require('./logger.js');
logger.log('Sending you from another module :p');
//Loading path module 
const path = require('path');
console.log(path.parse(__filename));
console.log(path.parse(__dirname));
//loading os module
const os = require('os');
var total_memory = os.totalmem;
var free_memory = os.freemem;
console.log(`total memory: ${total_memory} and free memory: ${free_memory}`);
//loading file module 
const fs = require('fs');
fs.readFile('display.txt','utf-8',(err,data_)=> {
    if(err) console.log(err);
    else console.log(data_);
});
fs.readdir('./',(error,files_)=> {
    if(error) console.log(error);
    else console.log(files_);
});