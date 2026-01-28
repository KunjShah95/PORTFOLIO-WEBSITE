import { motion } from 'framer-motion'
import { Microscope, Terminal, Zap, ArrowUpRight } from 'lucide-react'

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
    <section id="labs" className="section-padding bg-bg relative overflow-hidden">
      <div className="container-aligned space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/30 pb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Microscope className="w-4 h-4" />
              INVESTIGATION_ARCHIVE
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Research <span className="text-muted/50 font-light">Labs</span>
            </h2>
          </div>
          <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold border border-primary/30 px-4 py-2 rounded-sm">
            EXPERIMENTS: {experiments.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 gap-8">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-primary/20 bg-surface hover:border-primary/60 transition-all duration-500 rounded-sm overflow-hidden"
              whileHover={{ scale: 1.01, y: -4 }}
            >
              {/* ID Column */}
              <div className="lg:col-span-1 border-r border-primary/20 bg-primary/5 flex items-center justify-center py-6 lg:py-0">
                <span className="text-sm lg:text-base font-bold txt-mono text-primary/60 group-hover:text-primary transition-colors -rotate-0 lg:-rotate-90 whitespace-nowrap">
                  {exp.id}
                </span>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase txt-mono rounded-sm ${exp.status === 'STABLE' ? 'bg-green-500/10 text-green-500 border border-green-500/30' : 'bg-primary/10 text-primary border border-primary/30'}`}>
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-txt group-hover:text-primary transition-colors tracking-tight uppercase">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl">
                    {exp.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map(s => (
                    <span key={s} className="text-[10px] font-bold txt-mono text-muted/70 uppercase tracking-wider px-2 py-1 border border-primary/20 rounded-sm bg-primary/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="text-center">
                  <Terminal className="w-6 h-6 text-primary/40 mx-auto" />
                </div>
                <a
                  href="#contact"
                  className="px-4 py-3 border border-primary/40 bg-surface hover:border-primary/60 hover:bg-primary/5 text-txt hover:text-primary transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm txt-mono"
                >
                  Explore <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Cycle Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-dashed border-primary/30 p-6 flex flex-col items-center justify-center text-center space-y-3 rounded-sm hover:border-primary/60 hover:bg-surface/50 transition-all cursor-pointer"
        >
          <div className="p-2">
            <Zap className="w-5 h-5 text-primary/50 animate-pulse" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold txt-mono text-txt uppercase tracking-widest">INITIATING_NEW_EXPERIMENT</span>
            <p className="text-[10px] txt-mono text-muted uppercase tracking-widest opacity-60">AWAITING_SIGNAL...</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
