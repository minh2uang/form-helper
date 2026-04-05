import z from 'zod'
import {ObjectId} from 'mongodb'

const DocumentIdFieldType = z
    .custom<string | undefined>(() => true)
    .transform((i) =>
        i ? new ObjectId(i).toString() : new ObjectId().toString()
    );
export default DocumentIdFieldType