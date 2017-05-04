//require module DB mongoose
var mongoose = require('mongoose');
//get Schema from mongoose
var Schema = mongoose.Schema;
//init Schema Restaurant
var restaurantsSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
});
//set model mongoose from Schema Restaurant
var Restaurant = mongoose.model('Restaurant', restaurantsSchema);

//export model Restaurant
module.exports = Restaurant;
