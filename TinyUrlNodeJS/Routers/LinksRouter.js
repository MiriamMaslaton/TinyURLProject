import express from "express";
import LinksController from '../Controllers/LinksController.js';

const LinksRouter=express.Router();

LinksRouter.get('/', LinksController.getList)
LinksRouter.get('/:id', LinksController.getById)
LinksRouter.get('/data/:id', LinksController.decodeData)
LinksRouter.post('/',LinksController.addLink )
LinksRouter.put('/:id',LinksController.updateLink )
LinksRouter.delete('/:id',LinksController.deleteLink )

export default LinksRouter;