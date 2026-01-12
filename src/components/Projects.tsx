import { motion } from 'framer-motion'
import { ExternalLink, Github, Boxes } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Projects() {
  const projects = [
    {
      id: '01',
      title: 'CinePulse',
      category: 'NLP & RECOMMENDATION SYSTEMS',
      desc: 'Emotion-based movie recommender using NLP classification and embedding-based similarity matching for high-precision discovery.',
      tech: ['PYTHON', 'PYTORCH', 'TRANSFORMERS', 'VALD'],
      github: 'https://github.com/KunjShah95/CinePulse',
      slug: 'cinepulse',
      impact: 'PRODUCTION_READY',
    },
    {
      id: '02',
      title: 'GAP Miner',
      category: 'SEMANTIC INTELLIGENCE',
      desc: 'AI-powered skill gap analyzer leveraging semantic extraction from resumes and JDs to provide actionable learning paths.',
      tech: ['LLAMA-3', 'LANGCHAIN', 'FASTAPI', 'REACT'],
      github: 'https://github.com/KunjShah95/GAP-Miner',
      slug: 'gap-miner',
      impact: 'BETA_LIVE',
    },
    {
      id: '03',
      title: 'Railway Inspection',
      category: 'COMPUTER VISION',
      desc: 'Real-time wagon inspection system with multi-camera ingestion, motion deblurring, and low-light enhancement pipelines.',
      tech: ['C++', 'OPENCV', 'YOLOv8', 'vLLM'],
      github: 'https://github.com/KunjShah95/Railway-Inspection',
      slug: 'railway-inspection',
      impact: 'FIELD_TESTED',
    },
    {
      id: '04',
      title: 'UPI Fraud Guard',
      category: 'PREDICTIVE ANALYTICS',
      desc: 'Advanced transaction fraud detection system handling extreme class imbalance and anomaly detection with precision optimization.',
      tech: ['SCIKIT-LEARN', 'XGBOOST', 'PANDAS', 'FLASK'],
      github: 'https://github.com/KunjShah95/UPI-Fraud-Detection',
      slug: 'upi-fraud-guard',
      impact: 'ALGO_STABLE',
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32">
      <div className="container-aligned space-y-12 sm:space-y-16 md:space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 sm:pb-10 gap-4 sm:gap-8">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
              <Boxes className="w-3 h-3 sm:w-4 sm:h-4" />
              DEPLOYMENT_REGISTRY
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-txt uppercase italic">
              ENGINEERED <span className="text-secondary opacity-60 not-italic">WORKS</span>
            </h2>
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black">
             SYSTEM_COUNT: 0{projects.length}
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-6 sm:p-8 md:p-12 border border-border bg-surface/20 hover:border-primary/20 transition-all duration-700 flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start lg:items-center"
            >
              <div className="lg:col-span-1 border-r border-border pr-10 hidden lg:block">
                 <span className="text-4xl font-black text-txt/10 group-hover:text-primary transition-colors italic tracking-tighter">{proj.id}</span>
              </div>

              <div className="lg:col-span-11 w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-12 items-start md:items-center">
                 <div className="md:col-span-6 space-y-3 sm:space-y-6">
                    <div className="space-y-1 sm:space-y-2">
                       <div className="flex items-center gap-3">
                         <span className="lg:hidden text-xl font-black text-txt/20 group-hover:text-primary transition-colors italic tracking-tighter">{proj.id}</span>
                         <div className="text-[8px] sm:text-[9px] font-mono text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black">{proj.category}</div>
                       </div>
                       <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-txt group-hover:text-primary transition-colors tracking-tighter uppercase italic">{proj.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60 border-l-2 border-primary/10 pl-4 sm:pl-6 group-hover:border-primary/40 transition-colors">
                      {proj.desc}
                    </p>
                 </div>

                 <div className="md:col-span-4 flex flex-wrap gap-1.5 sm:gap-2 justify-start lg:justify-start">
                    {proj.tech.map(t => (
                      <span key={t} className="px-2 sm:px-4 py-1 sm:py-1.5 border border-border bg-surface/5 text-[7px] sm:text-[9px] font-black font-mono text-muted group-hover:text-primary group-hover:border-primary/20 transition-all uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                         {t}
                      </span>
                    ))}
                 </div>

                  <div className="md:col-span-2 flex justify-start md:justify-end gap-2 sm:gap-3">
                     <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 border border-border hover:border-primary/40 text-muted hover:text-txt transition-all bg-surface/5 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center" title="GitHub">
                        <Github className="w-4 h-4" />
                     </a>
                     <Link to={`/projects/${proj.slug}`} className="p-3 sm:p-4 border border-border hover:border-primary/40 text-muted hover:text-txt transition-all bg-surface/5 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center" title="Case Study">
                        <ExternalLink className="w-4 h-4" />
                     </Link>
                  </div>
               </div>

               <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-primary/20 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
