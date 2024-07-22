import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
// import { Car } from "./cars.entity";
import { Slack } from "./slack.entity";
import { Notion } from "./notion.entity";
import { Jira } from "./jira.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  @OneToMany(() => Slack, (slack) => slack.user)
  slacks: Slack[];

  @OneToMany(() => Jira, (jira) => jira.user)
  jiras: Jira[];

  @OneToMany(() => Notion, (notion) => notion.user)
  notions: Notion[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
