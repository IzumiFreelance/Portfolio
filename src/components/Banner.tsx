import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Brain, Rocket } from 'lucide-react';
import { FloatingIcon } from './FloatingIcon';
import { ProfileImage } from './ProfileImage';

const floatingIcons = [
  { Icon: Code2, delay: 0, color: 'rgb(168, 85, 247)' },
  { Icon: Database, delay: 0.2, color: 'rgb(139, 92, 246)' },
  { Icon: Layout, delay: 0.4, color: 'rgb(124, 58, 237)' },
  { Icon: Server, delay: 0.6, color: 'rgb(109, 40, 217)' },
  { Icon: Brain, delay: 0.8, color: 'rgb(91, 33, 182)' },
  { Icon: Rocket, delay: 1, color: 'rgb(76, 29, 149)' },
];

export function Banner() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-purple-900/20 to-gray-900" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=1920&h=800&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
          >
            ALTAV HUSAYN 
          </motion.h1>
          
          <div className="relative">
            <ProfileImage />
            
            <div className="absolute inset-0 -z-10">
              <div className="relative w-full h-full">
                {floatingIcons.map((icon, index) => (
                  <FloatingIcon
                    key={index}
                    icon={icon}
                    index={index}
                    total={floatingIcons.length}
                  />
                ))}
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-green-500 max-w-2xl mt-8 leading-relaxed font-bold bg-black"
          >
           Full-Stack Web Developer | React & Node.js Alchemist | Crafting Digital Experiences That Wow 🚀
          </motion.p>
          <img 
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=4000&pause=500&color=FFD700&width=450&lines=Full-Stack+Web+Developer;Tech+Enthusiast;Lifelong+Learner;Open+Source+Contributor;AI+and+Blockchain+Explorer;Net+Philosopher" 
            alt="Typing SVG" 
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}