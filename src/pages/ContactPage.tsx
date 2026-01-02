import { Contact } from '../components/Contact'
import { motion } from 'framer-motion'

export function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </div>
  )
}
