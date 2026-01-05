import { Skills } from '../components/Skills'
import { motion } from 'framer-motion'

export function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.div>
    </div>
  )
}
