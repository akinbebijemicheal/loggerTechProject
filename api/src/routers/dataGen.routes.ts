import express from "express";
const Router = express.Router();

import { dataGenControllers } from "../controllers/dataGenController";
import { AuthMiddleware } from "../middlewares/authmid";


Router.get("/dataGenerate/:count", AuthMiddleware.isAuthenticated, dataGenControllers.generateData);

export { Router };
