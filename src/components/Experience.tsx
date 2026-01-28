import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { EXPERIENCE } from '../data/portfolio'

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container-aligned space-y-16 relative z-10">
        {/* Header with Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/20 pb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Zap className="w-4 h-4" />
              TENURE_REGISTRY
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Professional <span className="text-muted/40 font-light">Trajectory</span>
            </h2>
          </div>
          <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold border border-primary/30 bg-primary/5 px-4 py-2 rounded-sm">
            POSITIONS: {EXPERIENCE.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Timeline Container */}
        <motion.div
          className="space-y-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline Connector Line */}
          <div className="absolute left-0 md:left-[45px] top-0 bottom-0 w-px bg-primary/20 md:block hidden"></div>

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {/* Timeline Marker */}
                <div className="hidden md:flex md:col-span-1 justify-center relative">
                  <motion.div
                    className="w-10 h-10 border-2 border-primary bg-primary/10 rounded-none flex items-center justify-center relative z-10"
                    whileHover={{ scale: 1.2, backgroundColor: 'rgb(255 79 0 / 0.2)' }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </motion.div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-0 top-4 w-3 h-3 bg-primary rounded-full border border-primary/60"></div>

                {/* Content Card */}
                <div className="md:col-span-11 md:pl-8 relative group">
                  <div className="border border-primary/20 group-hover:border-primary/50 bg-surface/30 p-6 md:p-8 transition-all duration-500">
                    {/* Hover Border Animation */}
                    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 pointer-events-none transition-all duration-500"></div>

                    {/* Corner Accent */}
                    <div className="absolute -top-px -right-px w-12 h-12 border-t-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500"></div>

                    <div className="relative z-10 space-y-4">
                      {/* Period & Role */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <div className="flex items-center gap-3">
                          <span className="txt-mono text-xs tracking-widest font-bold text-primary uppercase">
                            {exp.period}
                          </span>
                          <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                          <span className="txt-mono text-xs tracking-widest text-muted/60 uppercase">
                            Remote
                          </span>
                        </div>
                        <motion.div
                          className="txt-mono text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          whileHover={{ x: 4 }}
                        >
                          Active →
                        </motion.div>
                      </div>

                      {/* Company & Role */}
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-black text-txt uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <div className="txt-mono text-sm text-primary/80 font-bold tracking-wider">
                          {exp.role}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base leading-relaxed text-muted/70 max-w-2xl font-light">
                        {exp.description}
                      </p>

                      {/* Skills Grid */}
                      <div className="pt-4 border-t border-primary/10 flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 txt-mono text-xs font-bold text-muted uppercase tracking-wider border border-primary/20 group-hover:border-primary/40 bg-primary/5 transition-all duration-300"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-none transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}