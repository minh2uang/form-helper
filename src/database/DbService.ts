import {
  Filter,
  MongoClient,
  OptionalUnlessRequiredId,
  WithId,
  WithoutId
} from 'mongodb'
import zod from 'zod'
import z from 'zod'

// Connection URL
const url = process.env.DATABASE_CONNECTION_STRING || ''
const client = new MongoClient(url)
const db_name = process.env.DB_NAME || ''
// Database Name

export const createModel = <Schema extends zod.ZodObject>(
  collectionName: string,
  schema: Schema
) => {
  const db = client.db(db_name)
  type ItemType = WithId<z.infer<Schema>>

  const collection = db.collection<ItemType>(collectionName as string)

  return {
    findOne: async (
      query: Filter<ItemType>
    ): Promise<WithId<ItemType> | null> => {
      const item: WithId<ItemType> | null = await collection.findOne(query)
      if (!item) {
        return null
      }
      return item
    },
    findMany: async (query: Filter<ItemType>): Promise<WithId<ItemType>[]> => {
      return await collection.find(query).toArray()
    },
    createOne: async (newItem: WithoutId<ItemType>) => {
      const parsedItem = (await schema.parseAsync(
        newItem
      )) as OptionalUnlessRequiredId<ItemType>
      await collection.insertOne(parsedItem)
    },
    createMany: async (newItems: OptionalUnlessRequiredId<ItemType>[]) => {
      const parsedItems = await Promise.all(
        newItems.map(async (item) => {
          return (await schema.parseAsync(
            item
          )) as OptionalUnlessRequiredId<ItemType>
        })
      )
      await collection.insertMany(parsedItems)
    },
    updateOne: async (filter: Filter<ItemType>, newItem: Partial<ItemType>) => {
      const parsedItem = (await schema
        .partial()
        .parseAsync(newItem)) as Partial<ItemType>
      await collection.updateOne(filter, { $set: parsedItem })
    },
    deleteOne: async (query: Filter<ItemType>) => {
      return await collection.deleteOne(query)
    },
    deleteMany: async (query: Filter<ItemType>) => {
      return await collection.deleteMany(query)
    }
  }
}
