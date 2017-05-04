var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var restaurantsSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
});
var Restaurant = mongoose.model('Restaurant', restaurantsSchema);

module.exports = Restaurant;
