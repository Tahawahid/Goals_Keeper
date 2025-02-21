import express from 'express';
const router = express.Router();
import { getGoals, setGoals, updateGoal, deleteGoal } from '../controllers/goalsController.js';

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoal).delete(deleteGoal);

export default router;