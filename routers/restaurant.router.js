const {Router} = require('express');
const {restController} = require('../controllers/restaurant.ctrl');
//const { getRests } = require('./controller');
const restRouter = new Router();
// const orderRouter = new Router();
// const userRouter = new Router();


restRouter.get('/', restController.getAllRestaurants);
 restRouter.get('/:id', restController.getOneRestaurant);
restRouter.post('/', restController.addRestuarant);
restRouter.delete('/:id', restController.deleteRestaurant);
//restRouter.put('/:id', restController.updateRest);
module.exports = {restRouter};
