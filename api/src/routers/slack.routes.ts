import express from "express";
const Router = express.Router();

import { slackController } from "../controllers/slackController";
import { AuthMiddleware } from "../middlewares/authmid";

Router.get("/slackMessages", AuthMiddleware.isAuthenticated, slackController.findAll);
Router.post("/saveSlackMessage", AuthMiddleware.isAuthenticated, slackController.create);
Router.put("/slackMessage/:id", AuthMiddleware.isAuthenticated, slackController.update);
Router.delete("/slackMessage/:id", AuthMiddleware.isAuthenticated, slackController.delete);
Router.get("/slack/:id", AuthMiddleware.isAuthenticated, slackController.findById);

export { Router };
