import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('table_cadastro', (table) =>{
    table.increments('id').unique();
    table.specificType('cpf', 'VARCHAR(11)').notNullable().unique();
    table.specificType('nome', 'VARCHAR(50)').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('table_cadastro')
}

