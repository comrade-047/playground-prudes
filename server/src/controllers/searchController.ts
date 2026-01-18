import { Request, Response } from 'express';
import * as searchService from '../services/searchService';

export const search = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ message: 'Query parameter q is required' });
    }

    const results = await searchService.searchEverything(q);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};