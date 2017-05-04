//require module Express
var express = require('express');
var app = express();

//require folder routes
var foods = require('./routes/foods');
var restaurants = require('./routes/restaurants');

//require module Body Parser
var bodyParser = require('body-parser');

//require module DB Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/livecode2');

//Init module Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//init HTTP Route
app.use('/foods', foods);
app.use('/restaurants', restaurants);

//App listes localhost:3000
app.listen(3000)
