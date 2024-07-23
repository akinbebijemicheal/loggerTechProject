export interface SlackInterface {
  id: string;
  type: string;
  userOriginal: string;
  text: string;
  ts: string;
  channel: string;
  created_at: Date;
  updated_at: Date;
}
export interface SlackRepositoryInterface {
  findAll(): Promise<SlackInterface[]>;
  create(slack: SlackInterface, user_id: string): Promise<SlackInterface>;
  update(id: string, slack: SlackInterface): Promise<SlackInterface>;
  delete(id: string): Promise<SlackInterface>;
  findById(id: string): Promise<SlackInterface | null>;
}
