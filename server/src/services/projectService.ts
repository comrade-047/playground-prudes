import Project from '../models/Project';
import { ProjectInput } from '../validation/schema';

export const getAllProjects = async (skillFilter?: string) => {
  const query: Record<string, unknown> = {};
  
  if (skillFilter) {
    query.techStack = { $regex: new RegExp(skillFilter, 'i') };
  }
  return await Project.find(query).sort({ createdAt: -1 });
};

export const createNewProject = async (data: ProjectInput) => {
  return await Project.create(data);
};