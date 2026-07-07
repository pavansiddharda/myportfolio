import Section from './Section';
import { experience } from '../data';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey and research roles.">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[15px] md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}
              >
                <div className="glass p-6 md:p-8 rounded-2xl relative group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 px-4 py-1 bg-primary/20 rounded-bl-xl rounded-tr-xl text-primary text-sm font-semibold">
                    {exp.year}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 mt-2">{exp.role}</h3>
                  <h4 className="text-lg text-secondary mb-4">{exp.company}</h4>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.responsibilities}
                  </p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {exp.workedOn.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block px-6 py-2 bg-primary/20 hover:bg-primary/40 text-primary hover:text-white rounded-lg transition-colors border border-primary/30"
                  >
                    {exp.buttonText}
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
