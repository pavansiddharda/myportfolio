import Section from './Section';
import { certifications } from '../data';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Professional certifications and credentials.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-2">
              <FaAward size={24} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">{cert.name}</h3>
              <p className="text-gray-400 font-medium text-sm">{cert.organization}</p>
            </div>
            
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 w-full text-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 text-sm font-medium"
            >
              View Credential
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
