import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Double,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("games")
class Games {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id_game: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("double")
  value: Double;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Games };
