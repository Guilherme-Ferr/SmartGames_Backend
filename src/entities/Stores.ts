import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Double,
} from "typeorm";

@Entity("stores")
class Stores {
  @PrimaryColumn("integer")
  @PrimaryGeneratedColumn("increment")
  id_store: number;

  @Column()
  name: string;

  @Column("double")
  latitude: Double;

  @Column("double")
  longitude: Double;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Stores };
