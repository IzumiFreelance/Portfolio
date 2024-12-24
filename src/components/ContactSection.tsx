import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-8">Let's Connect</h2>
          <p className="text-gray-300 mb-12">
            I'm ready to take on new challenges and exciting ventures.
            Don't hesitate to get in touch!🐱‍👤
          </p>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Mail className="w-10 h-10" />, href: 'mailto:your.izumiFreelance.com' },
              { icon: <Github className="w-10 h-10" />, href: 'https://github.com/IzumiFreelance' },
              { icon: <Linkedin className="w-10 h-10" />, href: 'https://www.linkedin.com/in/altaf-hussian-282ba9218/' },
              { icon: <Instagram className="w-10 h-10" />, href: 'https://instagram.com/Altaf_Hussain_3' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}