import { motion } from 'framer-motion'
import { Beaker, Cpu, ArrowDown, GraduationCap } from 'lucide-react'

export function Hero() {
  const stats = [
    { icon: GraduationCap, label: 'DEGREE_PHASE', value: '3RD_YEAR' },
    { icon: Cpu, label: 'COMPUTE_FOCUS', value: 'AGENTS/LLM' },
    { icon: Beaker, label: 'LABS_EXPLORED', value: '04' },
  ]

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-32 relative overflow-hidden">
      <div className="container-aligned relative z-10 flex flex-col items-center text-center">
        
        {/* Academic Status Badge */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 border border-primary/20 text-primary font-mono text-[9px] tracking-[0.6em] font-black uppercase mb-12"
        >
          <div className="w-1 h-3 bg-primary animate-pulse"></div>
          PROTOCOL_UNDERGRAD_PHASE_03
        </motion.div>
        
        {/* Massive Dynamic Heading */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="space-y-6"
        >
          <h1 className="text-7xl md:text-[140px] font-black tracking-[-0.05em] text-white uppercase leading-[0.85] italic">
            Kunj <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-beam not-italic">Shah</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xs md:text-sm text-muted font-mono uppercase tracking-[0.3em] leading-relaxed pt-8 opacity-60">
             Building <span className="text-white">autonomous systems</span> and <span className="text-white">neural architectures</span>. 3rd Year Computer Science student at Indus University exploring the frontiers of <span className="text-primary">MLOps</span> and <span className="text-white">Agentic Intelligence</span>.
          </p>
        </motion.div>

        {/* Action Interface */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20"
        >
          <a 
            href="/projects" 
            className="w-full sm:w-auto px-12 py-5 bg-white text-black font-black text-[10px] tracking-[0.4em] uppercase transition-all rounded-full hover:bg-primary hover:scale-105 active:scale-95 shadow-2xl text-center"
          >
             Explore_Archive
          </a>
          <a 
            href="/blogs" 
            className="w-full sm:w-auto px-12 py-5 border border-white/5 bg-white/[0.02] text-white font-black text-[10px] tracking-[0.4em] uppercase transition-all rounded-full hover:border-primary/40 hover:bg-white/5 text-center"
          >
             Research_Log
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-32 w-full max-w-4xl grid grid-cols-3 gap-8 border-t border-white/5 pt-12"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center space-y-4 group">
              <s.icon className="w-4 h-4 text-primary opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              <div className="space-y-1">
                 <div className="text-[8px] font-mono text-muted uppercase tracking-widest font-black">{s.label}</div>
                 <div className="text-xl font-black text-white group-hover:text-primary transition-colors tracking-tighter italic">{s.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-20 opacity-20"
        >
           <ArrowDown className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
