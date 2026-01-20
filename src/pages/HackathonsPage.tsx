import { motion } from 'framer-motion'
import { Trophy, Calendar } from 'lucide-react'
import { SEO } from '../components/SEO'

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
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Hackathons"
        description="Hackathon achievements and awards won by Kunj Shah. Competitive programming and rapid prototyping."
        url="https://kunjshah.dev/hackathons"
      />

      <div className="container-aligned space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Trophy className="w-4 h-4" />
              Competitions
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-txt uppercase leading-none">
              Hackathon <span className="text-muted font-light">Record</span>
            </h1>
          </div>
        </div>

        <div className="grid gap-6">
          {hackathons.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-border bg-surface rounded-lg hover:border-primary/40 transition-all flex flex-col md:grid md:grid-cols-12 gap-8 items-start md:items-center"
            >
              <div className="md:col-span-8 flex items-start gap-6">
                <div className="p-3 bg-surfaceHighlight rounded-md hidden sm:block">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-txt uppercase tracking-wide group-hover:text-primary transition-colors">
                      {h.title.replace(/_/g, ' ')}
                    </h3>
                    <div className="text-xs font-bold txt-mono text-primary uppercase tracking-wider">{h.award}</div>
                  </div>

                  <div className="pl-4 border-l-2 border-border/50 space-y-1">
                    <div className="text-[10px] font-bold txt-mono text-muted uppercase tracking-widest">Project: {h.project}</div>
                    <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">{h.description}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end w-full">
                <div className="flex items-center gap-2 text-xs font-bold txt-mono text-muted uppercase tracking-wider bg-surfaceHighlight px-3 py-1.5 rounded-sm">
                  <Calendar className="w-3 h-3" />
                  {h.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
