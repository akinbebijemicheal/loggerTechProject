import express from "express";
const Router = express.Router();

import { jiraController } from "../controllers/jiraController";
import { AuthMiddleware } from "../middlewares/authmid";

Router.get("/jiraIssues", AuthMiddleware.isAuthenticated, jiraController.findAll);
Router.post("/jiraIssue", AuthMiddleware.isAuthenticated, jiraController.create);
Router.put("/jiraIssue/:id", AuthMiddleware.isAuthenticated, jiraController.update);
Router.delete("/jiraIssue/:id", AuthMiddleware.isAuthenticated, jiraController.delete);
Router.get("/jiraIssue/:id", AuthMiddleware.isAuthenticated, jiraController.findById);

export { Router };
