import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTabClienteTelefone1632190279085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_cliente_telefone",
                columns: [
                    { name: "id", type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cd_cliente", type: "integer", length: "5" },
                    { name: "tipo", type: "varchar", length: "10" },
                    { name: "ddd", type: "integer", length: "3" },
                    { name: "numero", type: "integer", length: "10" }
                ]
            })
        )
        await queryRunner.createForeignKey("tab_cliente_telefone", new TableForeignKey({
            columnNames: ["cd_cliente"],
            referencedColumnNames: ["id"],
            referencedTableName: "tab_cliente",
            name: "fk_telefone_cliente",
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        }))   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_cliente_telefone")

    }

}
