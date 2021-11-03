import { Router, Request, Response } from 'express';
import {
  deleteTask,
  editTask,
  getAllTasks,
  getTaskById,
  createTask,
} from '../controllers/taskController';

const router = Router();

router.get('/', (_request: Request, response: Response) =>
  response.status(201).json({ ok: true })
);

router.get('/all', getAllTasks);

router.post('/create', createTask);

router.put('/edit', editTask);

router.delete('/delete', deleteTask);

router.get('/:id', getTaskById);

export default router;
