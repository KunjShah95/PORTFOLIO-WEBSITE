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
      { label: 'Work', href: '/projects' },
      { label: 'Labs', href: '/labs' },
      { label: 'Skills', href: '/skills' },
      { label: 'Contact', href: '/contact' },
   ]

   return (
      <div className="min-h-screen bg-bg text-txt selection:bg-primary/20 selection:text-primary transition-colors duration-500">
         <Helmet>
            <title>Kunj Shah | AI Engineer & Agent Builder</title>
            <meta name="description" content="Portfolio of Kunj Shah - AI Systems Engineer & Autonomous Agent Builder." />
         </Helmet>

         <CommandMenu open={isCommandOpen} setOpen={setIsCommandOpen} />

         {/* Editorial Navbar */}
         <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-surface/80 backdrop-blur-md border-b border-border/50' : 'py-6 md:py-8 bg-transparent'
               }`}
         >
            <div className="container-aligned flex items-center justify-between">
               <Link to="/" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-sm bg-primary text-white flex items-center justify-center font-black text-lg shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                     K
                  </div>
                  <div className="flex flex-col">
                     <span className="text-sm font-bold tracking-wide text-txt group-hover:text-primary transition-colors">KUNJ SHAH</span>
                     <span className="text-[10px] txt-mono text-muted uppercase tracking-widest hidden sm:block">AI Systems Engineer</span>
                  </div>
               </Link>

               <nav className="hidden lg:flex items-center gap-8">
                  {navLinks.map((link) => (
                     <NavLink
                        key={link.label}
                        to={link.href}
                        className={({ isActive }: { isActive: boolean }) => `text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${isActive ? 'text-primary' : 'text-muted hover:text-txt'}`}
                     >
                        {link.label}
                        {location.pathname === link.href && (
                           <motion.div
                              layoutId="nav-indicator"
                              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                           />
                        )}
                     </NavLink>
                  ))}
               </nav>

               <div className="flex items-center gap-3">
                  <button
                     onClick={() => setIsCommandOpen(true)}
                     className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-border/50 hover:border-primary/50 transition-all text-[10px] txt-mono text-muted hover:text-txt uppercase tracking-widest bg-surface/50 rounded-sm"
                  >
                     <Command className="h-3 w-3" />
                     <span>CMD+K</span>
                  </button>
                  <ThemeToggle />
                  <button
                     className="lg:hidden p-2 border border-border/50 text-txt rounded-sm hover:bg-surfaceHighlight transition-colors"
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                     aria-label="Toggle menu"
                  >
                     {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
               </div>
            </div>
         </header>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl flex flex-col pt-32 px-6 lg:hidden"
               >
                  <button
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="absolute top-6 right-6 p-2 border border-border text-txt rounded-sm hover:border-primary transition-colors"
                  >
                     <X className="w-6 h-6" />
                  </button>

                  <nav className="flex flex-col gap-6">
                     {navLinks.map((link, i) => (
                        <motion.div
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           key={link.label}
                        >
                           <NavLink
                              to={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={({ isActive }) => `text-3xl font-black uppercase tracking-tight py-2 block border-l-2 pl-4 transition-all ${isActive ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-txt hover:pl-6'}`}
                           >
                              {link.label}
                           </NavLink>
                        </motion.div>
                     ))}
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>

         <main className="min-h-screen pt-20">
            {children}
         </main>

         <AIAssistant />

         {/* Academic Footer */}
         <footer className="border-t border-border/50 bg-surface/30 section-padding">
            <div className="container-aligned">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16">
                  <div className="col-span-1 md:col-span-2 space-y-6">
                     <Link to="/" className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-sm bg-primary text-white flex items-center justify-center font-bold text-xs">K</div>
                        <span className="text-xs font-black tracking-widest text-txt uppercase">SHAH_KUNJ</span>
                     </Link>
                     <p className="text-sm text-muted leading-relaxed max-w-sm font-light">
                        Exploring the intersection of autonomous systems and neural architectures.
                        Building the next generation of intelligent agents.
                     </p>
                     <div className="flex gap-4 pt-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors txt-mono text-xs uppercase font-bold">Github</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors txt-mono text-xs uppercase font-bold">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors txt-mono text-xs uppercase font-bold">LinkedIn</a>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h4 className="text-xs font-black text-txt tracking-widest uppercase mb-4">Sitemap</h4>
                     <div className="flex flex-col gap-3">
                        <Link to="/projects" className="text-sm text-muted hover:text-primary transition-colors hover:pl-2 duration-300">Projects</Link>
                        <Link to="/skills" className="text-sm text-muted hover:text-primary transition-colors hover:pl-2 duration-300">Capabilities</Link>
                        <Link to="/labs" className="text-sm text-muted hover:text-primary transition-colors hover:pl-2 duration-300">Research Labs</Link>
                        <Link to="/contact" className="text-sm text-muted hover:text-primary transition-colors hover:pl-2 duration-300">Contact</Link>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h4 className="text-xs font-black text-txt tracking-widest uppercase mb-4">Status</h4>
                     <div className="flex items-center gap-2 px-3 py-1.5 border border-primary/20 bg-primary/5 text-primary rounded-full w-fit">
                        <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></div>
                        <span className="text-[10px] txt-mono tracking-widest font-bold uppercase">Open for Work</span>
                     </div>
                     <div className="text-xs text-muted/50 pt-2">
                        © 2026 Kunj Shah <br />
                        Deployed on Vercel Edge
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}
