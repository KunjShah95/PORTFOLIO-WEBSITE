import { motion } from 'framer-motion'
import { ExternalLink, Github, Boxes } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: '01',
      title: 'SENTINEL_CLI',
      category: 'AGENTIC_SECURITY',
      desc: 'AI-powered code guard with 13+ specialized analyzers for real-time security scanning and dependency analysis.',
      tech: ['NODE.JS', 'AI_ANALYZERS', 'SECURITY'],
      github: 'https://github.com/KunjShah95/SENTINEL-CLI',
      demo: 'https://sentinel-cli.vercel.app/',
      impact: 'v1.4_STABLE',
    },
    {
      id: '02',
      title: 'AETHER_AI',
      category: 'AUTONOMOUS_AGENTS',
      desc: 'Comprehensive framework for multi-agent orchestration. Built for autonomous task execution and complex chain logic.',
      tech: ['PYTHON', 'LANGCHAIN', 'AGENTS'],
      github: 'https://github.com/KunjShah95/AETHER-AI',
      demo: 'https://aether-ai-sand.vercel.app/',
      impact: 'BETA_ACTIVE',
    },
    {
      id: '03',
      title: 'NEURAL_TOKENIZER',
      category: 'NLP_RESEARCH',
      desc: 'Custom BPE tokenizer built from scratch for Sanskrit language preservation and fine-tuning GPT models.',
      tech: ['PYTHON', 'PYTORCH', 'NLP'],
      github: 'https://github.com/KunjShah95/TOKENIZER-FROM-SCRATCH',
      impact: 'RESEARCH_PHASE',
    },
    {
      id: '04',
      title: 'RESUME_MASTER',
      category: 'CAREER_INTELLIGENCE',
      desc: 'Intelligent AI agent for semantic job-resume matching and automated career path optimization.',
      tech: ['PYTHON', 'LLM', 'AUTOMATION'],
      github: 'https://github.com/KunjShah95/job-snipper',
      demo: 'https://jobsnipper.streamlit.app/',
      impact: 'PROTOTYPE_STABLE',
    }
  ]

  return (
    <section id="projects" className="py-32">
      <div className="container-aligned space-y-24">
        {/* Aligned Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-10 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
              <Boxes className="w-4 h-4" />
              DEPLOYMENT_REGISTRY
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-txt uppercase italic">
              ENGINEERED <span className="text-secondary opacity-60 not-italic">WORKS</span>
            </h2>
          </div>
          <div className="text-[10px] font-mono text-muted uppercase tracking-[0.3em] font-black">
             SYSTEM_COUNT: 0{projects.length}
          </div>
        </div>

        {/* Vertically Aligned Projects */}
        <div className="space-y-4">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-12 border border-border bg-surface/20 hover:border-primary/20 transition-all duration-700 flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-1 border-r border-border pr-10 hidden lg:block">
                 <span className="text-4xl font-black text-txt/10 group-hover:text-primary transition-colors italic tracking-tighter">{proj.id}</span>
              </div>

              <div className="lg:col-span-11 w-full grid md:grid-cols-12 gap-12 items-center">
                 <div className="md:col-span-6 space-y-6">
                    <div className="space-y-2">
                       <div className="text-[9px] font-mono text-primary uppercase tracking-[0.4em] font-black">{proj.category}</div>
                       <h3 className="text-4xl font-black text-txt group-hover:text-primary transition-colors tracking-tighter uppercase italic">{proj.title}</h3>
                    </div>
                    <p className="text-sm text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60 border-l-2 border-primary/10 pl-6 group-hover:border-primary/40 transition-colors">
                      {proj.desc}
                    </p>
                 </div>

                 <div className="md:col-span-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                    {proj.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 border border-border bg-surface/5 text-[9px] font-black font-mono text-muted group-hover:text-primary group-hover:border-primary/20 transition-all uppercase tracking-[0.2em]">
                         {t}
                      </span>
                    ))}
                 </div>

                 <div className="md:col-span-2 flex justify-end gap-3">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-4 border border-border hover:border-primary/40 text-muted hover:text-txt transition-all bg-surface/5 rounded-full">
                       <Github className="w-4 h-4" />
                    </a>
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="p-4 border border-border hover:border-primary/40 text-muted hover:text-txt transition-all bg-surface/5 rounded-full">
                         <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                 </div>
              </div>

              {/* Decorative Beam */}
              <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-primary/20 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
