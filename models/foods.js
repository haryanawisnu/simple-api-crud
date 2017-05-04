//require module DB mongoose
var mongoose = require('mongoose');
//get Schema from mongoose
var Schema = mongoose.Schema;
//init Schema Foods
var foodsSchema = new Schema({
  name: String,
  price: Number,
  expire_date: Date
});
//set model mongoose from Schema Food
var Food = mongoose.model('Food', foodsSchema);

//export model Food
module.exports = Food;
