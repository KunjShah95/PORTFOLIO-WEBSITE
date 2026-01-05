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
      className="flex items-center gap-2 sm:gap-4 border border-primary/20 bg-surface/40 backdrop-blur-xl px-3 sm:px-5 py-2 sm:py-2.5 transition-all duration-500 hover:bg-primary/5 hover:border-primary/40 group border-glow"
    >
      <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center flex-shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30"></span>
        <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
           <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:animate-pulse transition-colors flex-shrink-0" />
           <span className="text-[8px] sm:text-[10px] font-black font-mono text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] truncate">AUDITORY_LINK</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[9px] font-mono text-muted/60 uppercase tracking-wider sm:tracking-widest font-bold">
          <span className="truncate">SIGNAL: IDLE</span>
          <span className="opacity-20 hidden sm:inline">//</span>
          <span className="group-hover:text-secondary transition-colors hidden sm:inline">AETHER</span>
        </div>
      </div>
      <div className="ml-1 sm:ml-2 w-px h-5 sm:h-6 bg-primary/10 group-hover:h-6 sm:group-hover:h-8 transition-all hidden sm:block"></div>
    </motion.a>
  )
}
