const { Router } = require('express');
const { restController, orderController, userController } = require('./controller');
//const { getRests } = require('./controller');
const restRouter = new Router();
// const orderRouter = new Router();
// const userRouter = new Router();


restRouter.get('/', restController.getRests);
restRouter.get('/:id', restController.getOneRest);
restRouter.post('/', restController.addRest);
//restRouter.delete('/:id', restController.deleteOneRest);
//restRouter.put('/:id', restController.updateRest);
module.exports = { restRouter };
