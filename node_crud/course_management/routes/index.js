var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const db = require('../models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST' });
});

/* GET home page. */
router.get('/xhr-list', async function(req, res) {
  const courses = await db.Course.find().sort({courseid: 1});
  res.status(200).json(courses)
})

/* GET home page. */
router.get('/xhr-edit', async function(req, res) {
  const course = await db.Course.find({courseid: req.query.courseid});
  res.status(200).json(course[0])
})

router.get('/query-live', async function(req, res) {
  console.log(req.query.query_live);
  // const courses = await db.Course.find({title: { '$regex' : "^"+req.query.query_live, '$options' : 'i'} });
  const courses = await db.Course.find({"$or": [{title:{ '$regex' : "^"+req.query.query_live, '$options' : 'i'}},
  {title:{ '$regex' : req.query.query_live, '$options' : 'i'}}
]});
  res.status(200).json(courses);
})

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


// /* GET home page. */
// router.get('/', async function(req, res) {
//   res.render('index', { title: 'Express' });
// })
module.exports = router;
