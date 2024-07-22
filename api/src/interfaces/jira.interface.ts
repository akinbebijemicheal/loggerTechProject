export interface JiraInterface {
  id: string;
  jiraId: string;
  status: string;
  assigneeName: string;
  assigneeEmail: string;
  priority: string;
  created: string;
  updated: string;
  created_at: Date;
  updated_at: Date;
}
export interface JiraRepositoryInterface {
  findAll(): Promise<JiraInterface[]>;
  create(Jira: JiraInterface, user_id: string): Promise<JiraInterface>;
  update(id: string, jira: JiraInterface): Promise<JiraInterface>;
  delete(id: string): Promise<JiraInterface>;
  findById(id: string): Promise<JiraInterface | null>;
}
