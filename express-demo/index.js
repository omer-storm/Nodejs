const express = require('express');
const req = require('express/lib/request');
const Joi = require('joi');
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
    const  {error}  = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
     }
    const course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);

    

});

app.put('/courses/:id', (req,res) => {
    //select the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('cannot locate the course');
        return;
    }
    
    //validate the input
    const {error}  = validateCourse(req.body);
    
    if(error){
        res.status(400).send(error.details[0].message);
        return;
     } 

     //update the array
     course.name = req.body.name;
     res.send(course);

});

app.get('/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course) 
    res.send(course);
    else
    res.status(404).send('cannot locate the course');
});
app.delete('/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course) 
    res.send(course);
    else
    return res.status(404).send('cannot locate the course');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    return course;
    
});

function validateCourse(course){
    const schema = Joi.object({
        "name": Joi.string().min(3).required()
    });
    return schema.validate(course);
}

app.listen(3000, () => console.log('listeing on 3000') );