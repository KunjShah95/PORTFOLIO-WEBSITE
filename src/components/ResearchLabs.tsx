import { motion } from 'framer-motion'
import { Microscope, Binary, Zap, FileText } from 'lucide-react'

export function ResearchLabs() {
  const experiments = [
    {
      id: 'L01',
      title: 'SYNTHETIC_MEMORY',
      status: 'STABLE',
      desc: 'Architecture for recursive state persistence in non-deterministic agent clusters.',
      stack: ['REDIS', 'VEC_DB'],
    },
    {
      id: 'L02',
      title: 'NEURAL_PROTOCOL',
      status: 'BETA',
      desc: 'Standardized handshake logic for multi-modal cross-agent task synchronization.',
      stack: ['GRPC', 'PROTO'],
    }
  ]

  return (
    <section id="labs" className="py-16 sm:py-24 md:py-32">
      <div className="container-aligned space-y-12 sm:space-y-16 md:space-y-24">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-4 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
             <Microscope className="w-3 h-3 sm:w-4 sm:h-4" />
             EXPERIMENTAL_INTEL
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-txt uppercase italic text-center leading-none">
            INVESTIGATION <span className="text-secondary opacity-60 not-italic">ARCHIVE</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-surface/20 border border-border p-6 sm:p-10 md:p-16 flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start md:items-center hover:border-primary/20 transition-all border-glow"
            >
              <div className="md:col-span-1 border-r border-border pr-6 sm:pr-8 md:pr-12 hidden md:block">
                 <Binary className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="md:col-span-7 space-y-3 sm:space-y-4 w-full">
                 <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    {/* Mobile Icon */}
                    <Binary className="w-5 h-5 text-primary opacity-20 group-hover:opacity-100 transition-opacity md:hidden flex-shrink-0" />
                    <span className="text-[8px] sm:text-[9px] font-mono text-muted uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black group-hover:text-primary transition-colors">LAB_{exp.id}</span>
                    <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-surface/5 border border-border text-[7px] sm:text-[8px] font-black font-mono text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] group-hover:text-primary transition-all">{exp.status}</div>
                 </div>
                 <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-txt italic tracking-tighter uppercase group-hover:text-primary transition-colors leading-none">{exp.title}</h3>
                 <p className="text-[10px] sm:text-xs text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60 border-l-2 border-primary/10 pl-4 sm:pl-6 group-hover:border-primary/40 transition-colors">
                    {exp.desc}
                 </p>
              </div>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-row justify-start md:justify-end gap-2 sm:gap-3 w-full">
                 <div className="flex items-center gap-1.5 sm:gap-2">
                    {exp.stack.map(s => (
                       <span key={s} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-surface/5 border border-border text-[7px] sm:text-[8px] font-black font-mono text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em]">{s}</span>
                    ))}
                 </div>
                 <button className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] font-black font-mono text-muted hover:text-primary transition-all uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-surface/5 px-4 sm:px-6 py-3 sm:py-4 border border-border hover:border-primary/40 rounded-full min-h-[44px]">
                    <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    Archive
                 </button>
              </div>
            </motion.div>
          ))}

          {/* Symmetrical Add Hook */}
          <div className="group border border-dashed border-border p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 hover:bg-surface/5 transition-all cursor-pointer">
             <div className="w-12 h-12 sm:w-16 sm:h-16 border border-border flex items-center justify-center group-hover:border-primary transition-all">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-muted group-hover:text-primary animate-pulse" />
             </div>
             <div className="space-y-1">
                <span className="text-[8px] sm:text-[9px] font-black font-mono text-muted uppercase tracking-[0.3em] sm:tracking-[0.5em]">Initiating_New_Cycle</span>
                <p className="text-[7px] sm:text-[8px] font-mono text-muted/20 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Awaiting_Signal_Input...</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
