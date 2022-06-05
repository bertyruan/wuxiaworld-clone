import * as express from 'express';
const router = express.Router();
import { getAll } from '../controllers/novels.controller';

// GET All Novels
router.get('/', getAll);

export default router;