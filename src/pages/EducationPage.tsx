import { Education } from '../components/Education'
import { motion } from 'framer-motion'

export function EducationPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Education />
      </motion.div>
    </div>
  )
}
