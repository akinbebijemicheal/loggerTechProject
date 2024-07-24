import { AppDataSource } from "../database/config";
import { Notion } from "../entity/notion.entity";
import { User } from "../entity/user.entity";
import { NotionRepositoryInterface } from "../interfaces/notion.interface";
import { UserInterface } from "../interfaces/user.interface";

export class NotionAdapter implements NotionRepositoryInterface {
  async findAll() {
    const notionRepository = AppDataSource.getRepository(Notion);
    const notions = await notionRepository.find();

    return notions;
  }
  async create(notion: Notion, user_id: string) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: user_id });
    const newNotion = new Notion();
    newNotion.notionId = notion.notionId;
    newNotion.created_time = notion.created_time;
    newNotion.last_edited_time = notion.last_edited_time;
    newNotion.status = notion.status;
    newNotion.priority = notion.priority;
    newNotion.names = notion.names;
    newNotion.assignees = notion.assignees;

    newNotion.user = user as User;
    const notionRepository = AppDataSource.getRepository(Notion);
    await notionRepository.save(newNotion, { transaction: false });

    return newNotion;
  }
  async update(id: string, notion: Notion) {
    const notionRepository = AppDataSource.getRepository(Notion);
    const notionToUpdate = await notionRepository.findOneBy({ id });
    if (!notionToUpdate) {
      throw new Error("Notion not found");
    }
    notionToUpdate.status = notion.status;
    notionToUpdate.priority = notion.priority;
    notionToUpdate.names = notion.names;
    notionToUpdate.assignees = notion.assignees;
    await notionRepository.save(notionToUpdate);

    return notionToUpdate;
  }
  async delete(id: string) {
    const notionRepository = AppDataSource.getRepository(Notion);
    const notionToDelete = await notionRepository.findOneBy({ id });
    if (!notionToDelete) {
      throw new Error("Notion not found");
    }
    await notionRepository.delete({id: id});

    return notionToDelete;
  }
  async findById(id: string) {
    const notionRepository = AppDataSource.getRepository(Notion);
    return await notionRepository.findOneBy({ id });
  }
}
