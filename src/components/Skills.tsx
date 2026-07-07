import Section from './Section';
import { skills } from '../data';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const renderSkillCard = (skill: any, index: number | string) => {
  const Icon = skill.icon;
  return (
    <motion.div
      key={`${skill.name}-${index}`}
      variants={item}
      whileHover={{ y: -5, scale: 1.03 }}
      className="group flex h-32 flex-col items-center justify-center rounded-2xl border border-white/20 bg-slate-800/80 p-4 text-center shadow-[0_10px_30px_rgba(2,6,23,0.35)] transition-all duration-200 hover:border-primary/60 hover:bg-slate-700/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.2)]"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-white/10 transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]">
        {Icon ? (
          <Icon size={22} style={{ color: skill.color }} />
        ) : (
          <div className="h-4 w-4 rounded-full" style={{ backgroundColor: skill.color }} />
        )}
      </div>
      <span className="text-sm font-semibold text-gray-100 transition-colors group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="A compact view of the tools and technologies I use to build polished, impactful solutions.">
      <div className="mx-auto max-w-6xl space-y-10">
        {Object.entries(skills).map(([category, items]) => {
          if (category === 'Frontend' || category === 'Backend') return null;

          const isMLCategory = category === 'MachineLearning';

          return (
            <div key={category}>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white/90">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent ml-4" />
              </div>

              {isMLCategory ? (
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 12, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
                    className="flex w-max gap-4"
                  >
                    {[...items, ...items].map((skill, idx) => (
                      <div key={`${skill.name}-${idx}`} className="w-32 flex-shrink-0">
                        {renderSkillCard(skill, idx)}
                      </div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                >
                  {items.map((skill, index) => renderSkillCard(skill, index))}
                </motion.div>
              )}
            </div>
          );
        })}

        <div>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white/90">Frontend &amp; Backend</h3>
            <div className="ml-4 h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex gap-4 overflow-x-auto pb-2">
              {[...Array(2)].map((_, iteration) => (
                <div key={iteration} className="flex flex-shrink-0 gap-4">
                  <div className="flex items-center rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                    Frontend
                  </div>
                  {skills.Frontend.map((skill, index) => renderSkillCard(skill, `${iteration}-${index}`))}
                  <div className="flex items-center rounded-2xl border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm font-semibold text-secondary">
                    Backend
                  </div>
                  {skills.Backend.map((skill, index) => renderSkillCard(skill, `${iteration}-backend-${index}`))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
