import { motion } from 'framer-motion'
import { Beaker, Cpu, ArrowDown, GraduationCap } from 'lucide-react'

export function Hero() {
  const stats = [
    { icon: GraduationCap, label: 'SYSTEM_STATUS', value: 'AGENT_BUILDER' },
    { icon: Cpu, label: 'COMPUTE_FOCUS', value: 'AI_SYSTEMS' },
    { icon: Beaker, label: 'PROJECTS_DEPLOYED', value: '12+' },
  ]

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden">
      <div className="container-aligned relative z-10 flex flex-col items-center text-center">

        {/* Academic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 bg-primary/5 border border-primary/20 text-primary txt-mono text-[10px] sm:text-xs tracking-[0.2em] font-bold uppercase mb-6 sm:mb-12 rounded-full"
        >
          <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></div>
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
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-[-0.02em] leading-[0.9] text-txt select-none">
            KUNJ <span className="text-muted/20">SHAH</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted font-sans font-light tracking-wide leading-relaxed pt-4 sm:pt-8 px-2">
            Engineering <span className="text-primary font-medium">autonomous intelligence</span> and <span className="text-txt font-medium">scalable AI systems</span>.
            Specialized in <span className="txt-mono text-xs text-primary border-b border-primary/30 pb-0.5 mx-1">Agentic Flow</span>,
            <span className="txt-mono text-xs text-secondary border-b border-secondary/30 pb-0.5 mx-1">MLOps</span>, and
            <span className="txt-mono text-xs text-accent border-b border-accent/30 pb-0.5 mx-1">Computer Vision</span>.
          </p>
        </motion.div>

        {/* Action Interface */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-12 sm:mt-16 w-full px-4 sm:px-0"
        >
          <a
            href="/projects"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all rounded-sm hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20 text-center min-h-[44px] flex items-center justify-center"
          >
            Deployments
          </a>
          <a
            href="/resume.pdf"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-border bg-surface hover:bg-surfaceHighlight text-txt font-bold text-xs sm:text-sm tracking-widest uppercase transition-all rounded-sm text-center min-h-[44px] flex items-center justify-center"
          >
            Resume
          </a>
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 sm:mt-32 w-full max-w-3xl px-4 sm:px-0"
        >
          <div className="glass-panel p-1 rounded-2xl">
            <div className="bg-surface/50 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              <div className="w-full md:w-2/3 text-left space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="txt-mono text-[10px] uppercase tracking-widest text-primary font-bold">Latest Deployment</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-txt">CinePulse</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Emotion-based movie recommender using NLP classification and embedding-based similarity matching. Built for high-concurrency environments.
                </p>
              </div>

              <div className="w-full md:w-1/3 flex justify-start md:justify-end">
                <a href="/projects/cinepulse" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-txt hover:text-primary transition-colors border-b border-border pb-1 hover:border-primary">
                  Analyze System <ArrowDown className="w-3 h-3 -rotate-90" />
                </a>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 sm:mt-24 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 px-4 border-t border-border/50"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-4 p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors bg-surface/30">
              <div className="flex items-center gap-3 sm:flex-col sm:gap-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[10px] txt-mono text-muted uppercase tracking-widest font-bold">{s.label}</div>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-txt">{s.value}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
