import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Activity } from 'lucide-react'

export function Writing() {
  const posts = [
    {
      title: 'ORCHESTRATING AGENT SWARMS',
      excerpt: 'Strategies for managing hierarchical communication between autonomous LLM agents.',
      date: 'DEC 2025',
      readTime: '08 MIN',
    },
    {
      title: 'MLOPS FOR THE EDGE',
      excerpt: 'Deploying quantized neural networks with automated retraining loops on restricted hardware.',
      date: 'NOV 2025',
      readTime: '15 MIN',
    }
  ]

  return (
    <section id="writing" className="py-32">
      <div className="container-aligned space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
              <Terminal className="w-4 h-4" />
              INTELLIGENCE_REPORTS
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">TECHNICAL <span className="text-secondary opacity-60 not-italic">JOURNAL</span></h2>
          </div>
        </div>

        <div className="grid gap-4">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-surface/20 border border-white/5 p-12 lg:p-16 flex flex-col md:grid md:grid-cols-12 gap-12 items-center hover:bg-white/[0.01] transition-all border-glow cursor-pointer"
            >
              <div className="md:col-span-3 space-y-2">
                 <div className="text-[10px] font-mono text-primary font-black uppercase tracking-[0.4em] mb-4 bg-primary/5 px-3 py-1.5 w-fit border border-primary/20 italic">{post.date}</div>
                 <div className="flex items-center gap-3 text-[9px] font-mono text-muted uppercase tracking-[0.3em] font-black opacity-40 group-hover:opacity-100 transition-opacity italic">
                    <Activity className="w-3.5 h-3.5" />
                    {post.readTime}
                 </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                 <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase group-hover:text-primary transition-colors leading-none">{post.title}</h3>
                 <p className="text-xs text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-40 group-hover:opacity-100 transition-opacity border-l-2 border-primary/10 pl-6">
                    {post.excerpt}
                 </p>
              </div>

              <div className="md:col-span-3 flex justify-end">
                <div className="w-16 h-16 border border-white/5 group-hover:border-primary/40 group-hover:bg-primary/5 flex items-center justify-center transition-all duration-700 rotate-45 group-hover:rotate-0">
                    <ArrowRight className="h-6 w-6 text-muted group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>

        {/* Writing & Publishing Feature Layer */}
        <div className="pt-32">
           <div className="group relative bg-bg border border-dashed border-primary/20 p-16 lg:p-24 space-y-12 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <div className="space-y-6 relative">
                 <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-primary/20"></div>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.6em] font-black">LOG_ORCHESTRATION_V2</span>
                    <div className="h-[1px] w-12 bg-primary/20"></div>
                 </div>
                 <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase leading-none">INITIATE <span className="text-primary">NEW_JOURNAL_STREAM</span></h2>
                 <p className="text-xs text-muted font-mono uppercase max-w-2xl mx-auto leading-loose opacity-60 tracking-wider">
                    DECODING_THOUGHT_PATTERNS_INTO_STRUCTURED_TECHNICAL_LEDGERS. ACCESS_TERMINAL_FOR_DRAFTING_AND_SYNCING_NEW_RESEARCH_BLOGS.
                 </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                 <div className="p-8 border border-white/5 bg-white/[0.01] space-y-4 hover:border-primary/20 transition-all cursor-pointer group/card">
                    <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-2 font-black">DRAFT_MODE</div>
                    <div className="text-xs text-muted font-mono italic uppercase opacity-40 group-hover/card:opacity-100 transition-opacity">LOCAL_SYNC_ONLY</div>
                 </div>
                 <div className="p-8 border border-primary/40 bg-primary/5 space-y-4 hover:bg-primary/10 transition-all cursor-pointer group/card">
                    <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-2 font-black italic">COMPOSE_STREAM</div>
                    <div className="text-xs text-white font-mono italic uppercase opacity-80 animate-pulse">TERMINAL_ACTIVE</div>
                 </div>
                 <div className="p-8 border border-white/5 bg-white/[0.01] space-y-4 hover:border-primary/20 transition-all cursor-pointer group/card">
                    <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-2 font-black">PUBLISH_RELAY</div>
                    <div className="text-xs text-muted font-mono italic uppercase opacity-40 group-hover/card:opacity-100 transition-opacity">GLOBAL_DEFAULTS</div>
                 </div>
              </div>

              <div className="pt-8">
                 <button className="px-12 py-6 bg-white text-black text-[12px] font-black font-mono uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-primary/30 active:scale-95 italic">
                    SYNC_ENTRY_PROTOCOL
                 </button>
              </div>

              {/* Minimal Terminal Decoration */}
              <div className="absolute bottom-4 right-8 font-mono text-[8px] text-primary/20 tracking-widest hidden md:block uppercase">
                 JOURNAL_PROTO_STATUS: [AWAITING_INPUT]
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
