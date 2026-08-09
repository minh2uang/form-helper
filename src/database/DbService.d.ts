import { Filter, FindOptions, OptionalId, WithId, WithoutId, Document, InsertOneOptions, BulkWriteOptions, UpdateOptions } from 'mongodb';
import zod from 'zod';
export declare const createModel: <Schema extends zod.ZodObject<zod.core.$ZodLooseShape, zod.core.$strip>>(collectionName: string, schema: Schema) => {
    findOne: (query: Filter<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>, options?: FindOptions) => Promise<WithId<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }> | null>;
    findMany: (query: Filter<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>, options?: FindOptions) => Promise<WithId<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>[]>;
    createOne: (newItem: WithoutId<Omit<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }, "_createdAt" | "isDeleted">>, options?: InsertOneOptions) => Promise<WithId<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>>;
    createMany: (newItems: OptionalId<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>[], options?: BulkWriteOptions) => Promise<void>;
    updateOne: (filter: Filter<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>, newItem: Partial<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>, options?: UpdateOptions) => Promise<void>;
    deleteOne: (query: Filter<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>) => Promise<import("mongodb").UpdateResult<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>>;
    deleteMany: (query: Filter<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>) => Promise<import("mongodb").UpdateResult<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>>;
    aggregate: <TResult extends Document = import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>(pipeline: Document[]) => import("mongodb").AggregationCursor<TResult>;
    name: string;
    collection: import("mongodb").Collection<import("mongodb").EnhancedOmit<zod.core.output<Schema>, "_id"> & {
        _id: import("mongodb").InferIdType<zod.core.output<Schema>>;
    } & {
        isDeleted: boolean;
    }>;
};
//# sourceMappingURL=DbService.d.ts.map