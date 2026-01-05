import { motion } from 'framer-motion'
import { Video, Sparkles, Play, MessageCircle, Wand2, Zap, Clock, DollarSign } from 'lucide-react'

export function AIVideoCreation() {
  const services = [
    {
      id: '01',
      title: 'AI_AVATAR_VIDEOS',
      category: 'SYNTHETIC_MEDIA',
      desc: 'Photorealistic AI avatars that speak your script. Perfect for courses, marketing, and social content.',
      features: ['CUSTOM_AVATARS', 'MULTI_LANGUAGE', 'LIP_SYNC'],
      turnaround: '24-48H',
      startingPrice: '$49',
    },
    {
      id: '02',
      title: 'TEXT_TO_VIDEO',
      category: 'GENERATIVE_CONTENT',
      desc: 'Transform scripts into stunning visual narratives using cutting-edge AI video generation models.',
      features: ['SORA', 'RUNWAY', 'PIKA_LABS'],
      turnaround: '48-72H',
      startingPrice: '$79',
    },
    {
      id: '03',
      title: 'AI_SHORTS_AUTOMATION',
      category: 'SOCIAL_SCALE',
      desc: 'Automated short-form content pipeline for TikTok, Reels, and YouTube Shorts. Batch production ready.',
      features: ['AUTO_CAPTIONS', 'VIRAL_HOOKS', 'BATCH_OPS'],
      turnaround: '12-24H',
      startingPrice: '$29',
    },
    {
      id: '04',
      title: 'VOICE_CLONING',
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
    <section id="ai-videos" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-aligned space-y-12 sm:space-y-16 md:space-y-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 sm:pb-10 gap-4 sm:gap-8">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
              <Video className="w-3 h-3 sm:w-4 sm:h-4" />
              CONTENT_STUDIO
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-txt uppercase italic">
              AI VIDEO <span className="text-secondary opacity-60 not-italic">CREATION</span>
            </h2>
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black">
            SERVICES_ACTIVE: 0{services.length}
          </div>
        </div>

        {/* Value Proposition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-6 sm:p-10 border border-primary/20 bg-primary/5"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 border border-primary/30 bg-primary/10">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-txt uppercase tracking-tight italic">
                  TURN IDEAS INTO VIRAL CONTENT
                </h3>
                <p className="text-xs sm:text-sm text-muted font-mono uppercase tracking-tight max-w-2xl">
                  Leverage cutting-edge AI to produce professional video content at a fraction of traditional costs. 
                  Perfect for creators, startups, and businesses looking to scale their content game.
                </p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-bg font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-primary/90 transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              GET_QUOTE
              <span className="w-4 h-[1px] bg-bg/50 group-hover:w-8 transition-all" />
            </a>
          </div>
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50" />
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-3 sm:space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-6 sm:p-8 md:p-12 border border-border bg-surface/20 hover:border-primary/20 transition-all duration-700"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start lg:items-center">
                {/* Service Number - Hidden on mobile */}
                <div className="lg:col-span-1 border-r border-border pr-10 hidden lg:flex items-center justify-center">
                  <span className="text-4xl font-black text-txt/10 group-hover:text-primary transition-colors italic tracking-tighter">
                    {service.id}
                  </span>
                </div>

                <div className="lg:col-span-11 w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start md:items-center">
                  {/* Service Info */}
                  <div className="md:col-span-5 space-y-3 sm:space-y-4">
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="lg:hidden text-xl font-black text-txt/20 group-hover:text-primary transition-colors italic tracking-tighter">
                          {service.id}
                        </span>
                        <div className="text-[8px] sm:text-[9px] font-mono text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black">
                          {service.category}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-txt group-hover:text-primary transition-colors tracking-tighter uppercase italic">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted font-mono leading-relaxed uppercase tracking-tight italic opacity-60 border-l-2 border-primary/10 pl-4 sm:pl-6 group-hover:border-primary/40 transition-colors">
                      {service.desc}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="md:col-span-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 border border-border bg-surface/5 text-[7px] sm:text-[8px] font-black font-mono text-muted group-hover:text-primary group-hover:border-primary/20 transition-all uppercase tracking-[0.1em] sm:tracking-[0.15em]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Pricing & Turnaround */}
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-muted">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.1em]">
                        {service.turnaround}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <DollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-sm sm:text-base font-black">
                        FROM {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-2 flex justify-start md:justify-end">
                    <a
                      href="#contact"
                      className="group/btn flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-border hover:border-primary bg-surface/5 hover:bg-primary/10 text-[8px] sm:text-[9px] font-black font-mono text-muted hover:text-primary transition-all uppercase tracking-[0.2em] min-h-[44px]"
                    >
                      <Play className="w-3 h-3" />
                      ORDER
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Beam */}
              <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-primary/20 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-primary font-mono text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] font-black uppercase">
              <Wand2 className="w-3 h-3 sm:w-4 sm:h-4" />
              WORKFLOW_SEQUENCE
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-txt uppercase italic tracking-tighter">
              HOW IT <span className="text-secondary opacity-60 not-italic">WORKS</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative p-4 sm:p-6 md:p-8 border border-border bg-surface/10 hover:border-primary/30 transition-all text-center space-y-3 sm:space-y-4"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-txt/10 group-hover:text-primary/30 transition-colors italic">
                  {step.step}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-txt uppercase tracking-tight group-hover:text-primary transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-[8px] sm:text-[10px] text-muted font-mono uppercase tracking-tight opacity-60">
                    {step.desc}
                  </p>
                </div>
                
                {/* Connector Line (hidden on last item) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative border border-dashed border-border p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 hover:bg-surface/5 transition-all group"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-border flex items-center justify-center group-hover:border-primary transition-all bg-surface/10">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
          </div>
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-txt uppercase italic tracking-tighter">
              READY TO CREATE VIRAL CONTENT?
            </h3>
            <p className="text-[10px] sm:text-xs text-muted font-mono uppercase tracking-tight">
              Let's discuss your project. Fast turnaround, competitive pricing, professional quality.
            </p>
          </div>
          <a
            href="#contact"
            className="group/cta flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-txt text-bg font-black text-xs sm:text-sm uppercase tracking-[0.3em] hover:bg-primary transition-all min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            START_PROJECT
            <span className="w-6 h-[2px] bg-bg/50 group-hover/cta:w-10 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
