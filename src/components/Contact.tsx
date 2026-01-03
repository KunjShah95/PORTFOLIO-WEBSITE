import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Mail, ExternalLink, MessageSquare } from 'lucide-react'

export function Contact() {
  const socials = [
    {
      name: 'LINKEDIN',
      url: 'https://www.linkedin.com/in/kunjshah05',
      icon: Linkedin,
      label: 'PROFESSIONAL_SYNC'
    },
    {
      name: 'X_TWITTER',
      url: 'https://x.com/kunjshah_dev',
      icon: Twitter,
      label: 'SIGNAL_STREAM'
    },
    {
      name: 'GITHUB_V1',
      url: 'https://github.com/KunjShah95',
      icon: Github,
      label: 'CORE_REPOSITORY'
    },
    {
      name: 'GITHUB_V2',
      url: 'https://github.com/KunjShah01',
      icon: Github,
      label: 'RESEARCH_LABS'
    },
    {
      name: 'HUGGING_FACE',
      url: 'https://huggingface.co/kunjshah01',
      icon: ExternalLink,
      label: 'MODEL_VAULT'
    }
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="container-aligned px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Header Area */}
          <div className="lg:col-span-12 border-b border-border pb-16 space-y-6">
            <div className="flex items-center gap-4 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
               <MessageSquare className="w-4 h-4" />
               COMMUNICATION_RELAY
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-txt uppercase italic leading-none">
              INITIATE <span className="text-secondary opacity-60 not-italic">CONTACT</span>
            </h2>
          </div>

          {/* Contact Methods */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {socials.map((social, i) => (
              <motion.a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group p-8 md:p-10 border border-border bg-surface/20 flex items-center justify-between hover:border-primary/30 transition-all duration-500 border-glow rounded-[2rem]"
              >
                <div className="space-y-2 max-w-[70%]">
                  <div className="text-[9px] md:text-[10px] font-mono text-muted group-hover:text-primary transition-colors tracking-widest font-black italic">{social.label}</div>
                  <div className="text-xl md:text-2xl font-black text-txt group-hover:text-primary transition-colors italic tracking-tighter truncate md:whitespace-normal">{social.name}</div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all flex-shrink-0">
                   <social.icon className="w-4 h-4 md:w-5 md:h-5 text-muted group-hover:text-primary" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Direct Email Module */}
          <div className="lg:col-span-4 h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-full group p-8 md:p-10 border border-primary/20 bg-gradient-to-br from-primary/10 via-surface/30 to-surface/10 flex flex-col justify-between relative border-glow rounded-[2rem]"
            >
              {/* Header Badge */}
              <div className="space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-mono text-primary tracking-[0.3em] font-bold uppercase">ONLINE</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-txt tracking-tight leading-none">
                    Let's <span className="text-primary">Connect</span>
                  </h3>
                  <p className="text-sm text-muted/80 font-light leading-relaxed max-w-[280px]">
                    Open for collaborations in AI research, agentic systems, and technical partnerships.
                  </p>
                </div>
              </div>

              <div className="pt-8 md:pt-10 relative z-10 space-y-4">
                <a 
                  href="mailto:kunjkshah05@gmail.com" 
                  className="group/btn flex items-center justify-center gap-3 w-full py-4 md:py-5 bg-primary text-bg font-bold text-sm tracking-wide hover:bg-txt transition-all duration-300 rounded-full shadow-lg shadow-primary/20"
                >
                  <Mail className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  <span>Send Message</span>
                </a>
                <div className="text-center">
                  <a 
                    href="mailto:kunjkshah05@gmail.com" 
                    className="text-xs text-muted/60 font-mono hover:text-primary transition-colors"
                  >
                    kunjkshah05@gmail.com
                  </a>
                </div>
              </div>

              {/* Decorative Elements - contained within card */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-secondary/5 blur-[40px] rounded-full pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
