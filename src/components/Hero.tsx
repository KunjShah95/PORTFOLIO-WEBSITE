import { motion } from 'framer-motion'
import { Beaker, Cpu, ArrowDown, GraduationCap } from 'lucide-react'

export function Hero() {
  const stats = [
    { icon: GraduationCap, label: 'SYSTEM_STATUS', value: 'AGENT_BUILDER' },
    { icon: Cpu, label: 'COMPUTE_FOCUS', value: 'AI_SYSTEMS' },
    { icon: Beaker, label: 'PROJECTS_DEPLOYED', value: '12+' },
  ]

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-32 relative overflow-hidden">
      <div className="container-aligned relative z-10 flex flex-col items-center text-center">

        {/* Academic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 bg-primary/5 border border-primary/20 text-primary font-mono text-[7px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase mb-6 sm:mb-12"
        >
          <div className="w-1 h-2 sm:h-3 bg-primary animate-pulse"></div>
          <span className="hidden sm:inline">AI_SYSTEMS_ENGINEER // AUTONOMOUS_AGENT_BUILDER</span>
          <span className="sm:hidden">AI_SYSTEMS_ENGINEER</span>
        </motion.div>

        {/* Massive Dynamic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-black tracking-[-0.05em] uppercase leading-[0.85]">
            <span className="text-txt italic">Kunj</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary italic inline-block pr-2 sm:pr-4">Shah</span>
          </h1>

          <p className="max-w-3xl mx-auto text-[10px] sm:text-xs md:text-sm text-muted font-mono uppercase tracking-[0.15em] sm:tracking-[0.3em] leading-relaxed pt-4 sm:pt-8 opacity-60 px-2">
            Engineering <span className="text-txt">autonomous intelligence</span> and <span className="text-txt">scalable AI systems</span>. specialized in <span className="text-primary">Agentic Flow</span>, <span className="text-txt">MLOps</span>, and <span className="text-txt">Computer Vision</span>.
          </p>
        </motion.div>

        {/* Action Interface */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 md:mt-16 w-full px-4 sm:px-0"
        >
          <a
            href="/projects"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-txt text-bg font-black text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all rounded-full hover:bg-primary hover:text-white hover:scale-105 active:scale-95 shadow-2xl text-center min-h-[44px] flex items-center justify-center"
          >
            View All Projects
          </a>
          <a
            href="/resume.pdf"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-border bg-txt/5 text-txt font-black text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all rounded-full hover:border-primary/40 hover:bg-txt/10 text-center min-h-[44px] flex items-center justify-center"
          >
            Resume
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-border bg-txt/5 text-txt font-black text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all rounded-full hover:border-primary/40 hover:bg-txt/10 text-center min-h-[44px] flex items-center justify-center"
          >
            Contact
          </a>
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 sm:mt-16 w-full max-w-2xl px-4 sm:px-0"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-6 py-6 bg-surface-highlight ring-1 ring-gray-900/5 rounded-xl leading-none flex items-top justify-start space-x-6">
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-primary tracking-widest uppercase font-bold">Latest Deployment</span>
                  <span className="text-[9px] font-mono text-muted tracking-widest uppercase">Nov 2024</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-txt group-hover:text-primary transition-colors">CinePulse</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[90%]">
                    Emotion-based movie recommender using NLP classification and embedding-based similarity matching.
                  </p>
                </div>
                <div className="pt-2">
                  <a href="/projects/cinepulse" className="text-[10px] font-bold text-txt uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2">
                    Analyze System <div className="w-4 h-px bg-current"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 sm:mt-20 md:mt-24 w-full max-w-4xl grid grid-cols-3 gap-2 sm:gap-8 border-t border-border pt-8 sm:pt-12 px-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 sm:space-y-3 group">
              <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              <div className="space-y-0.5 sm:space-y-1 text-center">
                <div className="text-[7px] sm:text-[9px] font-mono text-muted uppercase tracking-wider sm:tracking-widest font-bold">{s.label}</div>
                <div className="text-sm sm:text-lg font-black text-txt group-hover:text-primary transition-colors tracking-tighter">{s.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 hidden sm:block"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-64 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
