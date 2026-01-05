import { Projects } from '../components/Projects'
import { SEO } from '../components/SEO'
import { motion } from 'framer-motion'

export function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SEO 
        title="Projects"
        description="Explore Kunj Shah's portfolio of AI/ML projects, autonomous agent systems, and full-stack applications. View deployments and source code."
        url="https://kunjshah.dev/projects"
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.div>
    </div>
  )
}
