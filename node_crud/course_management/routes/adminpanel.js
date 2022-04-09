var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const db = require('../models');
var fs = require('fs');
var path = require('path');

var multer = require('multer');


router.get('/', async function(req, res) {
    var images = await db.Image.find();
    console.log(images);
    res.render('adminpanel', { images });

});

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './public/uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, Math.random().toString().substr(2, 8)+""+file.originalname);
    }
});
var upload = multer({storage: storage}).array('files', 12);
router.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        console.log(req.files[0].filename);
        var obj = {
            title: req.body.name,
            desc: req.body.desc,
            name: req.files[0].filename               
        }
        db.Image.create(obj);
        console.log(obj);
        if (err) {
            return res.end("Something went wrong:(");
        }
        res.end("Upload completed.");
    });
})

module.exports = router;
