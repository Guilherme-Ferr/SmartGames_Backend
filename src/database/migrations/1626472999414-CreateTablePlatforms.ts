import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePlatforms1626472999414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Criar tabela de plataformas
    await queryRunner.createTable(
      new Table({
        name: "platforms",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Excluir tabela de plataformas
    await queryRunner.dropTable("platforms");
  }
}
