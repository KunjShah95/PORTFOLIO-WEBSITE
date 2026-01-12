import { motion } from 'framer-motion'
import { Brain, Code2, Database, Terminal, Workflow, ChevronRight } from 'lucide-react'

const skillGroups = [
  {
    category: 'Applied_GenAI',
    icon: Brain,
    description: 'Building practical semantic applications using modern LLM frameworks and orchestration tools.',
    skills: ['LangChain / CrewAI', 'RAG Pipelines', 'Prompt Engineering', 'Agent Workflows']
  },
  {
    category: 'Core_Machine_Learning',
    icon: Workflow,
    description: 'Solid academic foundation in neural networks, computer vision, and predictive modeling.',
    skills: ['PyTorch / TensorFlow', 'Computer Vision (OpenCV)', 'NLP / Transformers', 'Data Science (Pandas)']
  },
  {
    category: 'Full_Stack_Dev',
    icon: Terminal,
    description: 'Bridging the gap between AI models and user-facing applications with robust engineering.',
    skills: ['React / TypeScript', 'FastAPI / Python', 'Database Design', 'API Integration']
  },
  {
    category: 'DevOps_&_Tools',
    icon: Database,
    description: 'Proficiency in modern deployment workflows, version control, and cloud environments.',
    skills: ['Git / GitHub', 'Docker / Containers', 'Linux / Bash', 'Cloud Deployment']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 md:py-48 bg-bg overflow-hidden">
      <div className="container-aligned">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-12 mb-16 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase"
            >
              <Code2 className="w-4 h-4" />
              CAPABILITY_MATRICES
            </motion.div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-txt uppercase italic">
              TECHNICAL <span className="text-secondary opacity-40 not-italic">DNA</span>
            </h2>
          </div>
          <p className="max-w-xs text-[10px] sm:text-xs font-mono text-muted uppercase tracking-widest leading-relaxed opacity-60 italic">
            Architecting scalable intelligence through rigorous systems engineering and neural research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-bg p-8 sm:p-12 md:p-16 flex flex-col justify-between hover:bg-surface/30 transition-all duration-700"
            >
              <div className="space-y-12 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 border border-border flex items-center justify-center bg-surface/5 group-hover:border-primary/40 transition-all">
                    <group.icon className="w-6 h-6 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-6xl font-black text-txt/5 italic tracking-tighter group-hover:text-primary/10 transition-colors">0{i + 1}</span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-txt tracking-widest uppercase italic border-l-4 border-primary/20 pl-6 group-hover:border-primary transition-all duration-500">
                    {group.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60 max-w-sm">
                    {group.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group/skill">
                      <ChevronRight className="w-3 h-3 text-primary/40 group-hover/skill:text-primary transition-colors" />
                      <span className="text-[9px] sm:text-[11px] font-black font-mono text-muted group-hover/skill:text-txt transition-colors uppercase tracking-widest">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex items-center gap-4 text-muted/40 font-mono text-[10px] uppercase font-black tracking-widest italic">
            <div className="w-8 h-[1px] bg-border"></div>
            LATEST_CONTRIBUTION
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {['HACKATHON_WIN', 'OPEN_SOURCE_PR', 'RESEARCH_PAPER', 'REACT_V19'].map(item => (
              <span key={item} className="text-[9px] sm:text-xs font-black italic tracking-tighter text-txt/40 hover:text-primary cursor-default whitespace-nowrap transition-colors">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
