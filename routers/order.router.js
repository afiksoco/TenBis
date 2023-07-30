const { Router } = require('express');
const orderRouter = new Router();
const {orderController} = require('../controllers/order.ctrl');

orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:id', orderController.getOneOrder);
orderRouter.post('/', orderController.addOrder);
orderRouter.delete('/:id', orderController.deleteOrder);
//orderRouter.put('/:id', orderController.updateOrder);
module.exports = { orderRouter };
