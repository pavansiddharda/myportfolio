import Section from './Section';
import { personalInfo, education } from '../data';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A brief introduction about who I am and what I do.">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            {personalInfo.introduction}
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-full filter blur-[30px]" />
          
          <h3 className="text-2xl font-bold mb-6 text-secondary">Education</h3>
          
          <div className="relative pl-6 border-l-2 border-secondary/30 space-y-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              <h4 className="text-xl font-bold text-white">{education.institution}</h4>
              <p className="text-gray-400 font-medium">{education.degree}</p>
              
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-500 block mb-1">CGPA</span>
                  <span className="font-bold text-accent">{education.cgpa}</span>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-500 block mb-1">Expected Graduation</span>
                  <span className="font-bold text-accent">{education.graduation}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
