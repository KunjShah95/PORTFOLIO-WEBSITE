import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Hash, ArrowUpRight, BookOpen } from 'lucide-react'
import { SEO } from '../components/SEO'
import { BLOGS, LOGS } from '../data/portfolio'

export function BlogsPage() {
  const [activeTab, setActiveTab] = useState<'BLOGS' | 'LOGS'>('BLOGS')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get all unique categories
  const categories = Array.from(new Set(BLOGS.map(b => b.category)))

  // Filter blogs by category
  const filteredBlogs = selectedCategory 
    ? BLOGS.filter(blog => blog.category === selectedCategory)
    : BLOGS

  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg">
      <SEO
        title="Technical Articles & Research Logs"
        description="Read Kunj Shah's in-depth technical articles on AI systems, MLOps, computer vision, and autonomous agents."
        url="https://kunjshah.dev/blogs"
      />

      <div className="container-aligned space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/30 pb-8 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <BookOpen className="w-4 h-4" />
              Intelligence Archive
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-txt uppercase leading-none">
              Research <span className="text-muted/50 font-light">Vault</span>
            </h1>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 p-1 bg-surface border border-primary/30 rounded-sm">
            <button
              onClick={() => setActiveTab('BLOGS')}
              className={`px-6 py-2.5 text-xs font-bold txt-mono tracking-widest uppercase transition-all rounded-sm ${
                activeTab === 'BLOGS'
                  ? 'bg-primary text-bg'
                  : 'text-muted hover:text-txt'
              }`}
            >
              ARTICLES
            </button>
            <button
              onClick={() => setActiveTab('LOGS')}
              className={`px-6 py-2.5 text-xs font-bold txt-mono tracking-widest uppercase transition-all rounded-sm ${
                activeTab === 'LOGS'
                  ? 'bg-primary text-bg'
                  : 'text-muted hover:text-txt'
              }`}
            >
              LOGS
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === 'BLOGS' ? (
              <motion.div
                key="blogs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 text-xs font-bold txt-mono tracking-widest uppercase rounded-sm transition-all border ${
                      selectedCategory === null
                        ? 'bg-primary text-bg border-primary'
                        : 'bg-surface border-primary/30 text-muted hover:text-txt'
                    }`}
                  >
                    ALL
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-xs font-bold txt-mono tracking-widest uppercase rounded-sm transition-all border ${
                        selectedCategory === cat
                          ? 'bg-primary text-bg border-primary'
                          : 'bg-surface border-primary/30 text-muted hover:text-txt'
                      }`}
                    >
                      {cat.replace(/_/g, ' ')}
                    </button>
                  ))}
                </div>

                {/* Blog Grid */}
                <div className="space-y-6 pt-8">
                  {filteredBlogs.map((blog, i) => (
                    <motion.a
                      key={blog.id}
                      href={`/blogs/${blog.slug}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
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
                            {blog.readTime} MIN
                          </span>
                        </div>
                        <span className="text-[9px] font-bold txt-mono text-muted/50 uppercase tracking-widest">
                          {blog.featured && '★ FEATURED'}
                        </span>
                      </div>

                      {/* Content Column */}
                      <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                        <div className="space-y-4">
                          <h3 className="text-2xl sm:text-3xl font-bold text-txt group-hover:text-primary transition-colors tracking-tight uppercase">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-muted leading-relaxed">
                            {blog.excerpt}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {blog.tags.slice(0, 3).map(tag => (
                            <span 
                              key={tag} 
                              className="text-[10px] font-bold txt-mono text-muted/70 uppercase tracking-wider px-2 py-1 border border-primary/20 rounded-sm bg-primary/5"
                            >
                              {tag}
                            </span>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="text-[9px] font-bold txt-mono text-muted/60 uppercase">
                              +{blog.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Column */}
                      <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-primary/20 bg-primary/5 p-6 sm:p-8 flex items-center justify-center">
                        <a
                          href={`/blogs/${blog.slug}`}
                          className="px-4 py-3 border border-primary/40 bg-surface hover:border-primary/60 hover:bg-primary/5 text-txt hover:text-primary transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm txt-mono w-full"
                        >
                          Read <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {filteredBlogs.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-muted txt-mono text-sm uppercase tracking-widest">
                      No articles in this category yet.
                    </p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="logs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {LOGS.map((log) => (
                  <div
                    key={log.id}
                    className="group p-8 border border-primary/20 bg-surface border-l-4 border-l-primary hover:border-l-primary hover:border-primary transition-all rounded-r-sm"
                  >
                    <div className="grid lg:grid-cols-12 gap-6 items-start">
                      {/* Hash & Date Column */}
                      <div className="lg:col-span-2 space-y-2">
                        <div className="flex items-center gap-2 text-primary font-bold txt-mono text-xs uppercase tracking-wider">
                          <Hash className="w-3 h-3" /> {log.hash}
                        </div>
                        <div className="text-[10px] text-muted font-mono uppercase opacity-60">
                          {log.date}
                        </div>
                      </div>

                      {/* Module Column */}
                      <div className="lg:col-span-2 pl-6 border-l border-primary/30">
                        <div className="text-[10px] font-bold txt-mono text-muted uppercase tracking-widest mb-2">
                          MODULE
                        </div>
                        <div className="text-sm font-bold txt-mono text-txt uppercase">
                          {log.module}
                        </div>
                      </div>

                      {/* Action Column */}
                      <div className="lg:col-span-3">
                        <div className="text-[10px] font-bold txt-mono text-muted uppercase tracking-widest mb-2">
                          ACTION
                        </div>
                        <h3 className="text-lg font-bold text-txt uppercase tracking-wide group-hover:text-primary transition-colors">
                          {log.action}
                        </h3>
                      </div>

                      {/* Details Column */}
                      <div className="lg:col-span-5">
                        <div className="text-[10px] font-bold txt-mono text-muted uppercase tracking-widest mb-2">
                          DETAILS
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {log.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
