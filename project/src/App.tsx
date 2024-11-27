import React, { Suspense } from 'react';
import { Hero } from './components/Hero';
import { ThemeToggle } from './components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const About = React.lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Projects = React.lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Toaster position="top-right" />
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          
          <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          }>
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;