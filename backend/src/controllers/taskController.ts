import { Request, Response } from 'express';
import TaskModel from '../models/Task';

export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const allTasks = await TaskModel.find({});
    return res.status(201).json({ allTasks });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findOne({ _id: id });
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};

export const editTask = async (req: Request, res: Response) => {
  try {
    const { id, title, description, status, date } = req.body;
    const newTask = {
      title,
      description,
      status,
      date,
    };
    await TaskModel.updateOne({ _id: id }, newTask);

    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const deletedTask = await TaskModel.deleteOne({ _id: id });
    return res.status(201).json(deletedTask);
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, date } = req.body;
    const newTask = {
      title,
      description,
      status,
      date,
    };
    await TaskModel.create(newTask);
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};
