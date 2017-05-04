var express = require('express');
var router = express.Router();
var restaurantsControllers = require('../controllers/restaurants');

router.get('/', restaurantsControllers.getall);
router.post('/', restaurantsControllers.create);
router.delete('/:id', restaurantsControllers.delete);
router.put('/:id', restaurantsControllers.update);

module.exports = router;
