import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

export function HackathonsPage() {
  const hackathons = [
    {
      title: 'Global_AI_Summit_2024',
      award: 'Winner [Best Use of LLMs]',
      project: 'AetherAI Framework',
      description: 'Built a multi-agent orchestration framework for complex task delegation and memory persistence.',
      date: 'MAR 2024'
    },
    {
      title: 'EthIndia_2023',
      award: 'Finalist [Top 15]',
      project: 'Sentient Wallet',
      description: 'Implemented an AI-powered crypto wallet that analyzes market sentiment before authorizing trades.',
      date: 'DEC 2023'
    },
    {
      title: 'Vercel_Ship_2023',
      award: 'Honorable Mention',
      project: 'DevConsole AI',
      description: 'A browser-based IDE extension for real-time accessibility auditing using AI.',
      date: 'AUG 2023'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">
      <div className="flex items-end justify-between border-b border-border pb-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-display font-bold tracking-tight text-txt mb-2">Hackathon_Record</h2>
          <p className="text-muted text-sm font-mono tracking-widest uppercase">// COMPETITIVE_ENGAGEMENTS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {hackathons.map((h, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 bg-surface/50 border border-border hover:border-primary/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-txt uppercase tracking-tight">{h.title}</h3>
                    <p className="text-primary text-[10px] font-mono font-bold tracking-widest">{h.award}</p>
                  </div>
                </div>
                <div className="space-y-2 border-l border-border pl-4">
                   <p className="text-sm font-mono text-muted uppercase tracking-wider">PROJECT: {h.project}</p>
                   <p className="text-sm text-muted max-w-2xl">{h.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-mono text-txt/10 font-black tracking-tighter group-hover:text-primary/20 transition-colors">{h.date}</span>
              </div>
            </div>
            
            {/* Hover Beam Effect */}
            <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-all pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
