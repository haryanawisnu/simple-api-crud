var express = require('express');
//routes
var foods = require('./routes/foods');
var restaurants = require('./routes/restaurants');

//DB Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/livecode2');

//HTTP Route
app.use('/foods', foods);
app.use('/restaurants', restaurants);

app.listen(3000)
