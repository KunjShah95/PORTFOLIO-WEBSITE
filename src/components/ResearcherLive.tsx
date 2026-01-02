import { motion } from 'framer-motion'
import { Github, Music, Activity, ExternalLink, Globe } from 'lucide-react'

export function ResearcherLive() {
  return (
    <section id="live" className="py-32">
      <div className="container-aligned space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
              <Activity className="w-4 h-4" />
              LIVE_DATA_SYNC
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">SYSTEM <span className="text-secondary opacity-60 not-italic">VITALITY</span></h2>
          </div>
          <div className="text-[10px] font-mono text-muted uppercase tracking-[0.3em] font-black italic">
             STATUS: FULLY_SYNCED
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* GitHub Contributions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group bg-surface/20 border border-white/5 p-12 lg:p-16 border-glow space-y-10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-[0.4em] font-black">CONTRIBUTION_GRID</span>
                  <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">NEURAL_DEPLOYS</h3>
                </div>
              </div>
              <a 
                href="https://github.com/KunjShah95" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-white/5 hover:border-primary/40 transition-all group/link"
              >
                <ExternalLink className="w-4 h-4 text-muted group-hover/link:text-primary transition-colors" />
              </a>
            </div>

            <div className="relative group/grid overflow-x-auto custom-scrollbar pb-4">
               {/* GitHub Contribution Graph Image */}
               <img 
                 src="https://ghchart.rshah.org/10B981/KunjShah95" 
                 alt="Kunj Shah GitHub Contributions"
                 className="w-full min-w-[700px] invert brightness-200 opacity-60 group-hover/grid:opacity-100 transition-opacity duration-700"
               />
               <div className="absolute inset-x-0 bottom-4 h-full bg-gradient-to-t from-bg/20 to-transparent pointer-events-none"></div>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-white/5">
               <div className="space-y-1">
                  <div className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">COMMITS_PHASE_03</div>
                  <div className="text-xl font-black text-white italic">ACTIVE_PUSHING_MODES</div>
               </div>
               <div className="h-8 w-[1px] bg-white/10"></div>
               <div className="space-y-1 text-right ml-auto">
                  <div className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">LAST_DEPLOY_NODE</div>
                  <div className="text-xl font-black text-primary italic uppercase tracking-widest">SENTINEL_ALPHA</div>
               </div>
            </div>

            {/* Background Grid Accent */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
          </motion.div>

          {/* Spotify Playlist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 group bg-surface/20 border border-white/5 p-12 lg:p-16 border-glow space-y-10 relative overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Music className="w-6 h-6 text-secondary" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-muted uppercase tracking-[0.4em] font-black">RESEARCH_VIBES</span>
                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">NEURAL_SYNC</h3>
              </div>
            </div>

            <div className="flex-1 min-h-[300px] bg-black/40 border border-white/5 relative group/spotify">
               {/* Spotify Embed Placeholder - Using a generic Chill-step playlist for now */}
               <iframe 
                 src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Ueb9CjXvhS?utm_source=generator&theme=0" 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                 loading="lazy"
                 className="opacity-40 group-hover/spotify:opacity-100 transition-opacity duration-700"
               ></iframe>
               <div className="absolute inset-0 bg-secondary/5 pointer-events-none mix-blend-overlay"></div>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <Globe className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  <span className="text-[9px] font-mono text-muted uppercase tracking-[0.3em]">STREAMING_FROM_CORE_NETWORK</span>
               </div>
               <p className="text-[9px] font-mono text-muted/40 uppercase leading-relaxed italic">
                  SYNCHRONIZING_AUDIO_PATTERNS_WITH_DEEP_LEVEL_COGNITION_TASKS.
               </p>
            </div>

            {/* Background Blue Accent */}
             <div className="absolute -top-20 -left-20 w-48 h-48 bg-secondary/5 blur-[80px] pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
