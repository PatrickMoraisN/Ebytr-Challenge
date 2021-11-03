import { Request, Response } from 'express';
// import { ObjectId } from 'mongoose';
import TaskModel from '../models/Task';

export const getAllTasks = async (_req: Request, res: Response) => {
  const allTasks = await TaskModel.find({});
  return res.status(201).json({ allTasks });
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await TaskModel.findOne({ _id: id });
  return res.status(201).json({ task });
};

export const editTask = async (req: Request, res: Response) => {
  const { id, title, description, status, date } = req.body;
  const newTask = {
    title,
    description,
    status,
    date,
  };
  await TaskModel.updateOne({ _id: id }, newTask);

  return res.status(201).json(newTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deletedTask = await TaskModel.deleteOne({ _id: id });
  return res.status(201).json(deletedTask);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, date } = req.body;
  const newTask = {
    title,
    description,
    status,
    date,
  };
  await TaskModel.create(newTask);
  return res.status(201).json(newTask);
};
