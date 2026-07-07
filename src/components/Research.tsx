import Section from './Section';
import { research } from '../data';
import { motion } from 'framer-motion';

export default function Research() {
  return (
    <Section id="research" title="Research & Publications" subtitle="My academic contributions and scientific research.">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        
        {/* Animated Background Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-700" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/30">
              {research.type}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-medium">{research.timeline}</span>
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" title={research.status} />
              <span className="text-sm font-medium text-green-400">{research.status}</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            {research.title}
          </h3>

          <div className="mb-8 p-6 rounded-2xl bg-black/40 border border-white/5">
            <h4 className="text-lg font-semibold text-gray-200 mb-3">Abstract</h4>
            <p className="text-gray-400 leading-relaxed italic">
              "{research.abstract}"
            </p>
          </div>

          <a 
            href={research.link} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Read Full Paper
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
