import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Edit3 } from 'lucide-react'

export function Writing() {
   const posts = [
      {
         title: 'ORCHESTRATING AGENT SWARMS',
         excerpt: 'Strategies for managing hierarchical communication between autonomous LLM agents.',
         date: 'DEC 2025',
         readTime: '08 MIN',
         tags: ['AGENTS', 'LLM']
      },
      {
         title: 'MLOPS FOR THE EDGE',
         excerpt: 'Deploying quantized neural networks with automated retraining loops on restricted hardware.',
         date: 'NOV 2025',
         readTime: '15 MIN',
         tags: ['MLOPS', 'EDGE_COMPUTING']
      }
   ]

   return (
      <section id="writing" className="section-padding relative">
         <div className="container-aligned space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-6">
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
                     <Terminal className="w-4 h-4" />
                     INTELLIGENCE_REPORTS
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-txt uppercase leading-none">
                     Technical <span className="text-muted font-light">Journal</span>
                  </h2>
               </div>
            </div>

            <div className="grid gap-6">
               {posts.map((post, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1, duration: 0.8 }}
                     className="group relative bg-surface border border-border p-8 rounded-lg flex flex-col md:grid md:grid-cols-12 gap-8 items-center hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                  >
                     <div className="md:col-span-3 space-y-2 w-full">
                        <div className="text-[10px] font-bold txt-mono text-muted uppercase tracking-widest border-l-2 border-primary pl-3">
                           {post.date}
                        </div>
                        <div className="text-[10px] font-bold txt-mono text-muted/60 uppercase tracking-widest pl-3.5">
                           {post.readTime} READ
                        </div>
                     </div>

                     <div className="md:col-span-6 space-y-3 w-full">
                        <h3 className="text-2xl font-black text-txt uppercase tracking-tight group-hover:text-primary transition-colors">
                           {post.title}
                        </h3>
                        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
                           {post.excerpt}
                        </p>
                        <div className="flex gap-2 pt-2">
                           {post.tags.map(tag => (
                              <span key={tag} className="text-[10px] font-bold txt-mono text-muted/60 uppercase tracking-wider bg-surfaceHighlight px-2 py-0.5 rounded-sm">
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="md:col-span-3 flex justify-start md:justify-end w-full">
                        <button className="flex items-center gap-2 text-xs font-bold txt-mono text-txt group-hover:text-primary transition-colors uppercase tracking-widest">
                           Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Simplified Writing Feature */}
            <div className="pt-16">
               <div className="bg-surface border border-border rounded-lg p-10 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 bg-primary/10 rounded-full text-primary">
                     <Edit3 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-xl">
                     <h2 className="text-2xl font-black text-txt uppercase tracking-tight">Initiate New Journal Entry</h2>
                     <p className="text-xs font-mono text-muted uppercase tracking-wider leading-relaxed">
                        Decoding thought patterns into structured technical ledgers. Access terminal for drafting and syncing.
                     </p>
                  </div>

                  <button className="px-8 py-4 bg-txt text-bg text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all rounded-sm shadow-lg hover:shadow-primary/20">
                     Sync Entry Protocol
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}
