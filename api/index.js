import express from 'express';
const router = express.Router();
import { db } from '../models/index.js';


router.get('/codes', async (req, res) => {
    const codes = await db.Code.find().sort('_id');
    res.status(200).json(codes);
});

export default router;