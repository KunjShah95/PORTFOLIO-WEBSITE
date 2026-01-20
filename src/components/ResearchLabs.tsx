import { motion } from 'framer-motion'
import { Microscope, Binary, Zap, ArrowUpRight } from 'lucide-react'

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
    <section id="labs" className="section-padding relative overflow-hidden">
      <div className="container-aligned space-y-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
            <Microscope className="w-4 h-4" />
            EXPERIMENTAL_INTEL
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-txt uppercase leading-none">
            Investigation <span className="text-muted font-light">Archive</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-surface border border-border p-6 sm:p-8 flex flex-col md:grid md:grid-cols-12 gap-8 items-center hover:border-primary/30 transition-all rounded-lg overflow-hidden"
            >
              <div className="md:col-span-2 flex flex-col items-center justify-center border-r border-border/50 pr-8 h-full">
                <Binary className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors mb-2" />
                <span className="text-xs txt-mono font-bold text-muted">LAB_{exp.id}</span>
              </div>

              <div className="md:col-span-7 space-y-4 w-full text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-sm ${exp.status === 'STABLE' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                    {exp.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-txt uppercase tracking-tight group-hover:text-primary transition-colors">
                  {exp.title.replace('_', ' ')}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {exp.stack.map(s => (
                    <span key={s} className="text-[10px] font-bold txt-mono text-muted/60 uppercase tracking-wider border-b border-border/50 pb-0.5">{s}</span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 flex justify-center md:justify-end w-full">
                <button className="flex items-center gap-2 text-xs font-bold txt-mono text-txt hover:text-primary transition-all uppercase tracking-widest border border-border px-6 py-3 rounded-sm hover:border-primary">
                  View Data <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* New Cycle Hook */}
          <div className="group border border-dashed border-border p-8 rounded-lg flex flex-col items-center justify-center text-center space-y-4 hover:bg-surface/50 transition-all cursor-pointer">
            <div className="p-3 rounded-full bg-surfaceHighlight/50 group-hover:text-primary transition-colors">
              <Zap className="w-6 h-6 text-muted" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold txt-mono text-txt uppercase tracking-widest">Initiating New Cycle</span>
              <p className="text-[10px] txt-mono text-muted uppercase tracking-widest opacity-60">Awaiting Signal Input...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
