import { Activity } from 'lucide-react'
import { motion } from 'framer-motion'

export function Spotify() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 border border-primary/20 bg-surface/40 backdrop-blur-xl px-5 py-2.5 transition-all duration-500 hover:bg-primary/5 hover:border-primary/40 group border-glow"
    >
      <div className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
           <Activity className="h-3.5 w-3.5 text-primary group-hover:animate-pulse transition-colors" />
           <span className="text-[10px] font-black font-mono text-white uppercase tracking-[0.2em]">TITAN_AUDITORY_LINK</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] font-mono text-muted/60 uppercase tracking-widest font-bold">
          <span>SIGNAL: IDLE</span>
          <span className="opacity-20">//</span>
          <span className="group-hover:text-secondary transition-colors">AETHER_STREAM</span>
        </div>
      </div>
      <div className="ml-2 w-px h-6 bg-primary/10 group-hover:h-8 transition-all"></div>
    </motion.a>
  )
}
