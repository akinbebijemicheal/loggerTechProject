import {
  NotionInterface,
  NotionRepositoryInterface,
} from "../interfaces/notion.interface";
import { UserInterface } from "../interfaces/user.interface";

export class NotionCore {
  constructor(private notionRepository: NotionRepositoryInterface) {}
  async findAll() {
    return await this.notionRepository.findAll();
  }
  async create(notion: NotionInterface, user_id: string) {
    return await this.notionRepository.create(notion, user_id);
  }
  async update(id: string, notion: NotionInterface) {
    return await this.notionRepository.update(id, notion);
  }
  async delete(id: string) {
    return await this.notionRepository.delete(id);
  }
  async findById(id: string) {
    return await this.notionRepository.findById(id);
  }
}
