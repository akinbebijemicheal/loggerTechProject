import { Request, Response } from "express";
import { UserAdapdter } from "../adapter/user.adapter";
import { UserCore } from "../core/user.core";
import bcrypt from "bcryptjs";
import { encrypt } from "../helpers/encrypt";
import { jiraController } from "./jiraController";
import { customRequest } from "../interfaces/request.interface";
import { slackController } from "./slackController";
import { notionController } from "./notionController";
const { faker } = require("@faker-js/faker");
const fs = require("fs");

function generateNotionData(count = 100) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      object: "page",
      id: faker.string.uuid(),
      created_time: faker.date.past({ years: 1 }).toISOString(),
      last_edited_time: faker.date.recent({ days: 10 }).toISOString(),
      properties: {
        Name: {
          title: [{ text: { content: faker.company.buzzPhrase() } }],
        },
        Status: {
          select: {
            name: faker.helpers.arrayElement([
              "Not Started",
              "In Progress",
              "Completed",
            ]),
          },
        },
        Priority: {
          select: {
            name: faker.helpers.arrayElement(["High", "Medium", "Low"]),
          },
        },
        Assignee: {
          people: [
            { name: faker.person.fullName(), email: faker.internet.email() },
          ],
        },
      },
    });
  }
  return data;
}

function generateJiraData(count = 100) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `JIRA-${i}`,
      created: faker.date.past({ years: 2 }).toISOString(),
      updated: faker.date.recent({ days: 30 }).toISOString(),
      status: {
        name: faker.helpers.arrayElement(["Open", "In Review", "Closed"]),
      },
      assignee: {
        displayName: faker.person.fullName(),
        emailAddress: faker.internet.email(),
      },
      priority: {
        name: faker.helpers.arrayElement([
          "Highest",
          "High",
          "Medium",
          "Low",
          "Lowest",
        ]),
      },
      summary: faker.lorem.sentence(),
    });
  }
  return data;
}

function generateSlackData(count = 100) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      type: "message",
      user: `U${faker.string.hexadecimal({ length: 8 }).slice(2)}`, // Corrected method for hexadecimal
      text: faker.lorem.sentence(),
      ts: `${faker.date.recent({ days: 50 }).getTime()}.000${faker.number.int({
        min: 0,
        max: 1000,
      })}`, // Corrected method for generating integers
      channel: `C${faker.string.hexadecimal({ length: 8 }).slice(2)}`, // Corrected method for hexadecimal
    });
  }
  return data;
}

// Generate data
const notionData = generateNotionData(100); // Generates 150 entries for Notion
const jiraData = generateJiraData(100); // Generates 150 entries for Jira
const slackData = generateSlackData(100); // Generates 150 entries for Slack

export class dataGenControllers {

  static async generateData(req: customRequest, res: Response) {

    try {
      let count: number = 100;
      if (req.params.count) {
        count = req.body.count
      }
      let slackD = generateSlackData(count)
      let jiraD = generateJiraData(count)
      let notionD = generateNotionData(count)

      console.log(slackD.length)
      console.log(jiraD.length)
      console.log(notionD.length)


      fs.writeFile("slackData.json", JSON.stringify(slackD, null, 2), (err: any) => {
        if (err) throw res.status(500).json({ error: err });

        console.log("Saved Slack data to slackData.json");
      });


      // Save to files
      fs.writeFile("notionData.json", JSON.stringify(jiraD, null, 2), (err: any) => {
        if (err) throw res.status(500).json({ error: err });
        console.log("Saved Notion data to notionData.json");
      });



      fs.writeFile("jiraData.json", JSON.stringify(notionD, null, 2), (err: any) => {
        if (err) throw res.status(500).json({ error: err });
        console.log("Saved Jira data to jiraData.json");
      });


      const saveJira = await jiraController.createBulk(jiraD, req.currentUser.id)
      const saveSlack = await slackController.createBulk(slackD, req.currentUser.id)
      const saveNotion = await notionController.createBulk(notionD, req.currentUser.id)

      if (!saveJira) {
        console.log("error saving jira data")
      }

      if (!saveSlack) {
        console.log("error saving slack data")
      }
      if (!saveNotion) {
        console.log("error saving notion data")
      }


      res.status(201).json({
        message: `success generating data`,
      });

    } catch (error) {
      res.status(500).json({ error: "server error: " + error });
    }
  }

}
