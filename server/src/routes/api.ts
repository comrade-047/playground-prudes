import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';
import { getProjects, createProject } from '../controllers/projectController';
import { getSkills, createSkill } from '../controllers/skillController';
import { search } from '../controllers/searchController';

const router = express.Router();

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

router.get('/projects', getProjects);
router.post('/projects', createProject);

router.get('/skills', getSkills);
router.post('/skills', createSkill);

router.get('/search', search);

export default router;