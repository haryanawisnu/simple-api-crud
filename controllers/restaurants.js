var Restaurant = require('../models/restaurants');

module.exports = {
  getall: (req, res, next) => {
    Restaurant.find().exec(function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  },
  create: (req, res, next) => {
    Restaurant.create({
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.open_status
    }, function(error, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  delete: (req, res, next) => {
    let id = req.params.id;
    Restaurant.remove({
      _id: id
    }, function(err) {
      if (!err) {
        res.send(`Success remove with id ${id}`);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  update: (req, res, next) => {
    let id = req.params.id;
    Restaurant.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        Restaurant.update({
          _id: id
        }, {
          $set: {
            name: req.body.name || result.name,
            owner: req.body.owner || result.owner,
            address: req.body.address || result.address,
            open_status: req.body.open_status || result.open_status
          }
        }, function(err, result) {
          if (result) {
            res.json(result);
          } else {
            res.send(`ERR Update :\n ${err}`);
          }
        });
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  }
}
