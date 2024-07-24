import { Request, Response } from "express";
import { UserAdapdter } from "../adapter/user.adapter";
import { UserCore } from "../core/user.core";
import bcrypt from "bcryptjs";
import { encrypt } from "../helpers/encrypt";
import { customRequest } from "../interfaces/request.interface";

export class userControllers {
  static async findAll(req: Request, res: Response) {
    try {
      const userService = new UserCore(new UserAdapdter());
      const users = await userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async create(req: Request, res: Response) {
    try {
      console.log(req.body)
      const userService = new UserCore(new UserAdapdter());
      const user = await userService.create(req.body);

      res.status(201).json({
        user,
      });
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async update(req: customRequest, res: Response) {
    try {
      const userService = new UserCore(new UserAdapdter());
      const user = await userService.update(req.currentUser.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const userService = new UserCore(new UserAdapdter());

      const user = await userService.delete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async findById(req: Request, res: Response) {
    try {
      const userService = new UserCore(new UserAdapdter());
      const user = await userService.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }

  static async findMe(req: customRequest, res: Response) {
    try {
      const userService = new UserCore(new UserAdapdter());
      const user = await userService.findById(req.currentUser.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async findByEmail(req: Request, res: Response) {
    try {
      const userService = new UserCore(new UserAdapdter());
      const user = await userService.findByEmail(req.params.email);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(email, password)

    const userService = new UserCore(new UserAdapdter());
    const user = await userService.findByEmail(email);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // generate token
    const token = encrypt.generateToken({ id: user.id });
    res.status(200).json({ message: "Login successful", token });
  }

  static async logout(req: Request, res: Response) {

    res.status(200).json({ message: "Login successful" });
  }

}

