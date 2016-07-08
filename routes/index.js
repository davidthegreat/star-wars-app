var moviesJSON = require('../movies.json');


//home
exports.home = function(req, res){

  var movies = moviesJSON.movies;

  res.render('home',{
    title : "Star Wars Movies",
    movies : movies
  });
};

//movie single
exports.movie_single = function(req, res){
  var episode_number = req.params.episode_number;
  res.send("This is the page for episode " + episode_number);
};

//notFound
exports.notFound = function(req, res){
  res.send("this is not the pafe that you are looking for")
};
