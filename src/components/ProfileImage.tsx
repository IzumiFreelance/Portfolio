import { motion } from 'framer-motion';

export function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      className="relative z-10 mb-8 group"
      style={{
        transform: "perspective(1000px) rotateX(10deg)",
      }}
    >
      <div className="w-56 h-56 relative">
        {/* Glow effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-purple-400/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
        
        {/* Profile image */}
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGo8981fhZ3-w/profile-displayphoto-shrink_400_400/B4DZPfVswaHMAk-/0/1734618829410?e=1740614400&v=beta&t=mLf4IxLLKzzmLXdqgCDh7FHxB_2t3s_OOflcB3c6k4Q"
          alt="Profile"
          className="w-56 h-56 rounded-full border-2 border-purple-400/50 shadow-2xl relative z-10 transition-all duration-300 group-hover:scale-105 object-cover"
        />
        
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}