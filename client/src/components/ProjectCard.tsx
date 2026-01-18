import { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        bg-[#0F1629]
        border border-[#1E2A4A]
        rounded-xl
        overflow-hidden
        flex flex-col
        h-full
        transition-colors
        hover:border-[#4F7DFF]/60
      "
    >
      {/* Header */}
      <div className="h-36 bg-[#131C33] flex items-center justify-center">
        <span className="text-xs font-semibold tracking-wider text-[#4F7DFF]">
          ENGINEERING PROJECT
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-semibold text-[#E6EAF2] mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-[#9AA4BF] leading-relaxed mb-4 line-clamp-3 grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              className="
                flex-1
                text-center
                py-2
                rounded-lg
                text-sm
                border border-[#1E2A4A]
                text-[#9AA4BF]
                hover:text-[#E6EAF2]
                hover:bg-[#131C33]
                transition
              "
            >
              Source
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              className="
                flex-1
                text-center
                py-2
                rounded-lg
                text-sm
                font-medium
                bg-[#4F7DFF]
                hover:bg-[#6A8CFF]
                text-white
                transition
              "
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
