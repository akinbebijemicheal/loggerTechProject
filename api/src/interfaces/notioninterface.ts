export interface NotionInterface {
  id: string;
  notionId: string;
  created_timemodel: string;
  last_edited_time: string;
  status: string;
  priority: string;
  names: object;
  assignees: object;
  created_at: Date;
  updated_at: Date;
}
export interface NotionRepositoryInterface {
  findAll(): Promise<NotionInterface[]>;
  create(notion: NotionInterface, user_id: string): Promise<NotionInterface>;
  update(id: string, notion: NotionInterface): Promise<NotionInterface>;
  delete(id: string): Promise<NotionInterface>;
  findById(id: string): Promise<NotionInterface | null>;
}
