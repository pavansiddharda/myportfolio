import Section from './Section';
import { certifications } from '../data';
import { motion } from 'framer-motion';
import { FaAward, FaArrowRight } from 'react-icons/fa';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Selected credentials that reflect my technical depth and professional growth.">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <FaAward size={22} />
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Verified
              </span>
            </div>

            <div className="mt-6 flex-1">
              <h3 className="text-lg font-semibold leading-snug text-white">{cert.name}</h3>
              <p className="mt-2 text-sm font-medium text-gray-400">{cert.organization}</p>
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 group-hover:bg-white/10"
            >
              View Credential
              <FaArrowRight size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
