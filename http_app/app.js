const http = require('http');
//req for request and res for response
const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.write('Hello World');
    res.end();
}
if(req.url === '/home'){
    res.write('Home');
    res.end();
}
});
server.listen(3000);
console.log('server is listening');
