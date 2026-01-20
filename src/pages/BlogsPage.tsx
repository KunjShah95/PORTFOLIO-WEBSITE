import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Hash, Terminal, ArrowUpRight } from 'lucide-react'
import { SEO } from '../components/SEO'

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
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Research Logs & Articles"
        description="Read Kunj Shah's technical logs and articles on MLOps, agentic workflows, and autonomous systems."
        url="https://kunjshah.dev/blogs"
      />

      <div className="container-aligned space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Terminal className="w-4 h-4" />
              Intelligence Vault
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-txt uppercase leading-none">
              Research <span className="text-muted font-light">Archive</span>
            </h1>
          </div>

          <div className="flex gap-2 p-1 bg-surface border border-border rounded-lg">
            <button
              onClick={() => setActiveTab('LOGS')}
              className={`px-6 py-2.5 text-xs font-bold txt-mono tracking-widest uppercase transition-all rounded-md ${activeTab === 'LOGS'
                ? 'bg-txt text-bg shadow-lg shadow-txt/10'
                : 'text-muted hover:text-txt hover:bg-surfaceHighlight'
                }`}
            >
              LOGS
            </button>
            <button
              onClick={() => setActiveTab('ARTICLES')}
              className={`px-6 py-2.5 text-xs font-bold txt-mono tracking-widest uppercase transition-all rounded-md ${activeTab === 'ARTICLES'
                ? 'bg-txt text-bg shadow-lg shadow-txt/10'
                : 'text-muted hover:text-txt hover:bg-surfaceHighlight'
                }`}
            >
              ARTICLES
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'LOGS' ? (
              <motion.div
                key="logs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {logs.map((log) => (
                  <div
                    key={log.hash}
                    className="group p-8 border border-border bg-surface border-l-4 border-l-border hover:border-l-primary transition-all rounded-r-lg shadow-sm"
                  >
                    <div className="grid lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-2 space-y-1">
                        <div className="flex items-center gap-2 text-primary font-bold txt-mono text-xs uppercase tracking-wider">
                          <Hash className="w-3 h-3" /> {log.hash}
                        </div>
                        <div className="text-[10px] text-muted font-mono uppercase opacity-60">
                          {log.date}
                        </div>
                      </div>

                      <div className="lg:col-span-1 border-l border-border pl-6 h-full flex flex-col justify-center hidden lg:flex">
                        <Terminal className="w-5 h-5 text-muted/30 group-hover:text-primary transition-colors" />
                      </div>

                      <div className="lg:col-span-5 space-y-1">
                        <div className="text-[10px] font-bold txt-mono text-muted uppercase tracking-widest">{log.module}</div>
                        <h3 className="text-xl font-bold text-txt uppercase tracking-wide group-hover:text-primary transition-colors">
                          {log.action}
                        </h3>
                      </div>

                      <div className="lg:col-span-4 text-xs text-muted leading-relaxed font-light pl-6 border-l border-border/50">
                        {log.details}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="articles"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {articles.map((art) => (
                  <div
                    key={art.id}
                    className="group p-8 border border-border bg-surface rounded-lg hover:border-primary/40 transition-all flex flex-col justify-between min-h-[300px]"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <span className="text-4xl font-black text-border/40 group-hover:text-primary/10 transition-colors">0{art.id}</span>
                        <div className="px-2 py-1 bg-surfaceHighlight rounded-sm text-[10px] font-bold txt-mono text-muted uppercase tracking-widest">
                          {art.readTime} Read
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="text-[10px] font-bold txt-mono text-primary uppercase tracking-widest">{art.date}</div>
                        <h3 className="text-2xl font-black text-txt uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                          {art.title}
                        </h3>
                        <p className="text-sm text-muted font-light leading-relaxed">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 flex justify-end">
                      <button className="flex items-center gap-2 text-xs font-bold txt-mono text-txt group-hover:text-primary transition-colors uppercase tracking-widest">
                        Read Full <ArrowUpRight className="w-4 h-4" />
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
