import Profile from '../models/Profile';
import { ProfileInput } from '../validation/schema';

export const getProfileData = async () => {
  return await Profile.findOne();
};

export const updateProfileData = async (data: ProfileInput) => {
  return await Profile.findOneAndUpdate({}, data, { new: true, upsert: true });
};