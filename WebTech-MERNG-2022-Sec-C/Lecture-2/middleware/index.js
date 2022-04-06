const express = require('express');
const app  = express();
const port = 4000;

const logger = (req, res, next)=>{
    req.msg = `\nThis message is from middleware!!!`;
    next();
}

const auth = (req, res, next)=>{
    if(req.query.name.toLowerCase() === "peter"){
        next()
    }else{
        res.send("Access Denied")
    }
}

app.use(logger);
app.get('/', (req, res)=>{
    res.send(`<h3>Hello World</h3>${req.msg}`);
})

app.get('/users', auth,  (req, res)=>{
    res.send(`<h3>Users Route</h3>${req.msg}`);
})



app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));