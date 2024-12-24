import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  { icon: <Code2 className="w-8 h-8" />, name: 'Frontend', angle: 0 },
  { icon: <Server className="w-8 h-8" />, name: 'Backend', angle: 90 },
  { icon: <Database className="w-8 h-8" />, name: 'Database', angle: 180 },
  { icon: <Layout className="w-8 h-8" />, name: 'UI/UX', angle: 270 },
];

export function ProfileSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </motion.div>
        
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="absolute"
            style={{
              transform: `rotate(${skill.angle}deg) translateY(-120px)`,
              transformOrigin: 'center center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="bg-purple-700 p-4 rounded-full shadow-lg"
            >
              {skill.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}