import {
  SlackInterface,
  SlackRepositoryInterface,
} from "../interfaces/slack.interface";
import { UserInterface } from "../interfaces/user.interface";

export class SlackCore {
  constructor(private slackRepository: SlackRepositoryInterface) {}
  async findAll() {
    return await this.slackRepository.findAll();
  }
  async create(slack: SlackInterface, user_id: string) {
    return await this.slackRepository.create(slack, user_id);
  }
  async update(id: string, slack: SlackInterface) {
    return await this.slackRepository.update(id, slack);
  }
  async delete(id: string) {
    return await this.slackRepository.delete(id);
  }
  async findById(id: string) {
    return await this.slackRepository.findById(id);
  }
}
