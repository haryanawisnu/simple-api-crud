var express = require('express');
var app = express();

//routes
var foods = require('./routes/foods');
var restaurants = require('./routes/restaurants');

//Body Parser
var bodyParser = require('body-parser');

//DB Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/livecode2');

//Init Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//HTTP Route
app.use('/foods', foods);
app.use('/restaurants', restaurants);

app.listen(3000)
