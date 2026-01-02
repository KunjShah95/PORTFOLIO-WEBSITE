import { motion } from 'framer-motion'
import { Briefcase, MapPin, Terminal, Zap } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      company: 'PHAZE_AI',
      role: 'AUTOMATION_INTERN',
      period: 'DEC 2025 — PRESENT',
      description: 'Developing automated agentic workflows for enterprise automation. Engineering autonomous scripts and multi-stage pipeline triggers.',
      skills: ['PYTHON', 'AGENTS', 'WORKFLOWS'],
      id: 'XP0'
    }
  ]

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>

      <div className="container-aligned space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10 gap-8 bg-bg/80 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
              <Briefcase className="w-4 h-4" />
              NEURAL_HISTORY
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">EXPERIENCE <span className="text-secondary opacity-60 not-italic">TIMELINE</span></h2>
          </div>
          <div className="text-[10px] font-mono text-muted uppercase tracking-[0.3em] font-black italic">
             NODES_ACTIVE: 0{experiences.length}
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative"
            >
              {/* Timeline Connector */}
              <div className="absolute left-[22px] top-0 bottom-0 w-[1px] bg-primary/10 lg:hidden"></div>
              
              <div className="group grid lg:grid-cols-12 gap-12 p-12 lg:p-16 border border-white/5 bg-surface/20 hover:border-primary/30 transition-all duration-700 relative overflow-hidden border-glow items-center">
                <div className="lg:col-span-3 space-y-8 relative">
                   {/* Node Marker */}
                   <div className="absolute -left-[54px] lg:-left-[18px] top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-4 border-bg group-hover:scale-150 transition-all z-20"></div>
                   
                   <div className="space-y-2 lg:pl-8">
                      <span className="text-[10px] font-black font-mono text-primary tracking-[0.5em] uppercase bg-primary/10 px-3 py-1.5 inline-block w-fit border border-primary/20 italic">{exp.period}</span>
                      <div className="text-[9px] font-mono text-muted/30 uppercase tracking-[0.4em] font-black">NODE_{exp.id}</div>
                   </div>
                   <div className="flex items-center gap-3 text-[9px] font-mono text-muted uppercase tracking-[0.2em] font-black opacity-60 lg:pl-8">
                      <MapPin className="w-4 h-4 text-secondary" />
                      REMOTE // DISTRIBUTED
                   </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                   <div className="space-y-2">
                      <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-500 italic">{exp.company}</h3>
                      <div className="text-[10px] font-mono text-secondary uppercase tracking-[0.4em] font-black opacity-80 italic">{exp.role}</div>
                   </div>
                   <p className="text-sm text-muted font-mono leading-loose uppercase tracking-tight italic border-l-2 border-primary/10 pl-8 group-hover:border-primary/40 transition-colors">
                      {exp.description}
                   </p>
                </div>

                <div className="lg:col-span-3 flex flex-col items-end gap-12">
                   <div className="flex flex-wrap gap-2.5 justify-end">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-4 py-1.5 text-[9px] font-black font-mono border border-white/5 bg-white/[0.02] text-muted group-hover:text-primary group-hover:border-primary/20 uppercase tracking-widest transition-all italic">
                           {skill}
                        </span>
                      ))}
                   </div>
                   <div className="flex justify-end gap-8 text-white/5 group-hover:text-primary/10 transition-colors">
                      <Zap className="w-10 h-10" />
                      <Terminal className="w-10 h-10" />
                   </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
