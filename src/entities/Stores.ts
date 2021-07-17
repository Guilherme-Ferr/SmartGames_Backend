import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Long,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("stores")
class Stores {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id_store: number;

  @Column()
  name: string;

  @Column("int")
  cep: Long;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Stores };
