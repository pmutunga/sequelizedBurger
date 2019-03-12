//create boiler plate for node server

var express = require('express');
var bodyParser = require('body-parser'); // included in Express
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.

// app.use(express.static(__dirname + '/public')); 

app.use(express.static(process.cwd() + '/public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//register a Handlebars view engine using express-handlebars

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

