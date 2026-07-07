import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto', className)}>
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
