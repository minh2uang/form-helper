import { OptionalId, WithId, Document } from 'mongodb';
import zod from 'zod';
export declare const createModel: <Schema extends zod.ZodObject<zod.core.$ZodLooseShape, zod.core.$strip>>(collectionName: string, schema: Schema) => {
    findOne: (query: Filter<any>, options?: any) => Promise<any>;
    findMany: (query: Filter<any>, options?: any) => Promise<WithId<any>[]>;
    createOne: (newItem: WithoutId<Omit<any, "_createdAt" | "isDeleted">>, options?: any) => Promise<any>;
    createMany: (newItems: OptionalId<any>[], options?: any) => Promise<void>;
    updateOne: (filter: Filter<any>, newItem: Partial<any>, options?: any) => Promise<void>;
    deleteOne: (query: Filter<any>) => Promise<any>;
    deleteMany: (query: Filter<any>) => Promise<any>;
    aggregate: <TResult extends Document = any>(pipeline: Document[]) => any;
    name: any;
    collection: any;
};
//# sourceMappingURL=DbService.d.ts.map