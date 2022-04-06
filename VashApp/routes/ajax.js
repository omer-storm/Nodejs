var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ajax/index', { title: 'Ajax Course Management' });
});


router.get('/xhr-list', async function(req, res, next) {
  const courses = await db.Course.find();
  res.render('ajax/list', { courses });
});

router.get('/xhr-edit', async function(req, res, next) {
  
  const course = await db.Course.find({courseid: req.query.courseid});
  res.render('ajax/edit', { course: course[0] });


});

/* POST Save. */
router.post('/xhr-save', async function(req, res) {
  console.log(req.body)
  const result = await db.Course.updateOne({courseid: req.body.courseid}, 
    {
      $set: req.body
    }
  )
  console.log(result);
  res.send(result);
  //res.render('index', { title: 'Express' });
  // res.redirect('/')
})


module.exports = router;
