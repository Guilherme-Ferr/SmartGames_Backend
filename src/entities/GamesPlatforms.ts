import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Long,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("games_platforms")
class GamesPlatforms {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id_game_platform: number;

  @Column("int")
  games_id: Long;

  @Column("int")
  platforms_id: Long;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { GamesPlatforms };
