import express from "express";
import UsersController from '../Controllers/UsersController.js';

const UsersRouter=express.Router();

UsersRouter.get('/', UsersController.getList)
UsersRouter.get('/:id', UsersController.getById)
UsersRouter.post('/',UsersController.addUser )
UsersRouter.post('/login',UsersController.login )
UsersRouter.put('/:id',UsersController.updateUser )
UsersRouter.delete('/:id',UsersController.deleteUser )

export default UsersRouter;