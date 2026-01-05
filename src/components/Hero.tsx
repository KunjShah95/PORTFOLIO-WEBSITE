import { motion } from 'framer-motion'
import { Beaker, Cpu, ArrowDown, GraduationCap } from 'lucide-react'

export function Hero() {
  const stats = [
    { icon: GraduationCap, label: 'DEGREE_PHASE', value: '3RD_YEAR' },
    { icon: Cpu, label: 'COMPUTE_FOCUS', value: 'AGENTS/LLM' },
    { icon: Beaker, label: 'LABS_EXPLORED', value: '04' },
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
          <span className="hidden sm:inline">PROTOCOL_UNDERGRAD_PHASE_03</span>
          <span className="sm:hidden">UNDERGRAD_03</span>
        </motion.div>
        
        {/* Massive Dynamic Heading */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] font-black tracking-[-0.05em] uppercase leading-[0.85]">
            <span className="text-txt italic">Kunj</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary italic inline-block pr-2 sm:pr-4">Shah</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-[10px] sm:text-xs md:text-sm text-muted font-mono uppercase tracking-[0.15em] sm:tracking-[0.3em] leading-relaxed pt-4 sm:pt-8 opacity-60 px-2">
             Building <span className="text-txt">autonomous systems</span> and <span className="text-txt">neural architectures</span>. 3rd Year CS student exploring <span className="text-primary">MLOps</span> and <span className="text-txt">Agentic Intelligence</span>.
          </p>
        </motion.div>

        {/* Action Interface */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-16 md:mt-20 w-full px-4 sm:px-0"
        >
          <a 
            href="/projects" 
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-txt text-bg font-black text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase transition-all rounded-full hover:bg-primary hover:text-white hover:scale-105 active:scale-95 shadow-2xl text-center min-h-[48px] flex items-center justify-center"
          >
             Explore_Archive
          </a>
          <a 
            href="/blogs" 
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border border-border bg-txt/5 text-txt font-black text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase transition-all rounded-full hover:border-primary/40 hover:bg-txt/10 text-center min-h-[48px] flex items-center justify-center"
          >
             Research_Log
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 sm:mt-24 md:mt-32 w-full max-w-4xl grid grid-cols-3 gap-3 sm:gap-8 border-t border-border pt-8 sm:pt-12"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 sm:space-y-4 group">
              <s.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              <div className="space-y-0.5 sm:space-y-1">
                 <div className="text-[6px] sm:text-[8px] font-mono text-muted uppercase tracking-wider sm:tracking-widest font-black">{s.label}</div>
                 <div className="text-sm sm:text-xl font-black text-txt group-hover:text-primary transition-colors tracking-tighter italic">{s.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 sm:mt-20 opacity-20"
        >
           <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-96 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
