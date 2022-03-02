const express = require('express');
const app = express();
const courses = [
{   id:1, name: "course1" },
{   id:2, name: "course2" },
{   id:3, name: "course3" }
] 
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Hello World!!!');
});
app.get('/courses', (req,res)=>{
    res.send(courses);
});

app.post('/courses', (req,res)=>{
    const course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    req.send(course);
});

app.get('/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course) 
    res.send(course);
    else
    res.status(404).send('cannot locate the course');;


});

app.listen(3000, () => console.log('listeing on 3000') );