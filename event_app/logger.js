const EventEmitter = require('events');

class Logger extends EventEmitter{

log(message){

    console.log(`Hey, this is your message: ${message}`);
    
    this.emit('logged',{url:'https://',id: Math.random})

}

}

module.exports = Logger;