import { Request, Response } from 'express';
import { ZodError } from 'zod';
import * as profileService from '../services/profileService';
import { profileSchema } from '../validation/schema';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await profileService.getProfileData();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const validatedData = profileSchema.parse(req.body);
    const updatedProfile = await profileService.updateProfileData(validatedData);
    
    res.json(updatedProfile);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.issues });
    }
    res.status(500).json({ message: 'Server Error' });
  }
};