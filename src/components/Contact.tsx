import { motion } from 'framer-motion'
import { MessageSquare, Terminal } from 'lucide-react'

import { SOCIALS } from '../data/portfolio'

export function Contact() {

  return (
    <section id="contact" className="section-padding bg-bg relative">
      <div className="container-aligned">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Header Area */}
          <div className="lg:col-span-12 border-b border-primary/30 pb-8 space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Terminal className="w-4 h-4" />
              COMMUNICATION_TERMINAL
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Establish <span className="text-muted/50 font-light">Connection</span>
            </h2>
          </div>

          {/* Contact Methods */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-4 border border-primary/30 bg-surface hover:border-primary/60 hover:bg-surface/80 flex items-center justify-between transition-all duration-300 rounded-sm txt-mono text-xs"
              >
                <div className="space-y-1">
                  <div className="text-[8px] text-muted font-bold uppercase tracking-widest opacity-60">$ {social.label.toLowerCase()}</div>
                  <div className="font-bold text-txt group-hover:text-primary transition-colors">{social.name}</div>
                </div>
                <div className="w-4 h-4 border-l border-t border-primary/40 group-hover:border-primary/80 transition-colors transform -rotate-45"></div>
              </motion.a>
            ))}
          </div>

          {/* Direct Communication Module */}
          <div className="lg:col-span-4 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full group p-6 bg-surface border border-primary/30 hover:border-primary/60 flex flex-col justify-between relative overflow-hidden rounded-sm transition-all duration-300"
            >
              {/* Terminal Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-primary/20 to-transparent border-b border-primary/30 flex items-center px-4 txt-mono text-[8px] text-primary font-bold tracking-widest">
                &gt; PRIORITY_CHANNEL
              </div>

              <div className="space-y-6 relative z-10 mt-8">
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary/10 border border-primary/30 rounded-sm w-fit">
                  <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></div>
                  <span className="text-[10px] txt-mono text-primary tracking-widest font-bold uppercase">READY_FOR_INPUT</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-txt uppercase tracking-widest txt-mono">
                    Direct Channel
                  </h3>
                  <p className="text-xs text-muted leading-relaxed font-mono">
                    Open for research partnerships, technical collaborations, and agentic systems discussions.
                  </p>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <a
                  href="https://wa.me/919106878258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 bg-primary/10 border border-primary/40 hover:border-primary hover:bg-primary/20 text-primary font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2 txt-mono"
                >
                  <MessageSquare className="w-4 h-4" />
                  INITIATE_CONTACT
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
