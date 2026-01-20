import { motion } from 'framer-motion'
import { ExternalLink, Github, Boxes, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PROJECTS } from '../data/portfolio'

export function Projects() {

  return (
    <section id="projects" className="section-padding bg-bg relative">
      <div className="container-aligned space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Boxes className="w-4 h-4" />
              DEPLOYMENT_REGISTRY
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              Engineered <span className="text-muted font-light">Works</span>
            </h2>
          </div>
          <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold">
            SYSTEM_COUNT: {PROJECTS.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border bg-surface hover:border-primary/30 transition-all duration-500 rounded-lg overflow-hidden"
            >
              {/* ID Column */}
              <div className="lg:col-span-1 border-r border-border/50 bg-surfaceHighlight/30 flex items-center justify-center py-6 lg:py-0">
                <span className="text-lg lg:text-xl font-bold txt-mono text-muted/30 group-hover:text-primary transition-colors -rotate-0 lg:-rotate-90 whitespace-nowrap">
                  {proj.id}
                </span>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary/5 border border-primary/10 rounded-sm text-primary text-[10px] txt-mono font-bold uppercase tracking-widest">
                    <Terminal className="w-3 h-3" /> {proj.category}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-txt group-hover:text-primary transition-colors tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed max-w-xl">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-txt border border-border rounded-sm bg-surfaceHighlight/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action / Visual Column */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border/50 bg-surfaceHighlight/10 p-6 sm:p-8 flex flex-col justify-between gap-6">
                {/* This could be a static image preview in the future */}
                <div className="flex-1 bg-academic-dots opacity-20 rounded-md border border-dashed border-border min-h-[100px]"></div>

                <div className="flex items-center gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 border border-border bg-surface hover:border-primary/50 text-txt hover:text-primary transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="flex-1 px-4 py-3 bg-txt text-bg hover:bg-primary hover:text-white transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
                  >
                    View Case <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
