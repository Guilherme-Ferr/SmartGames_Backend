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
import { Stores } from "./Stores";

@Entity("games")
class Games {
  @PrimaryColumn("integer")
  @PrimaryGeneratedColumn("increment")
  id_game: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column("double")
  value: Double;

  @Column()
  image: string;

  @Column("integer")
  discount: number;

  @ManyToMany((type) => Platforms)
  @JoinTable()
  platforms: Promise<Platforms[]>;

  @ManyToMany((type) => Stores)
  @JoinTable()
  stores: Promise<Stores[]>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Games };
