import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Items extends BaseSchema {
  protected tableName = 'items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.integer('store').references('stores.id').onDelete('CASCADE')
      table.integer('uploaded_by').references('users.id').onDelete('CASCADE')
      table.string('cover_photo').nullable()
      table.string('description').notNullable()
      table.float('price').notNullable()
      table.string('slug').notNullable().unique()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
