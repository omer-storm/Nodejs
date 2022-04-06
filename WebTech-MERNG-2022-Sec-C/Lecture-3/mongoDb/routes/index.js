var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const db = require('../models');

/* GET home page. */
router.get('/', async function(req, res) {
  const courses = await db.Course.find().sort({courseid: 1});
  res.render('index', { 
      title: 'Express', 
      courses
    });
});

/* GET home page. */
router.get('/Edit/:id', async function(req, res) {
  console.log(`courseid >> ${req.params.id}`)
  const course = await db.Course.find({courseid: req.params.id})
  console.log(course[0])
  res.render('edit', { title: 'Edit', course: course[0] });
})


/* POST Save. */
router.post('/Save', async function(req, res) {
  console.log(req.body)
  const result = await db.Course.updateOne({courseid: req.body.courseid}, 
    {
      $set: req.body
    }
  )
  console.log(result);
  //res.render('index', { title: 'Express' });
  res.redirect('/')
})
// /* GET home page. */
// router.get('/', async function(req, res) {
//   res.render('index', { title: 'Express' });
// })

module.exports = router;
