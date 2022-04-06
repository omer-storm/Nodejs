var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const courses = await db.Course.find();
  res.render('index', { title: 'Course Management', courses });
});

router.get('/Edit/:id', async function(req, res) {
  const course = await db.Course.find({id: req.params.id})
  res.render('edit', { title: 'Edit', course: course[0] });
});

router.post('/Save', async function(req, res) {
  const result = await db.Course.updateOne({id: req.body.id}, 
    {
      $set: req.body
    }
  )
  res.redirect('/')
})

module.exports = router;
