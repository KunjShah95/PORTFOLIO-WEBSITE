import { ResearchLabs } from '../components/ResearchLabs'
import { motion } from 'framer-motion'

export function LabsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ResearchLabs />
      </motion.div>
    </div>
  )
}
