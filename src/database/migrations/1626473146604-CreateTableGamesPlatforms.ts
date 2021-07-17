import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableGamesPlatforms1626473146604
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Criar tabela intermediaria de games e plataformas
    await queryRunner.createTable(
      new Table({
        name: "games_platforms",
        columns: [
          {
            name: "id_game_platform",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "games_id",
            type: "uuid",
          },
          {
            name: "platforms_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FK_games_id",
            referencedTableName: "games",
            referencedColumnNames: ["id_game"],
            columnNames: ["games_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FK_platforms_id",
            referencedTableName: "platforms",
            referencedColumnNames: ["id_platform"],
            columnNames: ["platforms_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Excluir tabela intermediaria de games e plataformas
    await queryRunner.dropTable("games_platforms");
  }
}
