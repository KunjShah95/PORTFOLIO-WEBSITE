import { motion } from 'framer-motion'
import { MapPin, Hexagon, Binary } from 'lucide-react'

export function Education() {
  const education = [
    {
      id: 'E01',
      school: 'INDUS UNIVERSITY',
      degree: 'B.TECH COMPUTER SCIENCE [3RD YEAR]',
      period: '2023 — 2027',
      location: 'IN',
      summary: 'Specializing in Artificial Intelligence and Neural Networks. Currently optimizing agentic workflows and local inference engines.'
    },
    {
      id: 'E02',
      school: 'GRADUATE_STATUS',
      degree: 'ADVANCED_PHYSICS_AND_LOGIC',
      period: '2021 — 2023',
      location: 'IN',
      summary: 'Foundational certification in multi-variable calculus and computational physics. Core logic for ML application.'
    }
  ]

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent hidden lg:block"></div>

      <div className="container-aligned space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10 gap-8 bg-bg/80 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
              <Hexagon className="w-4 h-4" />
              ACADEMIC_FLOW
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">ACADEMIC <span className="text-secondary opacity-60 not-italic">JOURNEY</span></h2>
          </div>
        </div>

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative"
            >
              {/* Timeline Connector Mobile */}
              <div className="absolute left-[22px] top-0 bottom-0 w-[1px] bg-secondary/10 lg:hidden"></div>

              <div className="group relative grid lg:grid-cols-12 gap-12 p-12 lg:p-16 bg-surface/20 border border-white/5 hover:border-secondary/20 transition-all border-glow overflow-hidden items-center">
                <div className="lg:col-span-3 space-y-8 relative">
                   {/* Node Marker */}
                   <div className="absolute -left-[54px] lg:-left-[18px] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary border-4 border-bg group-hover:scale-150 transition-all z-20"></div>

                   <div className="space-y-2 lg:pl-8">
                      <div className="text-[10px] font-mono text-secondary font-black uppercase tracking-[0.4em] bg-secondary/10 px-3 py-1.5 w-fit border border-secondary/10 italic">
                        {edu.period}
                      </div>
                      <div className="text-[9px] font-mono text-muted/30 uppercase tracking-[0.4em] font-black">STATION_{edu.id}</div>
                   </div>
                   <div className="flex items-center gap-3 text-[9px] font-mono text-muted uppercase tracking-[0.2em] font-black opacity-60 lg:pl-8">
                      <MapPin className="w-4 h-4 text-primary" />
                      LOC://{edu.location}
                   </div>
                </div>

                <div className="lg:col-span-9 grid md:grid-cols-12 gap-12 items-center">
                   <div className="md:col-span-7 space-y-4">
                      <h3 className="text-4xl font-black text-white uppercase tracking-tighter group-hover:text-secondary transition-colors duration-500 leading-none italic">
                        {edu.school}
                      </h3>
                      <div className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-black opacity-80 italic">
                        {edu.degree}
                      </div>
                   </div>
                   <div className="md:col-span-5 border-l border-white/5 pl-10">
                      <p className="text-xs text-muted font-mono leading-loose uppercase tracking-tight italic opacity-60 group-hover:opacity-100 transition-opacity">
                        {edu.summary}
                      </p>
                   </div>
                </div>

                {/* Minimal Aesthetic Icon */}
                <div className="absolute -top-10 -right-10 opacity-[0.02] group-hover:opacity-5 transition-opacity pointer-events-none">
                   <Binary className="w-64 h-64 text-white -rotate-12" />
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
