import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { ResearchLabs } from './components/ResearchLabs'
import { Experience } from './components/Experience'
import { Writing } from './components/Writing'
import { BlogsPage } from './pages/BlogsPage'

import { ResearcherLive } from './components/ResearcherLive'

function Home() {
  return (
    <div className="space-y-0">
       <Hero />
       <Experience />
       <Projects />
       <ResearcherLive />
       <Skills />
       <ResearchLabs />
       <Writing />
       <Education />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/labs" element={<ResearchLabs />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App;
