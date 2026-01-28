import { motion } from 'framer-motion'
import { Video, Clock, DollarSign, ArrowUpRight, Wand2 } from 'lucide-react'

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
    { step: '01', label: 'BRIEF_INTAKE', desc: 'Share your vision and requirements' },
    { step: '02', label: 'SCRIPT_REFINE', desc: 'AI-enhanced script optimization' },
    { step: '03', label: 'GENERATION', desc: 'Cutting-edge AI video synthesis' },
    { step: '04', label: 'DELIVERY', desc: 'Polished output in your format' },
  ]

  return (
    <section id="ai-videos" className="section-padding bg-bg relative overflow-hidden">
      <div className="container-aligned space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/30 pb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Video className="w-4 h-4" />
              CONTENT_GENERATION
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              AI Video <span className="text-muted/50 font-light">Creation</span>
            </h2>
          </div>
          <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold border border-primary/30 px-4 py-2 rounded-sm">
            SERVICES: {services.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-primary/20 bg-surface hover:border-primary/60 transition-all duration-500 rounded-sm overflow-hidden"
              whileHover={{ scale: 1.01, y: -4 }}
            >
              {/* Service ID */}
              <div className="lg:col-span-1 border-r border-primary/20 bg-primary/5 flex items-center justify-center py-6 lg:py-0">
                <span className="text-2xl font-bold txt-mono text-primary/40 group-hover:text-primary transition-colors">
                  {service.id}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-txt group-hover:text-primary transition-colors uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold txt-mono uppercase tracking-widest border border-primary/30 rounded-sm">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-[10px] font-bold txt-mono text-muted/70 uppercase tracking-wider px-2 py-1 border border-primary/20 rounded-sm bg-primary/5">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Action */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted text-xs txt-mono font-bold uppercase tracking-wider">
                    <Clock className="w-3 h-3" />
                    {service.turnaround}
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase txt-mono">
                    <DollarSign className="w-4 h-4" />
                    From {service.startingPrice}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-3 border border-primary/40 bg-surface hover:border-primary/60 hover:bg-primary/5 text-txt hover:text-primary transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm txt-mono"
                >
                  Order <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 pt-8 border-t border-primary/30 mt-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Wand2 className="w-4 h-4" />
              WORKFLOW_SEQUENCE
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-txt uppercase tracking-tight">
              How It <span className="text-muted/50 font-light">Works</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-4 border border-primary/20 bg-primary/5 hover:border-primary/60 hover:bg-primary/10 transition-all rounded-sm text-center space-y-3 group"
              >
                <div className="text-xl font-bold txt-mono text-primary/50 group-hover:text-primary transition-colors">
                  {step.step}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-txt uppercase tracking-wide group-hover:text-primary transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-[9px] txt-mono text-muted uppercase tracking-wider mt-0.5 opacity-70">
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
