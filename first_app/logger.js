var exports = 'http://mylogger.io/log ';

function log(message){

    console.log(message);
}

//we are exporting it in object, we can also export as function also
module.exports.log = log;

// console.log(module);