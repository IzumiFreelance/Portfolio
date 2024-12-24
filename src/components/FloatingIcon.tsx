import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  icon: {
    Icon: LucideIcon;
    delay: number;
    color: string;
  };
  index: number;
  total: number;
}

export function FloatingIcon({ icon: { Icon, delay, color }, index, total }: FloatingIconProps) {
  const angle = (index * (2 * Math.PI)) / total;
  const radius = 140; // Distance from center

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x,
        y,
      }}
      transition={{
        delay,
        duration: 0.5,
        ease: "easeOut"
      }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        x: -16,
        y: -16,
      }}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div 
          className="p-4 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer"
          style={{ backgroundColor: `${color}33` }}
        >
          <Icon className="w-8 h-8 text-white" style={{ color }} />
        </div>
      </motion.div>
    </motion.div>
  );
}