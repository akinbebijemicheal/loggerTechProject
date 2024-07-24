import express from "express";
export const Router = express.Router();
import { userControllers } from "../controllers/userControlers";
import { AuthMiddleware } from "../middlewares/authmid";

Router.get("/users", userControllers.findAll);
Router.post("/signin", userControllers.create);
Router.post("/login", userControllers.login);
Router.post("/logout", userControllers.logout);
Router.get("/user/:id", AuthMiddleware.isAuthenticated, userControllers.findById);
Router.get("/me", AuthMiddleware.isAuthenticated, userControllers.findById);
Router.get("/user/:email", AuthMiddleware.isAuthenticated, userControllers.findByEmail);
Router.put("/updateUser", AuthMiddleware.isAuthenticated, userControllers.update);
Router.delete("/user/:id", AuthMiddleware.isAuthenticated, userControllers.delete);
