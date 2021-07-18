import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Games } from "./Games";

@Entity("platforms")
class Platforms {
  @PrimaryColumn("integer")
  @PrimaryGeneratedColumn("increment")
  id_platform: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Platforms };
