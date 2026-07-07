import Section from './Section';
import { skills } from '../data';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I work with to build innovative solutions.">
      <div className="space-y-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-2 inline-block">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
            >
              {items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer group"
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors"
                    >
                      {Icon ? (
                        <Icon size={24} style={{ color: skill.color }} />
                      ) : (
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.color }} />
                      )}
                    </div>
                    <span className="font-medium text-sm text-center text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
