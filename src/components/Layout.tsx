import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Command } from 'lucide-react'
import { CommandMenu } from './CommandMenu'
import { ThemeToggle } from './ThemeToggle'
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
    { label: 'RESUME', href: '/resume.pdf' },
    { label: 'AI VIDEOS', href: '/ai-videos' },
    { label: 'SKILLS', href: '/skills' },
    { label: 'LABS', href: '/labs' },
    { label: 'BLOGS', href: '/blogs' },
    { label: 'CONTACT', href: '/contact' },
  ]

  return (
    <div className="min-h-screen bg-bg text-txt selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>Kunj Shah | AI Engineer & Agent Builder</title>
        <meta name="description" content="Portfolio of Kunj Shah - AI Systems Engineer & Autonomous Agent Builder." />
      </Helmet>

      <CommandMenu open={isCommandOpen} setOpen={setIsCommandOpen} />
      
      {/* Centered Premium Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6 md:py-10'}`}>
        <div className="container-aligned flex items-center justify-between">
           <Link to="/" className="flex items-center gap-2 sm:gap-4 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-txt text-bg flex items-center justify-center font-black text-lg sm:text-xl transition-all group-hover:bg-primary group-hover:text-white shadow-glow">K</div>
              <div className="flex flex-col">
                 <span className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.4em] text-txt">KUNJ_SHAH</span>
                 <span className="text-[7px] sm:text-[8px] font-mono text-primary/40 uppercase tracking-wider sm:tracking-widest group-hover:text-primary transition-colors hidden sm:block">AI Engineer & Builder</span>
              </div>
           </Link>

           <nav className="hidden lg:flex items-center gap-1 bg-surface/20 backdrop-blur-3xl border border-border p-1 px-2 rounded-full">
              {navLinks.map((link) => (
                 <NavLink 
                    key={link.label} 
                    to={link.href} 
                    className={({ isActive }: { isActive: boolean }) => `text-[9px] font-black transition-all tracking-[0.2em] font-mono px-5 py-2.5 relative group ${isActive ? 'text-primary' : 'text-muted hover:text-txt'} rounded-full`}
                   >
                    <span className="relative z-10">{link.label}</span>
                    {location.pathname === link.href && (
                      <motion.div 
                        layoutId="nav-active"
                        className="absolute inset-0 bg-primary/5 border-b-2 border-primary rounded-full"
                        transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
                      />
                    )}
                 </NavLink>
              ))}
           </nav>

           <div className="flex items-center gap-2 sm:gap-4">
               <button 
                 onClick={() => setIsCommandOpen(true)}
                 className="hidden md:flex items-center gap-3 px-4 py-2 border border-border hover:border-primary/40 transition-all text-[9px] font-mono text-muted hover:text-txt uppercase tracking-widest bg-surface/50 rounded-full"
               >
                  <Command className="h-3 w-3" />
                  <span>Search</span>
                  <span className="opacity-20 text-[8px]">⌘K</span>
               </button>
               <ThemeToggle />
               <button 
                 className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 border border-border flex items-center justify-center text-txt rounded-lg min-h-[44px] min-w-[44px]"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 aria-label="Toggle menu"
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
            className="fixed inset-0 z-[60] bg-bg flex flex-col justify-center items-center lg:hidden safe-area-inset"
          >
             <nav className="flex flex-col gap-6 sm:gap-10 text-center px-6">
                {navLinks.map((link, i) => (
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.08 }}
                     key={link.label}
                   >
                     <NavLink 
                       to={link.href} 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className={({ isActive }: { isActive: boolean }) => `text-2xl sm:text-4xl font-black transition-all uppercase tracking-tight sm:tracking-tighter py-2 block min-h-[44px] ${isActive ? 'text-primary' : 'text-muted hover:text-txt'}`}
                     >
                        {link.label}
                     </NavLink>
                   </motion.div>
                ))}
             </nav>
             <button 
               onClick={() => setIsMobileMenuOpen(false)}
               className="absolute top-4 right-4 sm:top-10 sm:right-10 w-12 h-12 border border-border flex items-center justify-center text-txt rounded-lg min-h-[44px] min-w-[44px]"
               aria-label="Close menu"
             >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
             </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
          {children}
      </main>

      <AIAssistant />

      {/* Symmetrical Balanced Footer */}
      <footer className="border-t border-border bg-bg py-12 sm:py-20 md:py-32 relative">
        <div className="container-aligned">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-24 items-start">
              <div className="space-y-6 sm:space-y-8">
                 <Link to="/" className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-txt text-bg flex items-center justify-center font-black text-xl sm:text-2xl">K</div>
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.6em] text-txt">SHAH_KUNJ</span>
                 </Link>
                 <p className="text-[10px] sm:text-[11px] text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60">
                    Exploring the intersection of autonomous systems and neural architectures. 3rd Year CS Undergrad. Specialized in Agentic Flow and MLOps.
                 </p>
              </div>

              <div className="space-y-6 sm:space-y-10">
                 <h4 className="text-[9px] sm:text-[10px] font-black text-txt tracking-[0.3em] sm:tracking-[0.4em] uppercase">| KNOWLEDGE_MAP</h4>
                 <div className="grid grid-cols-2 gap-3 sm:gap-4 font-mono text-[9px] sm:text-[10px] text-muted">
                    <Link to="/" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">HOME</Link>
                    <Link to="/about" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">ABOUT</Link>
                    <Link to="/projects" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">PROJECTS</Link>
                    <Link to="/skills" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">SKILLS</Link>
                     <Link to="/ai-videos" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">AI VIDEOS</Link>
                    <Link to="/experience" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">EXPERIENCE</Link>
                    <Link to="/education" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">EDUCATION</Link>
                    <Link to="/labs" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">LABS</Link>
                    <Link to="/blogs" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">BLOGS</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors uppercase tracking-wider sm:tracking-widest py-1 min-h-[44px] flex items-center">CONTACT</Link>
                 </div>
              </div>

              <div className="space-y-6 sm:space-y-10 sm:col-span-2 md:col-span-1 md:text-right flex flex-col md:items-end">
                 <h4 className="text-[9px] sm:text-[10px] font-black text-txt tracking-[0.3em] sm:tracking-[0.4em] uppercase">| SYSTEM_STATUS</h4>
                 <div className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 border border-primary/20 bg-primary/5 text-primary rounded-full w-fit">
                    <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                    <span className="text-[8px] sm:text-[9px] font-mono tracking-wider sm:tracking-widest font-black uppercase">Active Undergrad Phase</span>
                 </div>
                 <div className="pt-4 sm:pt-8 text-[8px] sm:text-[9px] font-mono text-muted/30 uppercase tracking-wider sm:tracking-widest">
                    Ahmedabad | IN <br/>
                    © 2026 Kunj Shah
                 </div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  )
}
