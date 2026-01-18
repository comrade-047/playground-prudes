export interface Profile {
  name: string;
  title: string;
  email: string;
  bio?: string;
  education?: {
    degree: string;
    institution: string;
    yearOfCompletion: string;
  }[];
  experience?: {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    responsibilities?: string[];
  }[];
  socialLinks?: {
    github: string;
    linkedin: string;
    portfolio?: string;
  };
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  repoLink?: string;
  liveLink?: string;
  images?: string[];
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  proficiency: number;
}