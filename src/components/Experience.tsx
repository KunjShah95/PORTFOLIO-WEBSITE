import { motion } from 'framer-motion'
import { Briefcase, MapPin, Terminal, Zap } from 'lucide-react'

import { EXPERIENCE } from '../data/portfolio'

export function Experience() {

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>

      <div className="container-aligned space-y-12 sm:space-y-16 md:space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 sm:pb-8 md:pb-10 gap-4 sm:gap-6 md:gap-8 bg-surface/80 backdrop-blur-sm">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              NEURAL_HISTORY
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-txt uppercase italic">EXPERIENCE <span className="text-secondary opacity-60 not-italic">TIMELINE</span></h2>
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black italic">
            NODES_ACTIVE: 0{EXPERIENCE.length}
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative"
            >
              {/* Timeline Connector */}
              <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-[1px] bg-primary/10 lg:hidden"></div>

              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-16 border border-border bg-surface/20 hover:border-primary/30 transition-all duration-700 relative overflow-hidden border-glow items-start lg:items-center ml-8 sm:ml-10 lg:ml-0">
                <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8 relative">
                  <div className="absolute -left-[36px] sm:-left-[46px] lg:-left-[18px] top-0 lg:top-1/2 lg:-translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary border-3 sm:border-4 border-bg group-hover:scale-150 transition-all z-20"></div>

                  <div className="space-y-1 sm:space-y-2 lg:pl-8">
                    <span className="text-[8px] sm:text-[10px] font-black font-mono text-primary tracking-[0.3em] sm:tracking-[0.5em] uppercase bg-primary/10 px-2 sm:px-3 py-1 sm:py-1.5 inline-block w-fit border border-primary/20 italic">{exp.period}</span>
                    <div className="text-[8px] sm:text-[9px] font-mono text-muted/30 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black">NODE_{exp.id}</div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] font-mono text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black opacity-60 lg:pl-8">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                    REMOTE | DISTRIBUTED
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-txt uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-500 italic">{exp.company}</h3>
                    <div className="text-[9px] sm:text-[10px] font-mono text-secondary uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black opacity-80 italic">{exp.role}</div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted font-mono leading-relaxed sm:leading-loose uppercase tracking-tight italic border-l-2 border-primary/10 pl-4 sm:pl-8 group-hover:border-primary/40 transition-colors">
                    {exp.description}
                  </p>
                </div>

                <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-6 sm:gap-8 md:gap-12">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2.5 justify-start lg:justify-end">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2 sm:px-4 py-1 sm:py-1.5 text-[7px] sm:text-[9px] font-black font-mono border border-border bg-surface/5 text-muted group-hover:text-primary group-hover:border-primary/20 uppercase tracking-wider sm:tracking-widest transition-all italic">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="hidden sm:flex justify-start lg:justify-end gap-4 sm:gap-8 text-txt/5 group-hover:text-primary/10 transition-colors">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10" />
                    <Terminal className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
