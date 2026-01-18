import { Request, Response } from 'express';
import { ZodError } from 'zod';
import * as projectService from '../services/projectService';
import { projectSchema } from '../validation/schema';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const { skill } = req.query;
    const filter = typeof skill === 'string' ? skill : undefined;
    const projects = await projectService.getAllProjects(filter);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const validatedData = projectSchema.parse(req.body);
    const newProject = await projectService.createNewProject(validatedData);
    res.status(201).json(newProject);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.issues });
    }
    res.status(500).json({ message: 'Server Error' });
  }
};