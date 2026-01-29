import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { BLOGS } from '../data/portfolio'

export function Writing() {
   // Get featured blogs
   const featuredBlogs = BLOGS.filter(blog => blog.featured).slice(0, 3)

   return (
      <section id="writing" className="section-padding bg-bg relative">
         <div className="container-aligned space-y-16">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/30 pb-8 gap-6">
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
                     <BookOpen className="w-4 h-4" />
                     TECHNICAL_WRITING
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-txt uppercase leading-none">
                     Research <span className="text-muted/50 font-light">Archive</span>
                  </h2>
               </div>
               <div className="txt-mono text-xs text-muted uppercase tracking-widest font-bold border border-primary/30 px-4 py-2 rounded-sm">
                  ARTICLES: {BLOGS.length.toString().padStart(2, '0')}
               </div>
            </div>

            {/* Featured Articles Grid */}
            <div className="space-y-6">
               {featuredBlogs.map((blog, i) => (
                  <motion.a
                     key={blog.id}
                     href={`/blogs/${blog.slug}`}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1, duration: 0.8 }}
                     className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-primary/20 bg-surface hover:border-primary/60 transition-all duration-500 rounded-sm overflow-hidden"
                     whileHover={{ scale: 1.01, y: -4 }}
                  >
                     {/* Meta Column */}
                     <div className="lg:col-span-2 border-r border-primary/20 bg-primary/5 p-6 flex flex-col justify-between">
                        <div className="space-y-4">
                           <span className="text-xs font-bold txt-mono text-primary/60 group-hover:text-primary transition-colors uppercase tracking-widest">
                              {blog.date}
                           </span>
                           <span className="block text-[10px] font-bold txt-mono text-muted/60 uppercase tracking-widest">
                              {blog.readTime} MIN READ
                           </span>
                        </div>
                        <span className="text-[10px] font-bold txt-mono text-muted/50 uppercase tracking-widest">
                           {blog.category}
                        </span>
                     </div>

                     {/* Content Column */}
                     <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                        <div className="space-y-4">
                           <h3 className="text-2xl sm:text-3xl font-bold text-txt group-hover:text-primary transition-colors tracking-tight uppercase">
                              {blog.title}
                           </h3>
                           <p className="text-sm text-muted leading-relaxed max-w-2xl">
                              {blog.excerpt}
                           </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                           {blog.tags.map(tag => (
                              <span 
                                 key={tag} 
                                 className="text-[10px] font-bold txt-mono text-muted/70 uppercase tracking-wider px-2 py-1 border border-primary/20 rounded-sm bg-primary/5"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>

                     {/* CTA Column */}
                     <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-2 text-muted/60 text-xs txt-mono font-bold uppercase tracking-wider">
                           {blog.category === 'SYSTEMS_ARCHITECTURE' && '⚙️'}
                           {blog.category === 'DEVOPS_INFRASTRUCTURE' && '🔧'}
                           {blog.category === 'COMPUTER_VISION' && '👁️'}
                           {blog.category === 'GENERATIVE_AI' && '🤖'}
                           {blog.category === 'MACHINE_LEARNING' && '📊'}
                           {blog.category}
                        </div>
                        <a
                           href={`/blogs/${blog.slug}`}
                           className="px-4 py-3 border border-primary/40 bg-surface hover:border-primary/60 hover:bg-primary/5 text-txt hover:text-primary transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm txt-mono"
                        >
                           Read Full <ArrowRight className="w-3 h-3" />
                        </a>
                     </div>
                  </motion.a>
               ))}
            </div>

            {/* View All Link */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="pt-8 border-t border-primary/30 flex items-center justify-between"
            >
               <div className="space-y-2">
                  <div className="flex items-center gap-2 txt-mono text-xs text-muted uppercase font-bold tracking-widest">
                     <div className="w-8 h-[1px] bg-primary/30"></div>
                     Comprehensive Archive
                  </div>
               </div>
               <a
                  href="/blogs"
                  className="flex items-center gap-2 txt-mono text-xs font-bold text-txt hover:text-primary transition-colors uppercase tracking-widest border-b border-primary/30 hover:border-primary pb-1"
               >
                  View All Articles <ArrowRight className="w-4 h-4" />
               </a>
            </motion.div>
         </div>
      </section>
   )
}
