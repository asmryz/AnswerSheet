import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const codeSchema = new Schema({
    title: String,
    filename: String,
    extension: String,
    language: String,
    src: String,
})

export const Code = model('Code', codeSchema);
