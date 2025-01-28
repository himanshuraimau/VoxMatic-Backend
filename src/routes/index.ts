import { Router } from 'express';
import journalRoutes from './journal.routes';

const router = Router();

// Add sub-routes
router.use('/journal', journalRoutes);

export default router;
