import { Request, Response } from 'express';
import { ZodError } from 'zod';
import * as skillService from '../services/skillService';
import { skillSchema } from '../validation/schema';

export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await skillService.getAllSkills();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const validatedData = skillSchema.parse(req.body);
    const newSkill = await skillService.createNewSkill(validatedData);
    res.status(201).json(newSkill);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.issues });
    }
    res.status(500).json({ message: 'Server Error' });
  }
};