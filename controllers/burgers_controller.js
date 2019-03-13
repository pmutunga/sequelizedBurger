// var express = require("express");
// var router = express.Router();


// Import the model (burger.js) to use its database functions.

var db = require("../models");

module.exports = function(app) {
// Create the routes and associated logic
app.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(burger_data) {
    // console.log(burger_data);
    res.render("index", {burger_data}); //need to pass index to handlebars
  });
});

app.put('/burgers/:id', function(req, res, cb) {
  // var condition = 'id = ' + req.params.id;
  // console.log(req.body);

  db.Burger.update(
    {devoured: true},
    {where: {
        id: req.params.id
      }
    })
    .then(function(dbPost){
      console.log(dbPost.devoured);
      res.redirect('/');
    });
  //   devoured: true
  // }, condition, function(burger_data) {
  //   res.redirect('/');
  // });
});

app.post('/burgers', function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
  .then(function(dbPost){
    res.redirect('/');
  });
});

}


