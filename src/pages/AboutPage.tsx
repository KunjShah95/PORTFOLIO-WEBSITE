import { motion } from 'framer-motion'
import { User, Target, Zap, Shield, Cpu, Activity } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
      <section className="space-y-16">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-accent font-mono text-[10px] tracking-[0.3em] uppercase">
              <User className="w-3 h-3" />
              <span>Identity_Module</span>
            </div>
            <h2 className="text-5xl font-bold tracking-tighter text-txt uppercase">Architect_Persona</h2>
          </div>
          <div className="hidden md:block text-[9px] font-mono text-muted/30 uppercase tracking-[0.3em]">
             Authorized_Access_Only
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="space-y-8"
            >
               <h3 className="text-3xl font-bold text-txt tracking-tight leading-tight uppercase max-w-2xl group">
                  Engineering the bridge between <span className="text-accent underline underline-offset-8 decoration-1">human intent</span> and <span className="text-txt bg-surface/5 px-3 py-1">machine execution</span>.
               </h3>
               
               <div className="space-y-6 text-txtDim font-mono text-sm leading-relaxed max-w-3xl">
                  <p className="border-l border-border pl-6 italic">
                     Specializing in high-performance agentic systems, LLM orchestration, and distributed system architectures. 
                     I focus on the "Surgical" layer of software engineering—where precision meets scalability.
                  </p>
                  <p>
                     My methodology integrates advanced RAG pipelines with resilient backend infrastructures, 
                     ensuring that autonomous agents operate with maximum spectral efficiency and minimal latency. 
                     I build for production, not just for the demo.
                  </p>
               </div>

               <div className="pt-8 grid sm:grid-cols-2 gap-8">
                  <div className="p-8 border border-border bg-surface/30 relative group overflow-hidden">
                     <div className="absolute top-0 right-0 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Activity className="w-full h-full text-txt" />
                     </div>
                     <h4 className="text-[10px] font-bold text-txt tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                        <Target className="w-3 h-3 text-accent" />
                        Strategic_Objective
                     </h4>
                     <p className="text-[11px] text-muted font-mono leading-relaxed uppercase tracking-tight">
                        Standardizing multi-agent communication protocols for cross-infrastructure task delegation.
                     </p>
                  </div>
                  <div className="p-8 border border-border bg-surface/30 relative group overflow-hidden">
                     <div className="absolute top-0 right-0 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Cpu className="w-full h-full text-txt" />
                     </div>
                     <h4 className="text-[10px] font-bold text-txt tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        Operational_Stack
                     </h4>
                     <p className="text-[11px] text-muted font-mono leading-relaxed uppercase tracking-tight">
                        React // Python // LangChain // Docker // Vector_DBs // Distributed_Systems
                     </p>
                  </div>
               </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 space-y-12">
             <div className="aspect-[4/5] bg-surface/50 border border-border relative overflow-hidden group">
                {/* Placeholder for an actual image or a generated asset */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <Shield className="w-24 h-24 text-txt/5 group-hover:text-accent/10 transition-colors duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-bg to-transparent">
                   <div className="text-[9px] font-mono text-accent font-bold tracking-[0.3em] uppercase mb-1">Status: Operational</div>
                   <div className="text-xl font-bold text-txt uppercase tracking-tighter">SEC_IDENTITY_01</div>
                </div>
                {/* Surgical scanning line effect */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-px bg-accent/20 z-20 pointer-events-none"
                />
             </div>

             <div className="space-y-4">
                <div className="text-[9px] font-mono text-muted uppercase tracking-widest border-b border-border pb-2 font-bold">Protocol_Access</div>
                <div className="flex flex-col gap-2">
                   <div className="flex justify-between items-center py-1">
                      <span className="text-[10px] font-mono text-muted">Availability</span>
                      <span className="text-[10px] font-mono text-green-500">OPEN_FOR_COLLAB</span>
                   </div>
                   <div className="flex justify-between items-center py-1">
                      <span className="text-[10px] font-mono text-muted">Geo_Location</span>
                      <span className="text-[10px] font-mono text-txt">AHMEDABAD_INDIA</span>
                   </div>
                   <div className="flex justify-between items-center py-1">
                      <span className="text-[10px] font-mono text-muted">Time_Zone</span>
                      <span className="text-[10px] font-mono text-txt">GMT+5:30</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
