import { Command } from 'lucide-react'

interface NavbarProps {
  onOpenCommand: () => void
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/5 supports-[backdrop-filter]:bg-background/20">
      <div className="mx-auto max-w-2xl px-6 md:px-0 lg:max-w-3xl flex items-center justify-between py-4">
        <a href="/" className="text-lg font-bold tracking-tighter text-white hover:text-neutral-300 transition-colors">
          ramx<span className="text-neutral-600">.in</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium text-neutral-400 sm:flex">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Work</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
          </ul>
          <button 
            onClick={onOpenCommand}
            className="group flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs text-neutral-400 hover:border-neutral-700 hover:text-white transition-all hover:bg-neutral-800"
          >
            <Command className="h-3 w-3 group-hover:text-white transition-colors" />
            <span>Search</span>
            <kbd className="hidden rounded bg-neutral-800 px-1.5 font-sans text-[10px] text-neutral-500 sm:inline-block border border-neutral-700 group-hover:text-neutral-400 transition-colors">⌘K</kbd>
          </button>
        </div>
      </div>
    </nav>
  )
}
