var Food = require('../models/foods');

module.exports = {
  getall: (req, res, next) => {
    Food.find().exec(function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  },
  getone: (req, res, next) => {
    let id = req.params.id;
    Food.findOne({
      _id: id
    }).exec(function(err, result) {
      res.json(result);
    });
  },
  create: (req, res, next) => {
    Food.create({
      name: req.body.name,
      price: req.body.price,
      expire_date: req.body.expire_date
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
    Food.remove({
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
    Food.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        Food.update({
          _id: id
        }, {
          $set: {
            name: req.body.name || result.name,
            price: req.body.price || result.price,
            expire_date: req.body.expire_date || result.expire_date
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
