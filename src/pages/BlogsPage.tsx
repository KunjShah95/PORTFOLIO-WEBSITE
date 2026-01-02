import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Hash, Terminal, ChevronRight, Calendar } from 'lucide-react'

export function BlogsPage() {
  const [activeTab, setActiveTab] = useState<'LOGS' | 'ARTICLES'>('LOGS')

  const logs = [
    {
      date: '2025-12-31',
      hash: 'B12A8F',
      module: 'AGENT_CORE',
      action: 'DEPLOY_SWARM_v2',
      details: 'Successfully deployed a hierarchical agent cluster for autonomous code review and linting.'
    },
    {
      date: '2025-12-30',
      hash: 'C5B23D',
      module: 'MLOPS_PIPE',
      action: 'SYNC_MLFLOW',
      details: 'Integrated MLFlow tracking for model versioning across distributed training nodes.'
    }
  ]

  const articles = [
    {
      id: '01',
      title: 'MLOPS AT SCALE',
      excerpt: 'Practical guide to managing high-frequency model updates in a production environment.',
      date: 'DEC 2025',
      readTime: '10 MIN'
    },
    {
      id: '02',
      title: 'THE AGENTIC FRONTIER',
      excerpt: 'Transitioning from simple LLM wrappers to complex multi-agent reasoning frameworks.',
      date: 'NOV 2025',
      readTime: '08 MIN'
    }
  ]

  return (
    <div className="pt-48 pb-32 min-h-screen">
      <div className="container-aligned space-y-24">
        {/* Aligned Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
              <Terminal className="w-4 h-4" />
              INTELLIGENCE_VAULT
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-none">
              {activeTab === 'LOGS' ? 'MISSION_LOGS' : 'NEURAL_THOUGHTS'}
            </h2>
          </div>
          
          <div className="flex bg-surface/40 border border-white/10 p-1">
             <button 
               onClick={() => setActiveTab('LOGS')}
               className={`px-10 py-3 text-[9px] font-black font-mono tracking-[0.4em] uppercase transition-all ${
                 activeTab === 'LOGS' 
                 ? 'bg-primary text-black' 
                 : 'text-muted hover:text-white'
               }`}
             >
                LOGS
             </button>
             <button 
               onClick={() => setActiveTab('ARTICLES')}
               className={`px-10 py-3 text-[9px] font-black font-mono tracking-[0.4em] uppercase transition-all ${
                 activeTab === 'ARTICLES' 
                 ? 'bg-primary text-black' 
                 : 'text-muted hover:text-white'
               }`}
             >
                ARTICLES
             </button>
          </div>
        </div>

        {/* Content Block */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === 'LOGS' ? (
               <motion.div 
                 key="logs"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="space-y-4"
               >
                  {logs.map((log) => (
                    <div 
                      key={log.hash}
                      className="group relative p-16 border border-white/5 bg-surface/20 flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center hover:border-primary/20 transition-all border-glow"
                    >
                      <div className="lg:col-span-1 hidden lg:block">
                         <Hash className="w-8 h-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="lg:col-span-6 space-y-4 text-left w-full">
                         <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3 text-[9px] font-black font-mono text-primary tracking-[0.3em] bg-primary/5 px-3 py-1 border border-primary/20 italic">
                               <Calendar className="w-3.5 h-3.5" />
                               {log.date}
                            </div>
                            <div className="text-[9px] font-mono text-muted/30 uppercase tracking-[0.4em] font-black italic">HASH_{log.hash}</div>
                         </div>
                         <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors leading-none italic">{log.action}</h3>
                         <div className="text-[9px] font-mono text-secondary/60 uppercase tracking-[0.5em] font-black italic">{log.module}</div>
                      </div>
                      <div className="lg:col-span-5 border-l border-white/5 pl-10 w-full">
                         <p className="text-xs text-muted leading-relaxed font-mono italic group-hover:text-white transition-colors uppercase tracking-tight">
                            {log.details}
                         </p>
                      </div>
                    </div>
                  ))}
               </motion.div>
            ) : (
               <motion.div 
                 key="articles"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="grid gap-px bg-white/5 border border-white/5"
               >
                  {articles.map((art) => (
                    <div 
                      key={art.id}
                      className="group p-16 bg-bg hover:bg-white/[0.01] flex flex-col md:grid md:grid-cols-12 gap-12 items-center transition-all duration-700"
                    >
                       <div className="md:col-span-1 hidden md:block">
                          <span className="text-3xl font-black text-white/5 group-hover:text-primary transition-colors italic tracking-tighter">0{art.id}</span>
                       </div>
                       
                       <div className="md:col-span-8 space-y-6 w-full">
                          <div className="flex justify-between items-center text-[9px] font-black font-mono tracking-[0.4em]">
                             <div className="text-secondary opacity-60 px-3 py-1 border border-secondary/20 bg-secondary/5 italic">{art.date}</div>
                             <div className="text-muted/30 font-black uppercase tracking-[0.5em] italic">ADDR_{art.id}</div>
                          </div>
                          
                          <div className="space-y-4">
                             <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-500 italic">
                               {art.title}
                             </h3>
                             <p className="text-xs text-muted leading-loose font-mono uppercase tracking-tight opacity-40 group-hover:opacity-100 transition-opacity italic border-l-2 border-primary/10 pl-8 group-hover:border-primary/40">
                                {art.excerpt}
                             </p>
                          </div>
                       </div>

                       <div className="md:col-span-3 flex justify-end w-full">
                          <button className="flex items-center gap-4 text-[10px] font-black font-mono text-muted hover:text-primary uppercase tracking-[0.4em] transition-all group/btn">
                             <div className="flex flex-col items-end">
                                <span>[ Open_Doc ]</span>
                                <span className="text-[8px] opacity-30 italic">{art.readTime} Read</span>
                             </div>
                             <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                          </button>
                       </div>
                    </div>
                  ))}
               </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
