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
    <section id="skills" className="py-32">
      <div className="container-aligned space-y-24 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-4 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
            <Zap className="w-4 h-4" />
            VIRTUAL_CAPABILITIES
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-none">
            TECHNICAL <span className="text-secondary opacity-60 not-italic">STACK</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {modules.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="group relative bg-bg p-16 space-y-12 hover:bg-white/[0.01] transition-colors"
            >
               <div className="flex items-center justify-between">
                  <div className="w-16 h-16 border border-white/5 flex items-center justify-center group-hover:border-primary/40 transition-all bg-white/[0.02]">
                     <m.icon className="w-7 h-7 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-4xl font-black text-white/[0.03] group-hover:text-primary transition-colors italic tracking-tighter">0{i+1}</span>
               </div>
               
               <div className="space-y-8">
                  <div className="space-y-2 text-left">
                     <h3 className="text-3xl font-black text-white tracking-widest uppercase italic group-hover:text-primary transition-colors leading-none">{m.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-left border-t border-white/5 pt-10 mt-auto">
                     {m.caps.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[10px] font-mono text-muted uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                           <div className="w-1 h-3 bg-primary/20 group-hover:bg-primary transition-all"></div>
                           {cap}
                        </div>
                     ))}
                  </div>
               </div>
               
               {/* Symmetrical Corner Decoration */}
               <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-white/5 group-hover:border-primary/20 transition-all translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="pt-24 space-y-12">
           <div className="flex items-center justify-center gap-6">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-primary/20"></div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.8em] font-black">ACTIVE_LEARNING_NODES</span>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-primary/20"></div>
           </div>
           <div className="flex flex-wrap items-center justify-center gap-4">
              {['LLM_DISTILLATION', 'MULTIMODAL_RAG', 'QUANTUM_LOGIC', 'MLOPS_GOVERNANCE', 'GRAPH_NEURAL_NETS'].map((topic, i) => (
                 <motion.div 
                    key={topic}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-6 py-3 border border-white/5 bg-white/[0.02] text-[10px] font-black font-mono text-muted hover:text-primary hover:border-primary/40 transition-all cursor-crosshair uppercase tracking-widest italic"
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
