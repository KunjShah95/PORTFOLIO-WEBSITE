import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

import { EXPERIENCE } from '../data/portfolio'

export function Experience() {

  return (
    <section id="experience" className="section-padding relative overflow-hidden">

      <div className="container-aligned space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Briefcase className="w-4 h-4" />
              NEURAL_HISTORY
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Experience <span className="text-muted font-light">Timeline</span>
            </h2>
          </div>
          <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold">
            NODES_ACTIVE: {EXPERIENCE.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative pl-8 sm:pl-0"
            >
              {/* Timeline Line (Mobile) */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-border/50 sm:hidden"></div>

              <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l-0 sm:border-l sm:border-border/50 sm:pl-12 hover:border-primary/50 transition-colors duration-500 relative">

                {/* Timeline Dot (Desktop) */}
                <div className="hidden sm:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors"></div>

                {/* Period & Meta */}
                <div className="md:col-span-3 space-y-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-surfaceHighlight/50 rounded-sm text-primary txt-mono text-[10px] font-bold uppercase tracking-widest">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </span>
                  <div className="flex items-center gap-2 text-xs txt-mono text-muted uppercase tracking-widest pl-1">
                    <MapPin className="w-3 h-3 text-border" />
                    Remote
                  </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-6 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-txt group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-sm font-bold text-muted uppercase tracking-wider">{exp.role}</div>
                  <p className="text-sm leading-relaxed text-muted/80 max-w-2xl font-light">
                    {exp.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="md:col-span-3 flex flex-wrap gap-2 justify-start md:justify-end content-start">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-surface border border-border rounded-sm text-[10px] font-bold txt-mono text-muted uppercase tracking-wider group-hover:border-primary/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
