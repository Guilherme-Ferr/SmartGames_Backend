import { JoinColumn, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableGamesStores1626473136607 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Criar tabela intermediaria de games e lojas
    await queryRunner.createTable(
      new Table({
        name: "games_stores",
        columns: [
          {
            name: "id_game_store",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "games_id",
            type: "uuid",
          },
          {
            name: "stores_id",
            type: "uuid",
          },
          {
            name: "quantity_in_store",
            type: "int",
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
            name: "FK_stores_id",
            referencedTableName: "stores",
            referencedColumnNames: ["id_store"],
            columnNames: ["stores_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Excluir tabela intermediaria de games e lojas
    await queryRunner.dropTable("games_stores");
  }
}
