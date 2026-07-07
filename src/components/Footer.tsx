import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/50 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              Pavan<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">Building digital experiences that inspire.</p>
          </div>
          
          <div className="flex gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#0A66C2] hover:text-white text-gray-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#FFA116] hover:text-white text-gray-400 transition-colors">
              <SiLeetcode size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
        
        <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
