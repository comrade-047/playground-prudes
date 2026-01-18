import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  email: z.string().email("Invalid email format"),
  bio: z.string().optional(),
  education: z
    .array(
      z.object({
        degree: z.string().min(1),
        institution: z.string().min(1),
        yearOfCompletion: z.string().min(1),
      }),
    )
    .optional(),
  experience: z
    .array(
      z.object({
        company: z.string().min(1),
        role: z.string().min(1),
        startDate: z.string().or(z.date()),
        endDate: z.string().or(z.date()).optional().nullable(),
        responsibilities: z.array(z.string()).optional(),
      }),
    )
    .optional(),
  socialLinks: z
    .object({
      github: z.string().url(),
      linkedin: z.string().url(),
      portfolio: z.string().url().optional(),
    })
    .optional(),
});

export type ProfileInput = z.infer<typeof profileSchema>;

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 chars"),
  techStack: z.array(z.string()).min(1, "At least one tech is required"),
  repoLink: z.string().url().optional().or(z.literal("")),
  liveLink: z.string().url().optional().or(z.literal("")),
  images: z.array(z.string().url()).optional()
});

export type ProjectInput = z.infer<typeof projectSchema>;

export const skillSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  category: z.enum(['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Language', 'Cloud']),
  proficiency: z.number().min(1).max(10)
});

export type SkillInput = z.infer<typeof skillSchema>;