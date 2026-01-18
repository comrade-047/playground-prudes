import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  techStack: string[];
  repoLink?: string;
  liveLink?: string;
  images: string[];
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
  techStack: [{ type: String, index: true }],
  repoLink: { type: String },
  liveLink: { type: String },
  images: [{ type: String }],
}, { timestamps: true });

ProjectSchema.index({ title: 'text', description: 'text', techStack: 'text' });

export default mongoose.model<IProject>('Project', ProjectSchema);

