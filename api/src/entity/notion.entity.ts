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
export class Notion {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  notionId: string;

  @Column()
  created_time: string;

  @Column()
  last_edited_time: string;

  @Column()
  names: object;

  @Column()
  assignees: object;

  @Column()
  priority: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.notions)
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
