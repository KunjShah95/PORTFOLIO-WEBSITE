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
    <div className="pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-24 md:pb-32 min-h-screen">
      <div className="container-aligned space-y-12 sm:space-y-16 md:space-y-24">
        {/* Aligned Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 sm:pb-8 md:pb-10 gap-6 sm:gap-8 md:gap-10">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-4 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
              INTELLIGENCE_VAULT
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-txt uppercase italic leading-none">
              {activeTab === 'LOGS' ? 'MISSION_LOGS' : 'NEURAL_THOUGHTS'}
            </h2>
          </div>
          
          <div className="flex bg-surface/40 border border-border p-1">
             <button 
               onClick={() => setActiveTab('LOGS')}
               className={`px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-[8px] sm:text-[9px] font-black font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase transition-all min-h-[44px] ${
                 activeTab === 'LOGS' 
                 ? 'bg-primary text-bg' 
                 : 'text-muted hover:text-txt'
               }`}
             >
                LOGS
             </button>
             <button 
               onClick={() => setActiveTab('ARTICLES')}
               className={`px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-[8px] sm:text-[9px] font-black font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase transition-all min-h-[44px] ${
                 activeTab === 'ARTICLES' 
                 ? 'bg-primary text-bg' 
                 : 'text-muted hover:text-txt'
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
                 className="space-y-3 sm:space-y-4"
               >
                  {logs.map((log) => (
                    <div 
                      key={log.hash}
                      className="group relative p-6 sm:p-10 md:p-16 border border-border bg-surface/20 flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start lg:items-center hover:border-primary/20 transition-all border-glow"
                    >
                      <div className="lg:col-span-1 hidden lg:block">
                         <Hash className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-left w-full">
                         <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
                            {/* Mobile Icon */}
                            <Hash className="w-5 h-5 text-primary opacity-20 group-hover:opacity-100 transition-opacity lg:hidden flex-shrink-0" />
                            <div className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] font-black font-mono text-primary tracking-[0.2em] sm:tracking-[0.3em] bg-primary/5 px-2 sm:px-3 py-1 border border-primary/20 italic">
                               <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                               {log.date}
                            </div>
                            <div className="text-[7px] sm:text-[9px] font-mono text-muted/30 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black italic">HASH_{log.hash}</div>
                         </div>
                         <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-txt uppercase tracking-tighter group-hover:text-primary transition-colors leading-none italic">{log.action}</h3>
                         <div className="text-[8px] sm:text-[9px] font-mono text-secondary/60 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black italic">{log.module}</div>
                      </div>
                      <div className="lg:col-span-5 border-l border-border pl-4 sm:pl-6 md:pl-10 w-full">
                         <p className="text-[10px] sm:text-xs text-muted leading-relaxed font-mono italic group-hover:text-txt transition-colors uppercase tracking-tight">
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
                 className="grid gap-px bg-border border border-border"
               >
                  {articles.map((art) => (
                    <div 
                      key={art.id}
                      className="group p-6 sm:p-10 md:p-16 bg-bg hover:bg-surface/5 flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start md:items-center transition-all duration-700"
                    >
                       <div className="md:col-span-1 hidden md:block">
                          <span className="text-2xl sm:text-3xl font-black text-txt/5 group-hover:text-primary transition-colors italic tracking-tighter">0{art.id}</span>
                       </div>
                       
                       <div className="md:col-span-8 space-y-4 sm:space-y-6 w-full">
                          <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-black font-mono tracking-[0.3em] sm:tracking-[0.4em] flex-wrap gap-2">
                             <div className="flex items-center gap-3">
                               <span className="md:hidden text-xl font-black text-txt/10 group-hover:text-primary transition-colors italic tracking-tighter">0{art.id}</span>
                               <div className="text-secondary opacity-60 px-2 sm:px-3 py-1 border border-secondary/20 bg-secondary/5 italic">{art.date}</div>
                             </div>
                             <div className="text-muted/30 font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] italic">ADDR_{art.id}</div>
                          </div>
                          
                          <div className="space-y-3 sm:space-y-4">
                             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-txt uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-500 italic">
                               {art.title}
                             </h3>
                             <p className="text-[10px] sm:text-xs text-muted leading-relaxed sm:leading-loose font-mono uppercase tracking-tight opacity-40 group-hover:opacity-100 transition-opacity italic border-l-2 border-primary/10 pl-4 sm:pl-8 group-hover:border-primary/40">
                                {art.excerpt}
                             </p>
                          </div>
                       </div>

                       <div className="md:col-span-3 flex justify-start md:justify-end w-full">
                          <button className="flex items-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-black font-mono text-muted hover:text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em] transition-all group/btn min-h-[44px]">
                             <div className="flex flex-col items-start md:items-end">
                                <span>[ Open_Doc ]</span>
                                <span className="text-[7px] sm:text-[8px] opacity-30 italic">{art.readTime} Read</span>
                             </div>
                             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform" />
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
