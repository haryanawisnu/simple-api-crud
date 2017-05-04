var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var foodsSchema = new Schema({
  name: String,
  price: Number,
  expire_date: Date
});
var Food = mongoose.model('Food', foodsSchema);

module.exports = Food;
