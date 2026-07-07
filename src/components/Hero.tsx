import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data';

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitle.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
          
          <div className="h-12 mb-6">
            <motion.p 
              key={subtitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl font-semibold text-gradient"
            >
              {personalInfo.subtitle[subtitleIndex]}
            </motion.p>
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
            {personalInfo.introduction}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 mt-12">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={28} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FFA116] transition-colors">
              <SiLeetcode size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full overflow-hidden glass p-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                alt="Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
