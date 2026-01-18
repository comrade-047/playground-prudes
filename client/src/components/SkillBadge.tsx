import { Skill } from '@/types';

export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center justify-between px-4 py-1.5 rounded-full
      border border-gray-700 bg-gray-800 text-gray-200">
      
      <span className="text-sm font-medium">{skill.name}</span>

      <div className="flex gap-1 ml-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i < skill.proficiency / 2 ? 'bg-indigo-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
