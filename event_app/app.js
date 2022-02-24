const Logger = require('./logger');
const logger = new Logger();

logger.on('logger',(args) => {
    console.log(args);
});

logger.log('Hello !');

