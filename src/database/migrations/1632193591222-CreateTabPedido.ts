import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabPedido1632193591222 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_pedidos",
                columns: [
                    { name: "id", type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cd_cliente", type: "integer", length: "5" },
                    { name: "dh_pedido", type: "timestamp"},
                    { name: "vl_total", type: "numeric", precision: 8, scale: 2  }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_pedidos")
    }

}
