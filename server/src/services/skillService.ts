import Skill from '../models/Skill';
import { SkillInput } from '../validation/schema';

export const getAllSkills = async () => {
  return await Skill.find().sort({ proficiency: -1 });
};

export const createNewSkill = async (data: SkillInput) => {
  return await Skill.create(data);
};