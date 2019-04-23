const express = require('express');
const app = express();


var jsonData = {
  name: 'Leia',
  darkside: 'false',
  age: 29
};


// define root
// get is http method - listening for requests
app.get('/', function(req, res){
  res.status(200).json({message: 'Hello World!' });
});


app.get('/Leia', function(req, res){
res.status(200).json(jsonData);
});


// starting server at port 3000 (start from terminal: node app.js, to stop control + c)

app.listen(3000, function(){
  console.log('App running on port' + this.address().port);
});
