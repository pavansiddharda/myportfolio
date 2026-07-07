import { useState, useRef } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

import { personalInfo } from '../data';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaUser, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or want to discuss opportunities? I’d love to hear from you.">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass rounded-3xl p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Let’s collaborate</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Contact details</h3>
            <p className="mt-3 text-sm leading-7 text-gray-400">
              Whether it is a research idea, a product build, or a career conversation, I am always open to meaningful conversations.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-base font-medium text-white">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <FaPhone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-base font-medium text-white">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:bg-[#0A66C2] hover:text-white">
                <FaLinkedin size={22} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:bg-white hover:text-black">
                <FaGithub size={22} />
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              <p className="text-sm font-medium text-gray-300">Available for freelance and full-time opportunities</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Quick message</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Tell me about your idea</h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-400">Your Name</label>
              <div className="flex items-center rounded-2xl border border-white/10 bg-black/30 px-4 py-3 transition-colors focus-within:border-primary">
                <FaUser className="mr-3 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                  placeholder="sidhu bachina"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-400">Your Email</label>
              <div className="flex items-center rounded-2xl border border-white/10 bg-black/30 px-4 py-3 transition-colors focus-within:border-primary">
                <FaEnvelope className="mr-3 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                  placeholder="your@gmail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-400">Subject</label>
              <select
                id="subject"
                name="subject"
                defaultValue="Project Inquiry"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition-colors focus:border-primary"
              >
                <option>Project Inquiry</option>
                <option>Research Collaboration</option>
                <option>Job Opportunity</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-primary"
                placeholder="Share a few details about your project or goal..."
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane />
                </>
              )}
            </button>
            <p className="text-sm text-gray-400">Usually replies within 24 hours.</p>
          </div>

          {status === 'success' && (
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
              <FaCheckCircle />
              Message sent successfully. I’ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-sm font-medium text-red-400">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
