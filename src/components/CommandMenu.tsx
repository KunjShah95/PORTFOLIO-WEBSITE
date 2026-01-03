
// Fix unused imports for build
import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { Search, User, Briefcase, Terminal, Activity, Hash, Cpu, Command } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface CommandMenuProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [setOpen])

  const commands = [
    { icon: User, label: 'SYSTEM_PROFILE', shortcut: 'P', path: '/' },
    { icon: Briefcase, label: 'DEPLOYMENT_LOGS', shortcut: 'D', path: '/projects' },
    { icon: Cpu, label: 'PROTOCOL_STACK', shortcut: 'S', path: '/skills' },
    { icon: Hash, label: 'ARCHIVE_REPORTS', shortcut: 'A', path: '/blogs' },
    { icon: Activity, label: 'RESEARCH_LABS', shortcut: 'R', path: '/labs' },
  ]

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(search.toLowerCase())
  )

  const handleAction = (path: string) => {
    navigate(path)
    setOpen(false)
    setSearch('')
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-32 sm:pt-64">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-bg/90 backdrop-blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="relative w-full max-w-xl bg-bg border border-border shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            <div className="flex items-center border-b border-border px-10">
              <Search className="mr-6 h-5 w-5 shrink-0 text-primary opacity-20" />
              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex h-24 w-full bg-transparent py-4 text-[10px] font-black font-mono text-txt outline-none placeholder:text-muted/20 uppercase tracking-[0.5em] italic"
                placeholder="Query_System_Protocols..."
              />
              <div className="flex items-center gap-3">
                 <kbd className="inline-flex select-none items-center gap-1 border border-border bg-surface/5 px-3 py-1 font-mono text-[9px] font-black text-muted uppercase">
                    ESC
                 </kbd>
              </div>
            </div>
            
            <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <div className="mb-6 px-6 pt-4 text-[8px] font-black font-mono text-muted/30 uppercase tracking-[0.5em] italic">Station_Registry</div>
              <div className="space-y-1">
                 {filteredCommands.length > 0 ? (
                    filteredCommands.map((cmd) => (
                      <button 
                         key={cmd.label}
                         onClick={() => handleAction(cmd.path)}
                         className="flex w-full items-center justify-between px-6 py-5 text-[10px] group transition-all duration-500 hover:bg-surface/5 border border-transparent hover:border-border"
                      >
                         <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-surface/5 border border-border group-hover:border-primary/40 group-hover:bg-primary/5 transition-all flex items-center justify-center">
                               <cmd.icon className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-black font-mono tracking-[0.3em] uppercase text-muted group-hover:text-txt transition-colors italic">{cmd.label}</span>
                         </div>
                         {cmd.shortcut && (
                            <span className="text-[9px] font-black font-mono text-muted/20 group-hover:text-primary transition-all tracking-widest italic">{cmd.shortcut}</span>
                         )}
                      </button>
                    ))
                 ) : (
                    <div className="px-6 py-24 text-center space-y-6">
                       <Terminal className="w-12 h-12 text-txt/5 mx-auto" />
                       <p className="text-[10px] font-black font-mono text-muted/20 uppercase tracking-[0.5em] italic">
                          NULL_MATCH: SYSTEM_OFFLINE
                       </p>
                    </div>
                 )}
              </div>
            </div>

            <div className="p-8 border-t border-border bg-surface/40 flex items-center justify-between text-[8px] font-black font-mono text-muted/20 uppercase tracking-[0.6em] italic">
               <div className="flex items-center gap-10">
                  <span className="flex items-center gap-3">
                    <Command className="w-3 h-3 text-primary" />
                    Console_v2.1
                  </span>
                  <span>Ahmedabad // IN</span>
               </div>
               <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                     <span className="text-txt opacity-40">ENTER</span>
                     <span>Select</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
