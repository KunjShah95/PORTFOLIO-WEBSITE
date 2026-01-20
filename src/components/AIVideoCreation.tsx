import { motion } from 'framer-motion'
import { Video, Sparkles, MessageCircle, Wand2, Clock, DollarSign, ArrowUpRight } from 'lucide-react'

export function AIVideoCreation() {
  const services = [
    {
      id: '01',
      title: 'AI AVATAR VIDEOS',
      category: 'SYNTHETIC_MEDIA',
      desc: 'Photorealistic AI avatars that speak your script. Perfect for courses, marketing, and social content.',
      features: ['CUSTOM_AVATARS', 'MULTI_LANGUAGE', 'LIP_SYNC'],
      turnaround: '24-48H',
      startingPrice: '$49',
    },
    {
      id: '02',
      title: 'TEXT TO VIDEO',
      category: 'GENERATIVE_CONTENT',
      desc: 'Transform scripts into stunning visual narratives using cutting-edge AI video generation models.',
      features: ['SORA', 'RUNWAY', 'PIKA_LABS'],
      turnaround: '48-72H',
      startingPrice: '$79',
    },
    {
      id: '03',
      title: 'AI SHORTS AUTOMATION',
      category: 'SOCIAL_SCALE',
      desc: 'Automated short-form content pipeline for TikTok, Reels, and YouTube Shorts. Batch production ready.',
      features: ['AUTO_CAPTIONS', 'VIRAL_HOOKS', 'BATCH_OPS'],
      turnaround: '12-24H',
      startingPrice: '$29',
    },
    {
      id: '04',
      title: 'VOICE CLONING',
      category: 'AUDIO_SYNTHESIS',
      desc: 'Clone voices for consistent branding. Maintain your unique tone across all video content.',
      features: ['ELEVEN_LABS', 'CUSTOM_VOICE', 'EMOTION_CTRL'],
      turnaround: '24H',
      startingPrice: '$39',
    },
  ]

  const processSteps = [
    { step: '01', label: 'BRIEF INTAKE', desc: 'Share your vision and requirements' },
    { step: '02', label: 'SCRIPT REFINE', desc: 'AI-enhanced script optimization' },
    { step: '03', label: 'GENERATION', desc: 'Cutting-edge AI video synthesis' },
    { step: '04', label: 'DELIVERY', desc: 'Polished output in your format' },
  ]

  return (
    <section id="ai-videos" className="section-padding relative overflow-hidden">
      <div className="container-aligned space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Video className="w-4 h-4" />
              CONTENT_STUDIO
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              AI Video <span className="text-muted font-light">Creation</span>
            </h2>
          </div>
          <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold">
            SERVICES_ACTIVE: {services.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Value Proposition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 bg-surface border border-border rounded-lg"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-sm">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-txt uppercase tracking-tight">
                  Turn Ideas Into Viral Content
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
                  Leverage cutting-edge AI to produce professional video content at a fraction of traditional costs.
                  Perfect for creators, startups, and businesses looking to scale their content game.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all rounded-sm shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Get Quote
            </a>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-8 border border-border/50 bg-surface/30 hover:bg-surface/80 hover:border-primary/30 transition-all rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-black text-border/40 group-hover:text-primary/20 transition-colors">
                    {service.id}
                  </span>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-txt group-hover:text-primary transition-colors uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-surfaceHighlight rounded-sm text-[10px] font-bold txt-mono text-muted uppercase tracking-widest">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="text-[10px] font-bold txt-mono text-muted/60 uppercase tracking-wider border-b border-border/50 pb-0.5">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-end min-w-[140px]">
                  <div className="flex items-center gap-2 text-muted text-xs txt-mono font-bold uppercase tracking-wider">
                    <Clock className="w-3 h-3" />
                    {service.turnaround}
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase">
                    <DollarSign className="w-4 h-4" />
                    From {service.startingPrice}
                  </div>
                  <a
                    href="#contact"
                    className="mt-2 flex items-center gap-2 text-xs font-bold txt-mono text-txt hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    ORDER <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Wand2 className="w-4 h-4" />
              WORKFLOW_SEQUENCE
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-txt uppercase tracking-tight">
              How It <span className="text-muted font-light">Works</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 border border-border/50 bg-surface/20 hover:bg-surface/50 transition-all rounded-lg text-center space-y-4 group"
              >
                <div className="text-3xl font-black text-border/40 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-txt uppercase tracking-wide group-hover:text-primary transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-[10px] txt-mono text-muted uppercase tracking-wider mt-1 opacity-80">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
