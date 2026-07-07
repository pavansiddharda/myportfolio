import { useState, useRef } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

import { personalInfo } from '../data';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // Make sure to replace these with actual EmailJS keys
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY')
    
    // Simulating API call since keys aren't provided
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you.">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-lg">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="text-lg">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-colors">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm font-medium">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
