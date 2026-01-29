import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { SKILL_GROUPS } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg overflow-hidden relative">
      <div className="container-aligned relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/30 pb-8 mb-16 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase"
            >
              <Cpu className="w-4 h-4 animate-pulse" />
              CAPABILITY_MATRIX
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Technical <span className="text-muted/50 font-light">Specifications</span>
            </h2>
          </div>
          <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold border border-primary/30 px-4 py-2 rounded-sm">
            MATRIX_SIZE: {SKILL_GROUPS.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Grid-based Capability Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-surface border border-primary/20 p-6 flex flex-col justify-between transition-all duration-500 hover:border-primary/60 overflow-hidden rounded-sm"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Hover Accent Bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="p-2 border border-primary/30 bg-surface text-primary rounded-sm">
                    <group.icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-txt uppercase tracking-widest group-hover:text-primary transition-colors font-mono">
                    {group.category}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-primary/20">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ x: 2 }}
                      className="text-[10px] font-bold txt-mono text-muted/70 group-hover:text-primary transition-colors uppercase tracking-widest px-2 py-1 border border-primary/20 group-hover:border-primary/40 rounded-sm bg-primary/5 group-hover:bg-primary/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-primary/30 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex items-center gap-4 text-muted/60 txt-mono text-xs uppercase font-bold tracking-widest">
            <div className="w-8 h-[1px] bg-primary/30"></div>
            SYSTEM_STATUS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['ACTIVE_RESEARCH', 'PRODUCTION', 'LEARNING', 'OPTIMIZATION'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-xs font-bold tracking-tight text-muted/70 px-3 py-1 border border-primary/30 rounded-sm"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}