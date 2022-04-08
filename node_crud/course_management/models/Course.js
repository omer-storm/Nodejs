const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const courseSchema = new Schema({
    code: String,
    courseid: Number,
    crhr: Number,
    semester: Number,
    title: String   
});

module.exports = model('Course', courseSchema);
