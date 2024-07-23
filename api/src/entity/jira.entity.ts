import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Jira {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  jiraId: string;

  @Column()
  status: string;

  @Column()
  assigneeName: string;

  @Column()
  assigneeEmail: string;

  @Column()
  priority: string;

  
  @Column("varchar", { length: 65000 })
  summary: string;

  @Column()
  created: string;

  @Column()
  updated: string;

  @ManyToOne(() => User, (user) => user.jiras)
  @JoinColumn({ name: "user_id" })
  user: User;



  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
