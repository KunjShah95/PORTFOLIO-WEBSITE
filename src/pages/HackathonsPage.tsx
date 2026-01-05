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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-8 sm:space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-4 sm:pb-6 gap-3">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-txt mb-1 sm:mb-2">Hackathon_Record</h2>
          <p className="text-muted text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase">// COMPETITIVE_ENGAGEMENTS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {hackathons.map((h, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-5 sm:p-6 md:p-8 bg-surface/50 border border-border hover:border-primary/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-txt uppercase tracking-tight truncate">{h.title}</h3>
                    <p className="text-primary text-[9px] sm:text-[10px] font-mono font-bold tracking-wider sm:tracking-widest">{h.award}</p>
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2 border-l border-border pl-3 sm:pl-4">
                   <p className="text-xs sm:text-sm font-mono text-muted uppercase tracking-wide sm:tracking-wider">PROJECT: {h.project}</p>
                   <p className="text-xs sm:text-sm text-muted max-w-2xl">{h.description}</p>
                </div>
              </div>
              <div className="text-left md:text-right flex-shrink-0">
                <span className="text-xl sm:text-2xl font-mono text-txt/10 font-black tracking-tighter group-hover:text-primary/20 transition-colors">{h.date}</span>
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
