import { AppDataSource } from "../database/config";
import { Slack } from "../entity/slack.entity";
import { User } from "../entity/user.entity";
import { SlackRepositoryInterface } from "../interfaces/slack.interface";
import { UserInterface } from "../interfaces/user.interface";

export class SlackAdapter implements SlackRepositoryInterface {
  async findAll() {
    const slackRepository = AppDataSource.getRepository(Slack);
    const slacks = await slackRepository.find();

    return slacks;
  }
  async create(slack: Slack, user_id: string) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: user_id });
    const newSlack = new Slack();
    newSlack.type = slack.type;
    newSlack.userOriginal = slack.userOriginal;
    newSlack.text = slack.text;
    newSlack.ts = slack.ts;
    newSlack.channel = slack.channel;

   
    newSlack.user = user as User;
    const slackRepository = AppDataSource.getRepository(Slack);
    await slackRepository.save(newSlack, { transaction: false });

    return newSlack;
  }
  async update(id: string, slack: Slack) {
    const slackRepository = AppDataSource.getRepository(Slack);
    const slackToUpdate = await slackRepository.findOneBy({ id });
    if (!slackToUpdate) {
      throw new Error("Slack not found");
    }
    slackToUpdate.type = slack.type;
    slackToUpdate.userOriginal = slack.userOriginal;
    slackToUpdate.text = slack.text;
    slackToUpdate.ts = slack.ts;
    slackToUpdate.channel = slack.channel;
    await slackRepository.save(slackToUpdate);

    return slackToUpdate;
  }
  async delete(id: string) {
    const slackRepository = AppDataSource.getRepository(Slack);
    const slackToDelete = await slackRepository.findOneBy({ id });
    if (!slackToDelete) {
      throw new Error("Slack not found");
    }
    await slackRepository.delete({id: id});

    return slackToDelete;
  }
  async findById(id: string) {
    const slackRepository = AppDataSource.getRepository(Slack);
    return await slackRepository.findOneBy({ id });
  }
}
