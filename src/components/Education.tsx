import { motion } from 'framer-motion'
import { MapPin, Hexagon, Binary } from 'lucide-react'

import { EDUCATION } from '../data/portfolio'

export function Education() {

  return (
    <section id="education" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent hidden lg:block"></div>

      <div className="container-aligned space-y-12 sm:space-y-16 md:space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 sm:pb-8 md:pb-10 gap-4 sm:gap-6 md:gap-8 bg-surface/80 backdrop-blur-sm">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
              <Hexagon className="w-3 h-3 sm:w-4 sm:h-4" />
              ACADEMIC_FLOW
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-txt uppercase italic">ACADEMIC <span className="text-secondary opacity-60 not-italic">JOURNEY</span></h2>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative"
            >
              {/* Timeline Connector Mobile */}
              <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-[1px] bg-secondary/10 lg:hidden"></div>

              <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-16 bg-surface/20 border border-border hover:border-secondary/20 transition-all border-glow overflow-hidden items-start lg:items-center ml-8 sm:ml-10 lg:ml-0">
                <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8 relative">
                  {/* Node Marker */}
                  <div className="absolute -left-[36px] sm:-left-[46px] lg:-left-[18px] top-0 lg:top-1/2 lg:-translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-secondary border-3 sm:border-4 border-bg group-hover:scale-150 transition-all z-20"></div>

                  <div className="space-y-1 sm:space-y-2 lg:pl-8">
                    <div className="text-[8px] sm:text-[10px] font-mono text-secondary font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] bg-secondary/10 px-2 sm:px-3 py-1 sm:py-1.5 w-fit border border-secondary/10 italic">
                      {edu.period}
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-muted/30 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black">STATION_{edu.id}</div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] font-mono text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black opacity-60 lg:pl-8">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    LOC://{edu.location}
                  </div>
                </div>

                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-12 items-start md:items-center">
                  <div className="md:col-span-7 space-y-2 sm:space-y-4">
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-txt uppercase tracking-tighter group-hover:text-secondary transition-colors duration-500 leading-none italic">
                      {edu.school}
                    </h3>
                    <div className="text-[8px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black opacity-80 italic">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="md:col-span-5 border-l border-border pl-4 sm:pl-6 md:pl-10">
                    <p className="text-[10px] sm:text-xs text-muted font-mono leading-relaxed sm:leading-loose uppercase tracking-tight italic opacity-60 group-hover:opacity-100 transition-opacity">
                      {edu.summary}
                    </p>
                  </div>
                </div>

                {/* Minimal Aesthetic Icon */}
                <div className="absolute -top-10 -right-10 opacity-[0.02] group-hover:opacity-5 transition-opacity pointer-events-none hidden sm:block">
                  <Binary className="w-48 h-48 sm:w-64 sm:h-64 text-txt -rotate-12" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
