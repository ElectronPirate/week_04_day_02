var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner');

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.status(200).json('respond with a resource');
// });

// router.get('/', function(req, res){
//   SqlRunner.run('SELECT * FROM characters WHERE darkside = true').then(result =>{
//     res.status(200).json(result.rows);
//   });
// });
router.get('/', function(req, res){
  SqlRunner.run('SELECT * FROM characters INNER JOIN light_sabres ON characters.id = light_sabres.owner_id').then(result =>{
    res.status(200).json(result.rows);
  });
});




module.exports = router;
