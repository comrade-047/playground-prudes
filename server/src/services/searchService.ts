import Project from '../models/Project';
import Skill from '../models/Skill';

export const searchEverything = async (query: string) => {
  const projects = await Project.find({ $text: { $search: query } });
  const skills = await Skill.find({ name: { $regex: query, $options: 'i' } });
  
  return { projects, skills };
};