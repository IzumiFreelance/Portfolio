import { Code2, Server, Database, Layout, Palette, GitBranch } from 'lucide-react';
import { SkillCard } from './SkillCard';

const skills = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks👨‍💻',
    icon: Code2,
    technologies: ['Html-Css','Bootstrap-5','Javascript','React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side applications',
    icon: Server,
    technologies: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL'],
  },
  // {
  //   title: 'Database Management',
  //   description: 'Designing and optimizing database structures for performance',
  //   icon: Database,
  //   technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'SQL'],
  // },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user experiences',
    icon: Layout,
    technologies: ['Figma', 'Responsive Design', 'Wireframing'],
  },
  {
    title: 'Deployment',
    description: 'Deploying website to different environments',
    icon: GitBranch,
    technologies: ['GitHub pages', 'Vercel', 'Kubernetes'],
  },
  {
    title: 'Web Performance',
    description: 'Optimizing applications for speed and efficiency',
    icon: Palette,
    technologies: ['Webpack', 'Lighthouse', 'PWA', 'Code Splitting', 'Caching'],
  },
  {
    title: 'WebFlow',
    description: 'Optimizing and creating no-code Websites ',
    icon: snowflake,
    technologies: ['WebFlow', 'Framer', 'Animations', 'Optimizing', ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
