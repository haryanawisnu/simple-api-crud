var express = require('express');
var router = express.Router();
var foodsControllers = require('../controllers/foods');

router.get('/', foodsControllers.getall);
router.get('/:id', foodsControllers.getone);
router.post('/', foodsControllers.create);
router.delete('/:id', foodsControllers.delete);
router.put('/:id', foodsControllers.update);

module.exports = router;
