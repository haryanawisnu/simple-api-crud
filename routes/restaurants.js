//require module express
var express = require('express');
//get Roter from module express
var router = express.Router();
//require folder controllers
var restaurantsControllers = require('../controllers/restaurants');

//setting HTTP methods to Router
router.get('/', restaurantsControllers.getall);
router.get('/:id', restaurantsControllers.getone);
router.post('/', restaurantsControllers.create);
router.delete('/:id', restaurantsControllers.delete);
router.put('/:id', restaurantsControllers.update);

//export Router
module.exports = router;
