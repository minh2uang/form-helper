import {
  Filter,
  FindOptions,
  MongoClient,
  OptionalId,
  OptionalUnlessRequiredId,
  WithId,
  WithoutId,
  Document
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
  type ItemType = WithId<z.infer<Schema>> & {
    isDeleted: boolean
  }

  const collection = db.collection<ItemType>(collectionName as string)

  return {
    findOne: async (
      query: Filter<ItemType>,
      options?: FindOptions
    ): Promise<WithId<ItemType> | null> => {
      const item: WithId<ItemType> | null = await collection.findOne(
        { ...query, isDeleted: false },
        options
      )
      if (!item) {
        return null
      }
      return item
    },
    findMany: async (query: Filter<ItemType>): Promise<WithId<ItemType>[]> => {
      return (await collection.find(query).toArray()).filter(
        (i) => !i.isDeleted
      )
    },
    createOne: async (
      newItem: WithoutId<Omit<ItemType, '_createdAt' | 'isDeleted'>>
    ) => {
      const parsedItem = (await schema.parseAsync(
        newItem
      )) as OptionalUnlessRequiredId<ItemType>
      const { insertedId } = await collection.insertOne(parsedItem)
      const insertedItem = await collection.findOne({ _id: insertedId as any })
      if (!insertedItem) {
        throw 'Should not be null here'
      }
      return insertedItem
    },
    createMany: async (newItems: OptionalId<ItemType>[]) => {
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
      return await collection.updateOne(query, {
        $set: { isDeleted: true } as Partial<ItemType>
      })
    },
    deleteMany: async (query: Filter<ItemType>) => {
      return await collection.updateMany(query, {
        $set: { isDeleted: true } as Partial<ItemType>
      })
    },
    aggregate: <TResult extends Document = ItemType>(pipeline: Document[]) =>
      collection.aggregate<TResult>(pipeline),
    name: collection.collectionName
  }
}
