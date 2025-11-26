"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Terminal, 
  ChevronDown, Briefcase, GraduationCap, Database, Server, 
  Cpu, Globe, Layout, Download, Send, Phone, MessageCircle 
} from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- DATA SECTIONS ---
  
  const projects = [
    {
      title: "HR Attrition Intelligence",
      category: "Data Analytics",
      desc: "An advanced Power BI dashboard designed to predict employee churn. Analyzes demographic factors and performance metrics to provide actionable retention strategies for HR leadership.",
      tech: ["Power BI", "DAX", "SQL", "Excel"],
      // 👇 Aapka Google Drive Link yahan set hai
      link: "https://drive.google.com/drive/folders/1-yLVp1NrzhAr6EIIaVG-XrIVejGxaNoU" 
    },
    {
      title: "Enterprise Resource Planner",
      category: "Full Stack Development",
      desc: "A scalable internal tool built with Laravel to manage company resources. Features role-based access control (RBAC), real-time reporting, and optimized MySQL queries.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      link: "#" 
    },
    {
      title: "Automated Data Pipeline",
      category: "Python Automation",
      desc: "A custom Python suite utilizing Pandas and NumPy to automate data cleaning and visualization processes, reducing manual reporting time by 40%.",
      tech: ["Python", "Pandas", "Matplotlib", "Automation"],
      link: "#"
    }
  ];

  const experience = [
    {
      role: "Trainee Engineer",
      company: "Posistrength Software Solution",
      period: "July 2025 - Oct 2025",
      type: "Internship",
      desc: "Engineered robust backend modules using PHP & Laravel. Collaborated with the frontend team to integrate APIs and optimized database schemas for 30% faster query execution."
    }
  ];

  const skills = [
    { name: "Python", icon: <Code2 size={16} /> },
    { name: "SQL & Database", icon: <Database size={16} /> },
    { name: "Power BI / Tableau", icon: <Layout size={16} /> },
    { name: "Laravel (PHP)", icon: <Server size={16} /> },
    { name: "Docker & DevOps", icon: <Cpu size={16} /> },
    { name: "Next.js & React", icon: <Globe size={16} /> },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans overflow-x-hidden">
      
      {/* Scroll Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Radial Gradient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0a0a]/60">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="text-xl font-bold text-slate-100 flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-mono text-sm">
              P
            </div>
            <span>Prince<span className="text-cyan-500">.</span>dev</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["About", "Experience", "Work", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            {/* Direct Mail Button in Navbar */}
            <a href="mailto:princesanju6200@gmail.com" className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-xs transition-all flex items-center gap-2">
              <Mail size={14} /> Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 tracking-wider">
            AVAILABLE FOR OPPORTUNITIES
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-tight">
            Data Driven. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Future Ready.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I am <strong className="text-slate-200">Prince</strong>, a Backend Developer & Data Analyst. 
            I architect scalable systems and transform raw data into business intelligence using Python, SQL, and Power BI.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Download Resume Button */}
          {/* IMPORTANT: Make sure your file is named 'resume.pdf' and is inside the 'public' folder */}
          <a href="/resume.pdf" download="Prince_Resume.pdf" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2">
            <Download size={20} /> Download Resume
          </a>
          
          {/* Direct Contact Button */}
          <a href="#contact" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2 hover:bg-slate-800">
            <Send size={20} /> Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-slate-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* --- EXPERIENCE & SKILLS GRID --- */}
      <section id="experience" className="py-32 relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left: Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Briefcase className="text-cyan-500" /> Work History
            </h2>
            <div className="space-y-12 relative border-l border-white/10 ml-3 pl-8">
              {experience.map((job, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#0a0a0a] bg-cyan-500"></span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  <p className="text-cyan-400 font-medium text-sm mb-3">{job.company}</p>
                  <p className="text-slate-400 leading-relaxed text-sm">{job.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Education Sub-section */}
            <h2 className="text-2xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
              <GraduationCap className="text-purple-500" /> Education
            </h2>
            <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                    <h4 className="text-white font-semibold">Master of Computer Applications (MCA)</h4>
                    <p className="text-slate-400 text-sm">BBAU, Lucknow • 2023-2025</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                    <h4 className="text-white font-semibold">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-slate-400 text-sm">L.N. Mishra Institute, Patna • 2020-2023</p>
                </div>
            </div>
          </div>

          {/* Right: Skills & Tech Stack */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Terminal className="text-green-500" /> Technical Arsenal
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
                I specialize in building end-to-end data pipelines and robust backend architectures. 
                My focus is on writing clean, maintainable code that scales.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 flex items-center gap-3 hover:border-cyan-500/30 transition-all cursor-default"
                >
                  <div className="p-2 rounded-lg bg-black/50 text-cyan-400">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-slate-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Coding Stats / Fun Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#0f0f0f] border border-white/5 font-mono text-xs text-slate-500">
                <div className="flex justify-between mb-2">
                    <span>Code Quality</span>
                    <span className="text-green-400">A+</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full mb-4">
                    <div className="w-[95%] bg-green-500 h-1 rounded-full"></div>
                </div>
                <p className="text-slate-400">"Always learning, always shipping."</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="work" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-slate-400 max-w-2xl">
              A collection of projects demonstrating expertise in Data Analytics, Full Stack Development, and Automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
              >
                {/* Card Header */}
                <div className="p-8 pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">{project.category}</span>
                    <a href={project.link} target="_blank" className="text-slate-500 hover:text-white transition">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>
                
                {/* Tech Tags at bottom */}
                <div className="mt-auto p-8 pt-0 border-t border-white/5 mt-6 pt-6">
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((t, i) => (
                       <span key={i} className="px-2 py-1 text-[10px] font-medium text-slate-300 bg-white/5 rounded border border-white/5">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / FOOTER --- */}
      <section id="contact" className="py-24 relative z-10 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Let's Build Together.
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to start a project or just want to discuss code? 
            Reach out via Email, Phone, or WhatsApp.
          </p>
          
          {/* Smart Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            
            {/* Email Card */}
            <a href="mailto:princesanju6200@gmail.com" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all group flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email Me</h3>
                <p className="text-sm text-slate-400">princesanju6200@gmail.com</p>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:+916207001860" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all group flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Call Me</h3>
                <p className="text-sm text-slate-400">+91 62070 01860</p>
              </div>
            </a>

            {/* WhatsApp Card (Smart Feature) */}
            <a href="https://wa.me/916207001860" target="_blank" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all group flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                <p className="text-sm text-slate-400">Chat Directly</p>
              </div>
            </a>

          </div>

          <div className="flex justify-center gap-8 text-slate-500">
            <a href="https://linkedin.com/in/princepaswan" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform duration-300"><Linkedin size={28} /></a>
            <a href="https://github.com" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform duration-300"><Github size={28} /></a>
          </div>

          <footer className="mt-20 pt-8 border-t border-white/5 text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Prince. All rights reserved.</p>
            <p className="mt-2 text-xs">Designed & Developed by Prince.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}