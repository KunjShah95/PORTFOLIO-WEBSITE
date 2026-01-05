import { Hero } from '../components/Hero'
import { motion } from 'framer-motion'

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-24 sm:space-y-32 md:space-y-40"
    >
      <Hero />
      {/* You can add a preview of projects or other sections here if desired, 
          but the user asked for separate pages. */}
    </motion.div>
  )
}
