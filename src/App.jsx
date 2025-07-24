
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(true);
  const sections = ["Home", "About", "Projects", "Experience", "Contact"];
  const resumeUrl = "https://docs.google.com/document/d/1sdGqKxgHTPGoUi7mMjjZODHsH6dfGl8wIio51Sxu0M4/export?format=pdf";

  return (
    <main className={`min-h-screen w-full ${dark ? 'bg-neutral-950 text-white' : 'bg-white text-black'} font-sans transition duration-500 scroll-smooth`}>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-opacity-30 backdrop-blur-md">
        <h1 className="text-2xl font-bold tracking-tight">Jacob Cudiamat</h1>
        <div className="space-x-4 text-sm">
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="hover:underline hover:text-indigo-400 transition">{section}</a>
          ))}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="ml-2 px-2 py-1 border rounded text-xs hover:bg-neutral-800">📄 Resume</a>
          <button onClick={() => setDark(!dark)} className="ml-2 px-2 py-1 border rounded text-xs hover:bg-neutral-800">{dark ? '☀️' : '🌙'}</button>
        </div>
      </nav>

      <section id="home" className="h-screen flex flex-col items-center justify-center snap-start">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-extrabold">Cybersecurity Engineer</h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto">Secure systems. Real-world experience. Clean code. Let’s build something safe.</p>
        </motion.div>
        <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-10 animate-bounce text-neutral-400 hover:text-indigo-400">
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </section>

      <section id="about" className="h-screen px-6 py-24 snap-start flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-neutral-400 max-w-2xl">
          I’m a cybersecurity engineering graduate with experience in vulnerability assessments, network defense, secure system design, and penetration testing. I specialize in Zero Trust architecture, SIEM integration, and ethical hacking across cloud and on-prem environments.
        </p>
      </section>

      <section id="projects" className="min-h-screen px-6 py-24 snap-start">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Azure Mini SOC</h3>
            <p className="text-sm text-neutral-400">Deployed Azure Sentinel with real-time alerts, custom rules, and Log Analytics.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Zero Trust VPN</h3>
            <p className="text-sm text-neutral-400">Designed WireGuard VPN on AWS with multi-factor authentication and hardened access.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Offensive Security Lab</h3>
            <p className="text-sm text-neutral-400">Simulated attacks with Metasploit, Security Onion, and Splunk for blue vs red team training.</p>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="h-screen px-6 py-24 snap-start">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ul className="space-y-4 text-neutral-400">
          <li><strong className="text-white">Cybersecurity Analyst</strong> @ Torero Consulting Group (2025)<div>Reduced vulnerabilities by 60% through audits, scans, and technical control implementation.</div></li>
          <li><strong className="text-white">Web Developer / Analyst</strong> @ Top-Down Analytics (2022–2023)<div>Secured frontend logic and improved reporting pipeline for analytics firm.</div></li>
        </ul>
      </section>

      <section id="contact" className="h-screen px-6 py-24 snap-start flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-neutral-400 mb-4">Reach out for collaborations or just to say hi 👋</p>
        <div className="space-x-4">
          <a href="mailto:jacob.k.cudiamat@gmail.com" className="hover:underline">Email</a>
          <a href="https://linkedin.com/in/jacob-cudiamat" target="_blank" className="hover:underline">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
