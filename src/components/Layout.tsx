import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Command } from 'lucide-react'
import { CommandMenu } from './CommandMenu'
import { AIAssistant } from './AIAssistant'
import { Helmet } from 'react-helmet-async'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'SKILLS', href: '/skills' },
    { label: 'LABS', href: '/labs' },
    { label: 'BLOGS', href: '/blogs' },
  ]

  return (
    <div className="min-h-screen bg-bg text-txt selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>Kunj Shah // Technical Researcher</title>
        <meta name="description" content="Portfolio of Kunj Shah - 3rd Year CS Undergrad, AI Researcher, and Full Stack Builder." />
      </Helmet>

      <CommandMenu open={isCommandOpen} setOpen={setIsCommandOpen} />
      
      {/* Centered Premium Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-10'}`}>
        <div className="container-aligned flex items-center justify-between">
           <Link to="/" className="flex items-center gap-4 group">
              <div className="w-9 h-9 bg-white text-black flex items-center justify-center font-black text-xl transition-all group-hover:bg-primary group-hover:text-black shadow-glow">K</div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black tracking-[0.4em] text-white">KUNJ_SHAH</span>
                 <span className="text-[8px] font-mono text-primary/40 uppercase tracking-widest group-hover:text-primary transition-colors">Technical Researcher</span>
              </div>
           </Link>

           <nav className="hidden lg:flex items-center gap-1 bg-surface/20 backdrop-blur-3xl border border-white/5 p-1 px-2">
              {navLinks.map((link) => (
                 <NavLink 
                    key={link.label} 
                    to={link.href} 
                    className={({ isActive }: { isActive: boolean }) => `text-[9px] font-black transition-all tracking-[0.2em] font-mono px-5 py-2.5 relative group ${isActive ? 'text-primary' : 'text-muted hover:text-white'}`}
                   >
                    <span className="relative z-10">{link.label}</span>
                    {location.pathname === link.href && (
                      <motion.div 
                        layoutId="nav-active"
                        className="absolute inset-0 bg-primary/5 border-b-2 border-primary"
                        transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
                      />
                    )}
                 </NavLink>
              ))}
           </nav>

           <div className="flex items-center gap-4">
               <button 
                 onClick={() => setIsCommandOpen(true)}
                 className="hidden md:flex items-center gap-3 px-4 py-2 border border-white/5 hover:border-primary/40 transition-all text-[9px] font-mono text-muted hover:text-white uppercase tracking-widest bg-white/[0.02]"
               >
                  <Command className="h-3 w-3" />
                  <span>Search</span>
                  <span className="opacity-20 text-[8px]">⌘K</span>
               </button>
               <button 
                 className="lg:hidden w-10 h-10 border border-white/5 flex items-center justify-center text-white"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
               </button>
           </div>
        </div>
      </header>

      {/* Simplified Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg flex flex-col justify-center items-center lg:hidden"
          >
             <nav className="flex flex-col gap-10 text-center">
                {navLinks.map((link, i) => (
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     key={link.label}
                   >
                     <NavLink 
                       to={link.href} 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className={({ isActive }: { isActive: boolean }) => `text-4xl font-black transition-all uppercase tracking-tighter ${isActive ? 'text-primary' : 'text-muted'}`}
                     >
                        {link.label}
                     </NavLink>
                   </motion.div>
                ))}
             </nav>
             <button 
               onClick={() => setIsMobileMenuOpen(false)}
               className="absolute top-10 right-10 w-12 h-12 border border-white/5 flex items-center justify-center"
             >
                <X className="w-6 h-6" />
             </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
          {children}
      </main>

      <AIAssistant />

      {/* Symmetrical Balanced Footer */}
      <footer className="border-t border-white/5 bg-[#010101] py-32 relative">
        <div className="container-aligned">
           <div className="grid md:grid-cols-3 gap-24 items-start">
              <div className="space-y-8">
                 <Link to="/" className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black text-2xl">K</div>
                    <span className="text-xs font-black tracking-[0.6em] text-white">SHAH_KUNJ</span>
                 </Link>
                 <p className="text-[11px] text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60">
                    Exploring the intersection of autonomous systems and neural architectures. 3rd Year CS Undergrad at Indus University. Specialized in Agentic Flow and MLOps.
                 </p>
              </div>

              <div className="space-y-10">
                 <h4 className="text-[10px] font-black text-white tracking-[0.4em] uppercase">// KNOWLEDGE_MAP</h4>
                 <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-muted">
                    {navLinks.map(link => (
                       <Link key={link.label} to={link.href} className="hover:text-primary transition-colors uppercase tracking-widest">{link.label}</Link>
                    ))}
                 </div>
              </div>

              <div className="space-y-10 md:text-right flex flex-col md:items-end">
                 <h4 className="text-[10px] font-black text-white tracking-[0.4em] uppercase">// SYSTEM_STATUS</h4>
                 <div className="flex items-center gap-3 px-3 py-1.5 border border-primary/20 bg-primary/5 text-primary">
                    <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                    <span className="text-[9px] font-mono tracking-widest font-black uppercase">Active Undergrad Phase</span>
                 </div>
                 <div className="pt-8 text-[9px] font-mono text-muted/30 uppercase tracking-widest">
                    Ahmedabad // IN <br/>
                    © 2026 Kunj Shah
                 </div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  )
}
