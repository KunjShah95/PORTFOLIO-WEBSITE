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
    <section id="labs" className="py-32">
      <div className="container-aligned space-y-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-4 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
             <Microscope className="w-4 h-4" />
             EXPERIMENTAL_INTEL
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic text-center leading-none">
            INVESTIGATION <span className="text-secondary opacity-60 not-italic">ARCHIVE</span>
          </h2>
        </div>

        <div className="space-y-4">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-surface/20 border border-white/5 p-16 flex flex-col md:grid md:grid-cols-12 gap-12 items-center hover:border-primary/20 transition-all border-glow"
            >
              <div className="md:col-span-1 border-r border-white/5 pr-12 hidden md:block">
                 <Binary className="w-8 h-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="md:col-span-7 space-y-4">
                 <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-muted uppercase tracking-[0.4em] font-black group-hover:text-primary transition-colors">LAB_{exp.id}</span>
                    <div className="px-3 py-1 bg-white/5 border border-white/5 text-[8px] font-black font-mono text-muted uppercase tracking-[0.2em] group-hover:text-primary transition-all">{exp.status}</div>
                 </div>
                 <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase group-hover:text-primary transition-colors leading-none">{exp.title}</h3>
                 <p className="text-xs text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60 border-l-2 border-primary/10 pl-6 group-hover:border-primary/40 transition-colors">
                    {exp.desc}
                 </p>
              </div>

              <div className="md:col-span-4 flex justify-end gap-3 w-full">
                 <div className="flex items-center gap-2 mr-auto md:mr-0">
                    {exp.stack.map(s => (
                       <span key={s} className="px-3 py-1 bg-white/[0.02] border border-white/5 text-[8px] font-black font-mono text-muted uppercase tracking-[0.3em]">{s}</span>
                    ))}
                 </div>
                 <button className="flex items-center gap-3 text-[9px] font-black font-mono text-muted hover:text-primary transition-all uppercase tracking-[0.3em] bg-white/[0.02] px-6 py-4 border border-white/5 hover:border-primary/40">
                    <FileText className="w-3.5 h-3.5" />
                    Archive
                 </button>
              </div>
            </motion.div>
          ))}

          {/* Symmetrical Add Hook */}
          <div className="group border border-dashed border-white/5 p-16 flex flex-col items-center justify-center text-center space-y-6 hover:bg-white/[0.01] transition-all cursor-pointer">
             <div className="w-16 h-16 border border-white/5 flex items-center justify-center group-hover:border-primary transition-all">
                <Zap className="w-5 h-5 text-muted group-hover:text-primary animate-pulse" />
             </div>
             <div className="space-y-1">
                <span className="text-[9px] font-black font-mono text-muted uppercase tracking-[0.5em]">Initiating_New_Cycle</span>
                <p className="text-[8px] font-mono text-muted/20 uppercase tracking-[0.4em]">Awaiting_Signal_Input...</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
