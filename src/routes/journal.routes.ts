import { Router } from 'express';
import { createJournal, getJournals } from '../controllers/journal.controller';

const router = Router();

router.post('/', createJournal);
router.get('/', getJournals);

export default router;
