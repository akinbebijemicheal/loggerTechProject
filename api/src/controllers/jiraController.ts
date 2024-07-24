import { Request, Response } from "express";
import { JiraAdapter } from "../adapter/jira.adapter";
import { JiraCore } from "../core/jira.core";
import { customRequest } from "../interfaces/request.interface";
import { UserCore } from "../core/user.core";
import { UserAdapdter } from "../adapter/user.adapter";

export class jiraController {
  static async findAll(req: Request, res: Response) {
    try {
      const jiraService = new JiraCore(new JiraAdapter());
      const jiras = await jiraService.findAll();
      res.status(200).json(jiras);
    } catch (error) {
      res.status(500).json({ error: "server error: " + error });
    }
  }
  static async create(req: customRequest, res: Response) {
    try {
      const jiraService = new JiraCore(new JiraAdapter());
      let data: any;
      if (req.body.id) {
        req.body.jiraId = req.body.id

      }

      const { id, status, assignee, priority } = req.body
      data = req.body
      data.status = status?.name
      data.assigneeEmail = assignee?.emailAddress
      data.assigneeName = assignee?.displayName
      data.priority = priority.name

      
      const jira = await jiraService.create(data, req.currentUser.id);

      res.status(201).json({
        jira,
      });
    } catch (error) {
      res.status(500).json({ error: "server error: " + error });
    }
  }

  static async createBulk(bulkData: any, userId: any) {
    try {
      let data: any;
      for (let datum of bulkData) {
        const jiraService = new JiraCore(new JiraAdapter());

        if (datum.id) {
          datum.jiraId = datum.id

        }

        const { id, status, assignee, priority } = datum
        data = datum
        data.status = status?.name
        data.assigneeEmail = assignee?.emailAddress
        data.assigneeName = assignee?.displayName
       await jiraService.create(data, userId);
      }
      return true
    } catch (error) {
      throw new TypeError('Error saving jira data');
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const jiraService = new JiraCore(new JiraAdapter());
      let data: any;
      if (req.body.id) {
        req.body.jiraId = req.body.id

      }

      const { id, status, assignee, priority } = req.body
      data = req.body
      data.status = status?.name
      data.assigneeEmail = assignee?.emailAddress
      data.assigneeName = assignee?.displayName
      const jira = await jiraService.update(req.params.id, data);
      res.status(200).json(jira);
    } catch (error) {
      res.status(500).json({ error: "server error: " + error });
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const jiraService = new JiraCore(new JiraAdapter());

      const jira = await jiraService.delete(req.params.id);
      res.status(200).json(jira);
    } catch (error) {
      res.status(500).json({ error: "server error: " + error });
    }
  }

  static async findById(req: Request, res: Response) {
    try {
      const jiraService = new JiraCore(new JiraAdapter());
      const jira = await jiraService.findById(req.params.id);
      res.status(200).json(jira);
    } catch (error) {
      res.status(500).json({ error: "server error: " + error });
    }
  }
}
