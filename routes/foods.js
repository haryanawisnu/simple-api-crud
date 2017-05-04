//require module express
var express = require('express');
//get Roter from module express
var router = express.Router();
//require folder controllers
var foodsControllers = require('../controllers/foods');

//setting HTTP methods to Router
router.get('/', foodsControllers.getall);
router.get('/:id', foodsControllers.getone);
router.post('/', foodsControllers.create);
router.delete('/:id', foodsControllers.delete);
router.put('/:id', foodsControllers.update);

//export Router
module.exports = router;
