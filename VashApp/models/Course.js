const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const courseSchema = new Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean   
});

module.exports = model('Course', courseSchema);
