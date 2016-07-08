var express = require('express')
var app = express();


///routes

//home

app.get('/', function(req, res){
  res.send("This is a server response on the home page");
});

//movie single
app.get('/star_wars_episode/:episode_number?', function(req, res){
  var episode_number = req.params.episode_number;
  res.send("This is the page for episode " + episode_number);
});

//notFound
app.get('*', function(req, res){
  res.send("this is not the pafe that you are looking for")
})

app.listen(3000, function(){
  console.log("The app is  running on locallhost")
});
