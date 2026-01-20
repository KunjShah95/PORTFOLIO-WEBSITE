import { motion } from 'framer-motion'
import { ChevronRight, Cpu } from 'lucide-react'
import { SKILL_GROUPS } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg overflow-hidden relative">
      <div className="container-aligned relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 mb-16 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase"
            >
              <Cpu className="w-4 h-4" />
              CAPABILITY_MATRICES
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Technical <span className="text-muted font-light">DNA</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs txt-mono text-muted uppercase tracking-widest leading-relaxed opacity-60">
            Architecting scalable intelligence through rigorous systems engineering and neural research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-surface border border-border hover:border-primary/30 p-8 rounded-lg flex flex-col justify-between transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 border border-border rounded-md bg-surfaceHighlight/30 text-primary">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <span className="text-4xl font-black text-border/40 group-hover:text-primary/10 transition-colors">0{i + 1}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-txt uppercase tracking-wide">
                    {group.category}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    {group.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-4 border-t border-border/50">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group/skill">
                      <ChevronRight className="w-3 h-3 text-primary/40 group-hover/skill:text-primary transition-colors" />
                      <span className="text-xs font-bold txt-mono text-muted group-hover/skill:text-txt transition-colors uppercase tracking-wider">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex items-center gap-4 text-muted/40 txt-mono text-xs uppercase font-bold tracking-widest">
            <div className="w-8 h-[1px] bg-border"></div>
            LATEST_CONTRIBUTION
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {['HACKATHON_WIN', 'OPEN_SOURCE_PR', 'RESEARCH_PAPER', 'REACT_V19'].map(item => (
              <span key={item} className="text-xs font-bold tracking-tight text-muted/60 hover:text-primary cursor-default whitespace-nowrap transition-colors">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
