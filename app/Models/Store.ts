import { BaseModel, column, hasOne, HasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Store extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public coverPhoto: string

  @column()
  public email: string

  @column()
  public phoneNumber: string

  @column()
  public isActive: boolean

  // can only have one owner i.e user who created it.
  @hasOne(() => User, {
    localKey: 'owner',
    foreignKey: 'id',
  })
  public owner: HasOne<typeof User>

  // a store has many followers
  @manyToMany(() => User, {
    pivotTable: 'store_followers',
    pivotForeignKey: 'store_id',
    pivotRelatedForeignKey: 'user_id',
    localKey: 'id',
    relatedKey: 'id',
  })
  public followers: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
