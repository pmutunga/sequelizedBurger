var express = require("express");
var router = express.Router();

// Import the model (cburger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create the routes and associated logic
router.get("/", function(req, res) {
  burger.selectAll(function(burger_data) {
    
    console.log(burger_data);
    res.render("index", {burger_data}); //need to pass index to handlebars
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(burger_data) {
    res.redirect('/');
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(burger_data) {
    res.redirect('/');
  });
});


module.exports = router;


