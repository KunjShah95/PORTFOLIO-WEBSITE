import { motion } from 'framer-motion'
import { User, Target, Cpu } from 'lucide-react'
import { SEO } from '../components/SEO'

export function AboutPage() {
   return (
      <div className="min-h-screen pt-32 pb-20">
         <SEO
            title="About"
            description="Learn about Kunj Shah, an AI/ML Engineer specializing in autonomous systems, agentic workflows, and LLM orchestration. 3rd Year CS student exploring MLOps."
            url="https://kunjshah.dev/about"
         />

         <div className="container-aligned space-y-20">
            <section className="space-y-12">
               <div className="border-b border-border/50 pb-8 space-y-4">
                  <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
                     <User className="w-4 h-4" />
                     About Me
                  </div>
                  <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-txt uppercase leading-none">
                     Architect <span className="text-muted font-light">Persona</span>
                  </h1>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                  <div className="lg:col-span-8 space-y-12">
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                     >
                        <h2 className="text-2xl sm:text-3xl font-bold text-txt leading-relaxed max-w-3xl">
                           Engineering the bridge between <span className="text-primary">human intent</span> and <span className="text-txt underline underline-offset-4 decoration-1">machine execution</span>.
                        </h2>

                        <div className="space-y-6 text-muted font-light text-lg leading-relaxed max-w-3xl">
                           <p>
                              Specializing in high-performance agentic systems, LLM orchestration, and distributed system architectures.
                              I focus on the "Surgical" layer of software engineering—where precision meets scalability.
                           </p>
                           <p>
                              My methodology integrates advanced RAG pipelines with resilient backend infrastructures,
                              ensuring that autonomous agents operate with maximum spectral efficiency and minimal latency.
                              I build for production, not just for the demo.
                           </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                           <div className="p-8 border border-border bg-surface rounded-lg space-y-4 group">
                              <div className="p-3 bg-surfaceHighlight rounded-md w-fit">
                                 <Target className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <h3 className="text-sm font-bold text-txt uppercase tracking-wide mb-2">
                                    Strategic Objective
                                 </h3>
                                 <p className="text-xs text-muted font-mono leading-relaxed uppercase tracking-wider">
                                    Standardizing multi-agent communication protocols for cross-infrastructure task delegation.
                                 </p>
                              </div>
                           </div>
                           <div className="p-8 border border-border bg-surface rounded-lg space-y-4 group">
                              <div className="p-3 bg-surfaceHighlight rounded-md w-fit">
                                 <Cpu className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <h3 className="text-sm font-bold text-txt uppercase tracking-wide mb-2">
                                    Operational Stack
                                 </h3>
                                 <p className="text-xs text-muted font-mono leading-relaxed uppercase tracking-wider">
                                    React // Python // LangChain // Docker // Vector_DBs
                                 </p>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  </div>

                  <div className="lg:col-span-4 space-y-12">
                     <div className="p-10 border border-border bg-surface rounded-lg space-y-8">
                        <div className="flex justify-center">
                           <div className="w-32 h-32 rounded-full overflow-hidden bg-surfaceHighlight flex items-center justify-center border border-border">
                              <User className="w-16 h-16 text-muted" />
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className="text-xs font-bold txt-mono text-muted uppercase tracking-widest border-b border-border/50 pb-2">Details</div>
                           <div className="space-y-3 text-sm">
                              <div className="flex justify-between items-center text-muted">
                                 <span>Status</span>
                                 <span className="text-green-500 font-bold uppercase tracking-wider">Open for Collab</span>
                              </div>
                              <div className="flex justify-between items-center text-muted">
                                 <span>Location</span>
                                 <span className="text-txt font-bold uppercase tracking-wider">Ahmedabad, India</span>
                              </div>
                              <div className="flex justify-between items-center text-muted">
                                 <span>TimeZone</span>
                                 <span className="text-txt font-bold uppercase tracking-wider">GMT+5:30</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}
