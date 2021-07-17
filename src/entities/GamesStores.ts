import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Long,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("games_stores")
class GamesStores {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id_game_store: number;

  @Column("int")
  games_id: Long;

  @Column("int")
  stores_id: Long;

  @Column("int")
  quantity_in_store: Long;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { GamesStores };

//Entidade < - > ORM < - > DB (users)
