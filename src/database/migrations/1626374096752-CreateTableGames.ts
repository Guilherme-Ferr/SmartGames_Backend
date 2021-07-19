import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableGames1626374096752 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Criar tabela de games
    await queryRunner.createTable(
      new Table({
        name: "games",
        columns: [
          {
            name: "id_game",
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
            name: "description",
            type: "text",
          },
          {
            name: "value",
            type: "double",
          },
          {
            name: "discount",
            type: "integer",
          },
          {
            name: "image",
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
    //Excluir tabela de games
    await queryRunner.dropTable("games");
  }
}
