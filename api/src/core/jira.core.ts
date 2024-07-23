import {
  JiraInterface,
  JiraRepositoryInterface,
} from "../interfaces/jira.interface";
import { UserInterface } from "../interfaces/user.interface";

export class JiraCore {
  constructor(private jiraRepository: JiraRepositoryInterface) {}
  async findAll() {
    return await this.jiraRepository.findAll();
  }
  async create(jira: JiraInterface, user_id: string) {
    return await this.jiraRepository.create(jira, user_id);
  }
  async update(id: string, jira: JiraInterface) {
    return await this.jiraRepository.update(id, jira);
  }
  async delete(id: string) {
    return await this.jiraRepository.delete(id);
  }
  async findById(id: string) {
    return await this.jiraRepository.findById(id);
  }
}
