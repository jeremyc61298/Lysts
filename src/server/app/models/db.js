import mongoose from 'mongoose';
import { dbHost, dbName } from '../../config';

export const db = mongoose.connect(`mongodb://${dbHost}/${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
