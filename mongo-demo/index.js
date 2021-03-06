const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/playground').then( () => {
    console.log('Connected to host');
}).catch(err => {
    console.log("Error: ",err);
});

const courseSchema = new mongoose.Schema({
name: String,
author: String,
tags: [String],
date: { type: Date, default: Date.now },
isPublished: Boolean
});

const Course = mongoose.model('course',courseSchema);

async function saveCourses() {
const course = new Course({
    name: "React JS",
    author: "Mosh Hamdani",
    tags: ['react','backend'],
    isPublished: true
});

const result = await course.save();
console.log(result);

}

async function getCourses() {
    const courses = await Course.find();
    console.log(courses);
    courses.forEach(function (course) 
        {
            console.log(course.name);
        })

}

getCourses();