import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Double,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Platforms } from "./Platforms";

@Entity("games")
class Games {
  @PrimaryColumn("integer")
  @PrimaryGeneratedColumn("increment")
  id_game: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("double")
  value: Double;

  @Column()
  image: string;

  @ManyToMany((type) => Platforms)
  @JoinTable()
  platforms: Platforms;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Games };
