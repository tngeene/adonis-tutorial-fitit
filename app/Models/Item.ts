import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Store from './Store'
import User from './User'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public desciption: string

  @column()
  public coverPhoto: string

  @column()
  public price: number

  // can only be uploaed by one person i.e user who created it.
  @hasOne(() => User, {
    localKey: 'uploaded_by',
    foreignKey: 'id',
  })
  public owner: HasOne<typeof User>

  // an item belongs to a single store
  @hasOne(() => Store, {
    localKey: 'store',
    foreignKey: 'id',
  })
  public store: HasOne<typeof Store>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
