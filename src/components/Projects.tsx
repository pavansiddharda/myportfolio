import Section from './Section';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of my best work across different domains.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass rounded-2xl overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            {/* Image Placeholder with Parallax-ish effect on hover */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Highlight Badge */}
              {project.id === 5 && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                  Flagship Project
                </div>
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map(t => (
                  <span key={t} className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-primary transition-colors">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
                
                <a href="#" className="text-sm font-medium text-primary hover:text-white transition-colors group-hover:underline">
                  Read More &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
