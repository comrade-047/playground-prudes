'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '@/utils/api';
import { Profile, Skill, Project } from '@/types';
import { ArrowUpRight, Code2, Database, Terminal, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState<{
    profile: Profile | null;
    skills: Skill[];
    projects: Project[];
  }>({ profile: null, skills: [], projects: [] });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<Profile>('/profile'),
      api.get<Skill[]>('/skills'),
      api.get<Project[]>('/projects'),
    ])
      .then(([profileRes, skillsRes, projectsRes]) => {
        setData({
          profile: profileRes.data,
          skills: skillsRes.data,
          projects: projectsRes.data.slice(0, 2),
        });
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading || !data.profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  const { profile, skills, projects } = data;
  const frontend = skills.filter(s => s.category === 'Frontend').slice(0, 4);
  const backend = skills.filter(s => s.category === 'Backend').slice(0, 4);

  return (
    <div className="space-y-12">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl p-10 md:p-14
          bg-linear-to-br from-[#111827] to-[#0F172A]
          border border-gray-800"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
            bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs mb-6">
            ● Available for hire
          </div>

          {/* UPDATED TEXT START */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Transforming complex problems into{' '}
            <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              elegant solutions.
            </span>
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Full Stack Engineer focused on building scalable, performant, and user-centric applications. I bridge the gap between engineering precision and creative design.
          </p>
          {/* UPDATED TEXT END */}

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2"
            >
              View Work <ArrowUpRight size={18} />
            </Link>

            <a
              href={profile.socialLinks?.github}
              target="_blank"
              className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* EXPERIENCE + SKILLS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Experience */}
        <div className="md:col-span-2 bg-[#111827] border border-gray-800 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-indigo-400" />
            <h2 className="text-xl font-semibold text-white">Experience</h2>
          </div>

          <div className="space-y-6">
            {profile.experience?.map((exp, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-indigo-400">
                  {exp.company} • {new Date(exp.startDate).getFullYear()}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {exp.responsibilities?.[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <div className="bg-[#0F172A] border border-gray-800 rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4 text-gray-200">
              <Code2 size={18} />
              <h3 className="font-semibold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontend.map(s => (
                <span key={s._id} className="bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-lg">
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0F172A] border border-gray-800 rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4 text-gray-200">
              <Database size={18} />
              <h3 className="font-semibold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backend.map(s => (
                <span key={s._id} className="bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-lg">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <Link href="/projects" className="text-indigo-400 text-sm hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <motion.div
              key={project._id}
              whileHover={{ y: -4 }}
              className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition"
            >
              <div className="h-44 flex items-center justify-center bg-[#0F172A]">
                <Cpu className="text-gray-600" size={48} />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map(t => (
                    <span key={t} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}