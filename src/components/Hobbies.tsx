import Section from './Section';
import { hobbies } from '../data';
import { motion } from 'framer-motion';

export default function Hobbies() {
  return (
    <Section id="hobbies" title="Hobbies & Interests" subtitle="When I'm not coding, you can find me doing these activities.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group"
          >
            <div className="flex items-start gap-6">
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {hobby.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {hobby.name}
                </h3>
                <p className="text-gray-400">
                  {hobby.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
