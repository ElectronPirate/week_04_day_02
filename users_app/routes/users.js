var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  SqlRunner.run("SELECT * FROM users ORDER BY name ASC").then(result =>{
    res.status(200).json(result.rows);
  });
});

// GET user listing

router.get('/', function(req, res){
  res.status(200).json('respond with a list of users');
});

// GET one users
// params is list of /:id

// router.get('/:id', function(req, res){
//   res.status(200).json(req.params.id);
// });

router.get('/:id', function(req, res){
  SqlRunner.run('SELECT users WHERE id = $1', [req.params.id]).then(result => {
    res.status(200).json(result.rows);
  });
});

// POST add new data - no need for params.id when creating new data

router.post('/',function(req, res){
  SqlRunner.run("INSERT INTO users (name, email) VALUES ($1, $2)", [req.body.name, req.body.email])
    .then((result) => {
      res.status(201).json(result);
    });
});

// PUT update data

router.put('/:id',function(req, res){
  res.status(200).json(`user updated ${req.params.id}`);
});

// DELETE data

router.delete('/:id',function(req, res){
  res.status(200).json(`user deleted ${req.params.id}`);
});

module.exports = router;
