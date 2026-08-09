"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModel = void 0;
const mongodb_1 = require("mongodb");
// Connection URL
const url = process.env.DATABASE_CONNECTION_STRING || '';
const client = new mongodb_1.MongoClient(url);
const db_name = process.env.DB_NAME || '';
// Database Name
const createModel = (collectionName, schema) => {
    const db = client.db(db_name);
    const collection = db.collection(collectionName);
    return {
        findOne: async (query, options) => {
            const item = await collection.findOne({ ...query, isDeleted: { $ne: true } }, options);
            if (!item) {
                return null;
            }
            return item;
        },
        findMany: async (query, options) => {
            return await collection
                .find({ ...query, isDeleted: { $ne: true } }, options)
                .toArray();
        },
        createOne: async (newItem, options) => {
            const parsedItem = (await schema.parseAsync(newItem));
            const { insertedId } = await collection.insertOne(parsedItem, options);
            const insertedItem = await collection.findOne({ _id: insertedId });
            if (!insertedItem) {
                throw 'Should not be null here';
            }
            return insertedItem;
        },
        createMany: async (newItems, options) => {
            const parsedItems = await Promise.all(newItems.map(async (item) => {
                return (await schema.parseAsync(item));
            }));
            await collection.insertMany(parsedItems, options);
        },
        updateOne: async (filter, newItem, options) => {
            const parsedItem = (await schema
                .partial()
                .parseAsync(newItem));
            await collection.updateOne(filter, { $set: parsedItem }, options);
        },
        deleteOne: async (query) => {
            return await collection.updateOne(query, {
                $set: { isDeleted: true }
            });
        },
        deleteMany: async (query) => {
            return await collection.updateMany(query, {
                $set: { isDeleted: true }
            });
        },
        aggregate: (pipeline) => collection.aggregate(pipeline),
        name: collection.collectionName,
        collection
    };
};
exports.createModel = createModel;
