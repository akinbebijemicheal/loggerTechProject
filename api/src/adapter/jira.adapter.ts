import { AppDataSource } from "../database/config";
import { Jira } from "../entity/jira.entity";
import { User } from "../entity/user.entity";
import { JiraRepositoryInterface } from "../interfaces/jira.interface";
import { UserInterface } from "../interfaces/user.interface";

export class JiraAdapter implements JiraRepositoryInterface {
  async findAll() {
    const jiraRepository = AppDataSource.getRepository(Jira);
    const jiras = await jiraRepository.find();

    return jiras;
  }
  async create(jira: Jira, user_id: string) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: user_id });
    const newJira = new Jira();
    newJira.jiraId = jira.jiraId;
    newJira.status = jira.status;
    newJira.created = jira.created;
    newJira.updated = jira.updated;
    newJira.priority = jira.priority;
    newJira.summary = jira.summary;
    newJira.assigneeEmail = jira.assigneeEmail;
    newJira.assigneeName = jira.assigneeName;

 
    newJira.user = user as User;
    const jiraRepository = AppDataSource.getRepository(Jira);
    await jiraRepository.save(newJira, { transaction: false });

    return newJira;
  }
  async update(id: string, jira: Jira) {
    const jiraRepository = AppDataSource.getRepository(Jira);
    const jiraToUpdate = await jiraRepository.findOneBy({ id });
    if (!jiraToUpdate) {
      throw new Error("Jira not found");
    }
    jiraToUpdate.priority = jira.priority;
    jiraToUpdate.summary = jira.summary;
    jiraToUpdate.status = jira.status;
    jiraToUpdate.assigneeEmail = jira.
    assigneeEmail;
    jiraToUpdate.assigneeName = jira.assigneeName;
    await jiraRepository.save(jiraToUpdate);

    return jiraToUpdate;
  }
  async delete(id: string) {
    const jiraRepository = AppDataSource.getRepository(Jira);
    const jiraToDelete = await jiraRepository.findOneBy({ id });
    if (!jiraToDelete) {
      throw new Error("Jira not found");
    }
    await jiraRepository.delete({id: id});

    return jiraToDelete;
  }
  async findById(id: string) {
    const jiraRepository = AppDataSource.getRepository(Jira);
    return await jiraRepository.findOneBy({ id });
  }
}
