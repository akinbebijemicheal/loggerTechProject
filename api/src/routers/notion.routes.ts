import express from "express";
const Router = express.Router();

import { notionController } from "../controllers/notionController";
import { AuthMiddleware } from "../middlewares/authmid";

Router.get("/notions", AuthMiddleware.isAuthenticated, notionController.findAll);
Router.post("/notion", AuthMiddleware.isAuthenticated, notionController.create);
Router.put("/notion/:id", AuthMiddleware.isAuthenticated, notionController.update);
Router.delete("/notion/:id", AuthMiddleware.isAuthenticated, notionController.delete);
Router.get("/notion/:id", AuthMiddleware.isAuthenticated, notionController.findById);

export { Router };
