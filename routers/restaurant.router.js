const {Router} = require('express');
const {restController} = require('../controllers/restaurant.ctrl');
const restRouter = new Router();


restRouter.get('/', restController.getAllRestaurants);
restRouter.get('/:id', restController.getOneRestaurant);
restRouter.post('/', restController.addRestuarant);
restRouter.delete('/:id', restController.deleteRestaurant);
//restRouter.put('/:id', restController.updateRest);
module.exports = {restRouter};
