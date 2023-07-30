const {Router} = require('express');
const userRouter = new Router();
const {userController} = require("../controllers/user.ctrl");

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getOneUser);
userRouter.post('/', userController.addUser);
userRouter.delete('/:id', userController.deleteUser);
//restRouter.put('/:id', restController.updateRest);
module.exports = {userRouter};