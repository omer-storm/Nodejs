const http = require('http');

const routes = {
    'GET':{
        '/':(req,res)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            //res.end('<h1>Hello World!!!</h1>');
            //form:post>(input:text+br)*2+input:submit
            res.end(`
            <form method="post">
                <input type="text" name="username" placeholder="username"><br>
                <input type="password" name="password" placeholder="password"><br>
                <input type="submit" value="Login">
            </form>`);
        },
        '/about':(req,res)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end('<h1>About Us!!!</h1>');
        }
    },
    'POST':{
        '/':(req,res)=>{
            let body = '';
            req.on('data', (data)=>{
                body += data;
            });
            req.on('end', ()=>{
                const qs = new URLSearchParams(body);
                console.log(qs);
                let params = {}
                qs.forEach((value, key)=> params[key]=value);
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(JSON.stringify(params));                
            });
        }
    },
    'NA':(req, res)=>{
        res.writeHead(404)
        res.end('Content not found');
    }

}


const router = (req, res)=>{
    console.log(`${req.method} ${req.url}`)
    let resolveRoute = routes[req.method][req.url]
    if(resolveRoute !== undefined){
        resolveRoute(req, res);
    }else{
        routes['NA'](req, res)
    }
} 


http
.createServer(router)
.listen(3000, ()=> console.log(`Server is running on http://localhost:3000`));