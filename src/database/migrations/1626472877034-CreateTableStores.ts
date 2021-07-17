import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableStores1626472977034 implements MigrationInterface {
  //Criar tabela de lojas
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "stores",
        columns: [
          {
            name: "id_store",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cep",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    //Excluir tabela de lojas
    await queryRunner.dropTable("stores");
  }
}
