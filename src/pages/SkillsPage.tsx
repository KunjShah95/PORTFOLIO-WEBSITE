import { Skills } from '../components/Skills'
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import { Cpu, Terminal, Shield } from 'lucide-react'

export function SkillsPage() {
  const secondaryStats = [
    { label: 'RUNTIME_ENV', value: 'LINUX_DARWIN', icon: Terminal },
    { label: 'CORE_STACK', value: 'PYTHON_TYPESCRIPT', icon: Cpu },
    { label: 'SYSTEM_SECURITY', value: 'DEV_SECOPS', icon: Shield },
  ]

  return (
    <div className="min-h-screen pt-24 sm:pt-32">
      <SEO 
        title="Technical DNA"
        description="A comprehensive map of Kunj Shah's AI Systems Engineering capabilities and technology stack."
        url="https://kunjshah.dev/skills"
      />
      
      <div className="container-aligned">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8 mb-20 md:mb-32"
        >
           <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]">
             KNOWLEDGE <br />
             <span className="text-primary italic">GRAPH</span>
           </h1>
           <p className="text-lg sm:text-xl text-muted font-mono uppercase tracking-tight italic opacity-60 leading-relaxed max-w-2xl">
              Specialized in the construction of autonomous agentic flows and full-stack AI applications. My stack is curated for rapid prototyping and scale.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-border">
              {secondaryStats.map((stat, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex items-center gap-2 text-primary">
                      <stat.icon className="w-3 h-3" />
                      <span className="text-[9px] font-black font-mono tracking-widest">{stat.label}</span>
                   </div>
                   <div className="text-sm font-black italic text-txt">{stat.value}</div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
      <Skills />
      </motion.div>

      <div className="container-aligned py-24 border-t border-border">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
               <h4 className="text-xs font-black font-mono tracking-[0.4em] uppercase text-primary">ETHICAL_AI</h4>
               <p className="text-[11px] font-mono text-muted uppercase leading-loose italic opacity-60">
                 Commitment to building safe, explainable, and human-aligned autonomous systems. Priority on bias mitigation and transparent reasoning loops.
               </p>
            </div>
            <div className="space-y-4">
               <h4 className="text-xs font-black font-mono tracking-[0.4em] uppercase text-primary">OPEN_SOURCE</h4>
               <p className="text-[11px] font-mono text-muted uppercase leading-loose italic opacity-60">
                 Active contributor to the agentic ecosystem. Building tools that empower developers to deploy scalable AI agents with ease.
               </p>
            </div>
            <div className="space-y-4">
               <h4 className="text-xs font-black font-mono tracking-[0.4em] uppercase text-primary">CONTINUOUS_SYNC</h4>
               <p className="text-[11px] font-mono text-muted uppercase leading-loose italic opacity-60">
                 Constantly indexing the latest research from arXiv and major AI labs to maintain an edge in state-of-the-art architectures.
               </p>
            </div>
         </div>
      </div>
    </div>
  )
}

