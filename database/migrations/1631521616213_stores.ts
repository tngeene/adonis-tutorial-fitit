import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stores extends BaseSchema {
  protected tableName = 'stores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.integer('owner').references('users.id').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('cover_photo').nullable()
      table.string('slug').notNullable().unique()
      table.string('email', 255).notNullable()
      table.string('phone_number', 30)
      table.boolean('is_active').defaultTo(true)
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
