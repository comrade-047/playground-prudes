'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '@/utils/api';
import { Project } from '@/types';
import { Search, Github, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      const endpoint = filter
        ? `/projects?skill=${filter}`
        : '/projects';

      api
        .get<Project[]>(endpoint)
        .then((res) => setProjects(res.data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#E6EAF2]">
            Projects
          </h1>
          <p className="text-[#9AA4BF] mt-3 text-lg max-w-xl">
            A selection of engineering projects focused on problem-solving,
            system design, and real-world application development.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7391]"
          />
          <input
            type="text"
            placeholder="Search by technology or keyword…"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="
              w-full
              pl-10 pr-4 py-3
              rounded-xl
              bg-[#0F1629]
              border border-[#1E2A4A]
              text-[#E6EAF2]
              placeholder-[#6B7391]
              focus:outline-none
              focus:border-[#4F7DFF]
              transition
            "
          />
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-96 rounded-xl bg-[#0F1629] border border-[#1E2A4A] animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="
                bg-[#0F1629]
                border border-[#1E2A4A]
                rounded-xl
                overflow-hidden
                hover:border-[#4F7DFF]/60
                transition
                flex flex-col
              "
            >
              <div className="h-44 bg-[#131C33] flex items-center justify-center">
                <span className="text-[#4F7DFF] text-sm font-semibold">
                  APPLICATION
                </span>
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-semibold text-[#E6EAF2] mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-[#9AA4BF] leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5 py-1
                        text-xs
                        rounded-md
                        bg-[#131C33]
                        text-[#9AA4BF]
                        border border-[#1E2A4A]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 border-t border-[#1E2A4A] pt-4">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      className="
                        flex-1
                        flex items-center justify-center gap-2
                        py-2
                        rounded-lg
                        text-sm
                        text-[#9AA4BF]
                        hover:text-[#E6EAF2]
                        hover:bg-[#131C33]
                        transition
                      "
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="
                        flex-1
                        flex items-center justify-center gap-2
                        py-2
                        rounded-lg
                        bg-[#4F7DFF]
                        hover:bg-[#6A8CFF]
                        text-sm
                        font-medium
                        text-white
                        transition
                      "
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && projects.length === 0 && (
        <div className="text-center py-24">
          <p className="text-[#9AA4BF] text-lg">
            No projects found for “{filter}”.
          </p>
          <button
            onClick={() => setFilter('')}
            className="mt-4 text-[#4F7DFF] hover:underline font-medium"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}
