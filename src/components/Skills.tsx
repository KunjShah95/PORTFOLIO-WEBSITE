import { motion } from 'framer-motion'
import { Cpu, Layers, Orbit, Zap } from 'lucide-react'

export function Skills() {
  const modules = [
    {
      id: '01',
      title: 'AGENTIC_ORCHESTRATION',
      icon: Cpu,
      caps: ['LangChain', 'CrewAI', 'Recursive_RAG', 'Tool_USE']
    },
    {
      id: '02',
      title: 'MLOPS_PIPELINES',
      icon: Orbit,
      caps: ['DVC_Versioning', 'MLFlow', 'SageMaker', 'Kubeflow']
    },
    {
      id: '03',
      title: 'DEEP_LEARNING_CORE',
      icon: Zap,
      caps: ['PyTorch', 'HuggingFace', 'Model_Quantization', 'CUDA']
    },
    {
      id: '04',
      title: 'AI_FULL_STACK',
      icon: Layers,
      caps: ['FastAPI', 'NextJS_15', 'Vector_DBs', 'Redis_Cache']
    }
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32">
      <div className="container-aligned space-y-12 sm:space-y-16 md:space-y-24 text-center">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-4 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            VIRTUAL_CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-txt uppercase italic leading-none">
            TECHNICAL <span className="text-secondary opacity-60 not-italic">STACK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
          {modules.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="group relative bg-bg p-8 sm:p-12 md:p-16 space-y-8 sm:space-y-12 hover:bg-surface/50 transition-colors"
            >
               <div className="flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border border-border flex items-center justify-center group-hover:border-primary/40 transition-all bg-surface/20">
                     <m.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-2xl sm:text-4xl font-black text-txt/5 group-hover:text-primary transition-colors italic tracking-tighter">0{i+1}</span>
               </div>
               
               <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2 text-left">
                     <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-txt tracking-wider sm:tracking-widest uppercase italic group-hover:text-primary transition-colors leading-none">{m.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 text-left border-t border-border pt-6 sm:pt-10 mt-auto">
                     {m.caps.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[10px] font-mono text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] group-hover:text-txt transition-colors">
                           <div className="w-1 h-2 sm:h-3 bg-primary/20 group-hover:bg-primary transition-all flex-shrink-0"></div>
                           <span className="truncate">{cap}</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               {/* Symmetrical Corner Decoration */}
               <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-t border-r border-border group-hover:border-primary/20 transition-all translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="pt-12 sm:pt-16 md:pt-24 space-y-8 sm:space-y-12">
           <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
              <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-primary/20"></div>
              <span className="text-[8px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.4em] sm:tracking-[0.8em] font-black">ACTIVE_LEARNING</span>
              <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-primary/20"></div>
           </div>
           <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {['LLM_DISTILLATION', 'MULTIMODAL_RAG', 'QUANTUM_LOGIC', 'MLOPS_GOVERNANCE', 'GRAPH_NEURAL_NETS'].map((topic, i) => (
                 <motion.div 
                    key={topic}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 sm:px-6 py-2 sm:py-3 border border-border bg-surface/5 text-[7px] sm:text-[10px] font-black font-mono text-muted hover:text-primary hover:border-primary/40 transition-all cursor-crosshair uppercase tracking-wider sm:tracking-widest italic"
                 >
                    {topic}
                 </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}
