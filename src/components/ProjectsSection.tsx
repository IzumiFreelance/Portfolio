import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Anipedia',
    description: 'A anime searching-website in html and javascript and by using an Api',
    image: 'data:image/jpeg;base64,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',
    github: 'https://github.com/IzumiFreelance/Anipedia',
    live: 'https://anipedia.vercel.app/',
  },
  {
    title: 'Animations-website',
    description: 'I have used Vite + React.js to create this simple Animations website its kinda cool and kinda pink',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFB1oeUngLq5LFsLq1e7ZMT6J4pecnx4ypw&s',
    github: 'https://github.com/IzumiFreelance/Animations-website',
    live: 'https://animations-website.vercel.app/',
  },
  {
    title: 'Simple React page',
    description: 'Simple react page ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2pJuB4Gbd5wwMaxP-Wb9LKkhNoccbQhS0A&s',
    github: 'https://github.com/IzumiFreelance/simple-react-page',
    live: 'https://simple-react-page-kappa.vercel.app/',
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 text-purple-400"
        >
          Featured Projects
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <Github className="w-5 h-5 mr-1" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
