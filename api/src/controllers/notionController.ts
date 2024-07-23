import { Request, Response } from "express";
import { NotionAdapter } from "../adapter/notion.adapter";
import { NotionCore } from "../core/notion.core";
import { customRequest } from "../interfaces/request.interface";
import { UserCore } from "../core/user.core";
import { UserAdapdter } from "../adapter/user.adapter";

export class notionController {
  static async findAll(req: Request, res: Response) {
    try {
      const notionService = new NotionCore(new NotionAdapter());
      const notions = await notionService.findAll();
      res.status(200).json(notions);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async create(req: customRequest, res: Response) {
    try {
      const notionService = new NotionCore(new NotionAdapter());
      let data: any;
      if (req.body.id) {
        req.body.notionId = req.body.id

      }

      const { id, properties } = req.body
      data = req.body
      data.names =properties?.Name?.title
      data.status =properties?.Status?.select?.name
      data.priority =properties?.Priority?.select?.name
      data.assignees =properties?.Assignee?.people
      // console.log(properties)
      const notion = await notionService.create(data, req.currentUser.id);

      res.status(201).json({
        notion,
      });
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async update(req: Request, res: Response) {
    try {

      const notionService = new NotionCore(new NotionAdapter());
      let data: any;
      if (req.body.id) {
        req.body.notionId = req.body.id

      }

      const { id,properties } = req.body
      data = req.body
      data.names =properties?.Name
      data.status =properties?.Status?.select?.name
      data.priority =properties?.Priority?.select?.name
      data.assignees =properties?.Assignee?.people
      const notion = await notionService.update(req.params.id, data);
      res.status(200).json(notion);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const notionService = new NotionCore(new NotionAdapter());

      const notion = await notionService.delete(req.params.id);
      res.status(200).json(notion);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }

  static async findById(req: Request, res: Response) {
    try {
      const notionService = new NotionCore(new NotionAdapter());
      const notion = await notionService.findById(req.params.id);
      res.status(200).json(notion);
    } catch (error) {
      res.status(500).json({ error:  "server error: " + error });
    }
  }
}
