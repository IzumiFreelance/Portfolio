import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  index: number;
}

export function SkillCard({ title, description, icon: Icon, technologies, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}