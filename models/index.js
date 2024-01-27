import mongoose from 'mongoose';
import { Code } from "./Code.js";

(async () => {
    await mongoose.connect(`mongodb://127.0.0.1:27017/compiler`);
})();

export const db = {
    Code
}