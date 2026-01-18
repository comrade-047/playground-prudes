import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
  name: string;
  title: string;     // e.g., "Full Stack Engineer"
  email: string;
  bio?: string;
  education: {
    degree: string;
    institution: string;
    yearOfCompletion: string;
  }[];
  experience: {
    company: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    responsibilities: string[];
  }[];
  socialLinks?: {
    github: string;
    linkedin: string;
    portfolio?: string;
  };
}

const ProfileSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String },
    education: [
      {
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        yearOfCompletion: { type: String, required: true },
      },
    ],
    experience: [
      {
        company: { type: String, required: true },
        role: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date }, // Optional means "Present"
        responsibilities: [{ type: String }],
      },
    ],
    socialLinks: {
      github: { type: String, required: true },
      linkedin: { type: String, required: true },
      portfolio: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProfile>("Profile", ProfileSchema);