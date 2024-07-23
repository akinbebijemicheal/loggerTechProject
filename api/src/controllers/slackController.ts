import { Request, Response } from "express";
import { SlackAdapter } from "../adapter/slack.adapter";
import { SlackCore } from "../core/slack.core";
import { customRequest } from "../interfaces/request.interface";
import { UserCore } from "../core/user.core";
import { UserAdapdter } from "../adapter/user.adapter";

export class slackController {
  static async findAll(req: Request, res: Response) {
    try {
      const slackService = new SlackCore(new SlackAdapter());
      const slacks = await slackService.findAll();
      res.status(200).json(slacks);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async create(req: customRequest, res: Response) {
    try {
      const slackService = new SlackCore(new SlackAdapter());
      if(req.body.user){
        req.body.userOriginal = req.body.user

      }
      const slack = await slackService.create(req.body, req.currentUser.id);

      res.status(201).json({
        slack,
      });
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const slackService = new SlackCore(new SlackAdapter());
      if(req.body.user){
        req.body.userOriginal = req.body.user

      }
      const slack = await slackService.update(req.params.id, req.body);
      res.status(200).json(slack);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const slackService = new SlackCore(new SlackAdapter());

      const slack = await slackService.delete(req.params.id);
      res.status(200).json(slack);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }

  static async findById(req: Request, res: Response) {
    try {
      const slackService = new SlackCore(new SlackAdapter());
      const slack = await slackService.findById(req.params.id);
      res.status(200).json(slack);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
}
