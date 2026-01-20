import { motion } from 'framer-motion'
import { MessageSquare, ArrowUpRight } from 'lucide-react'

import { SOCIALS } from '../data/portfolio'

export function Contact() {

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-aligned">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Header Area */}
          <div className="lg:col-span-12 border-b border-border/50 pb-8 space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <MessageSquare className="w-4 h-4" />
              COMMUNICATION_RELAY
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Initiate <span className="text-muted font-light">Contact</span>
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 border border-border bg-surface hover:border-primary/40 flex items-center justify-between transition-all duration-300 rounded-sm hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="space-y-1">
                  <div className="text-xs txt-mono text-muted font-bold uppercase tracking-widest">{social.label}</div>
                  <div className="text-lg font-bold text-txt group-hover:text-primary transition-colors">{social.name}</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted/50 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Direct Email Module */}
          <div className="lg:col-span-4 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full group p-8 bg-gradient-to-br from-surface to-surfaceHighlight border border-border rounded-lg flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full w-fit">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] txt-mono text-green-500 tracking-widest font-bold uppercase">Open for Work</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-txt">
                    Let's Connect
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed">
                    Open for collaborations in AI research, agentic systems, and technical partnerships.
                  </p>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <a
                  href="https://wa.me/919106878258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-all rounded-sm shadow-lg shadow-primary/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
