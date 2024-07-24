import express, * as express_test from "express"

const app = express ? express() : express_test()
import dotenv from "dotenv";
import "reflect-metadata";
import { AppDataSource } from "./database/config";
import { Router as userRouter } from "./routers/user.routes";
import { Router as notionRouter } from "./routers/notion.routes";
import { Router as jiraRouter } from "./routers/jira.routes";
import { Router as slackRouter } from "./routers/slack.routes";
import { Router as dataGenRouter } from "./routers/dataGen.routes"
var cors = require('cors')




dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
app.use(cors()) // Use this after the variable declaration
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", notionRouter);
app.use("/api", jiraRouter);
app.use("/api", slackRouter);
app.use("/api", dataGenRouter);
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
