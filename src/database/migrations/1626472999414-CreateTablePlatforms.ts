import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePlatforms1626472999414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Criar tabela de plataformas
    await queryRunner.createTable(
      new Table({
        name: "platforms",
        columns: [
          {
            name: "id_platform",
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
    //Excluir tabela de plataformas
    await queryRunner.dropTable("platforms");
  }
}
