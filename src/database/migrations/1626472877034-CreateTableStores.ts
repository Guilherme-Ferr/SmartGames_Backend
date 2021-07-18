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
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cep",
            type: "integer",
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
