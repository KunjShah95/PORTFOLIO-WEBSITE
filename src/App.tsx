import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/ThemeProvider'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { ResearchLabs } from './components/ResearchLabs'
import { Experience } from './components/Experience'
import { Writing } from './components/Writing'
import { AIVideoCreation } from './components/AIVideoCreation'
import { BlogsPage } from './pages/BlogsPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'
import { LabsPage } from './pages/LabsPage'
import { EducationPage } from './pages/EducationPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { AIVideoPage } from './pages/AIVideoPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

import { ResearcherLive } from './components/ResearcherLive'
import { Contact } from './components/Contact'
import { SEO } from './components/SEO'

function Home() {
  return (
    <div className="space-y-0">
       <SEO title="Kunj Shah | AI Engineer & Agent Builder" />
       <Hero />
       <Experience />
       <AIVideoCreation />
       <Projects />
       <ResearcherLive />
       <Skills />
       <ResearchLabs />
       <Writing />
       <Education />
       <Contact />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-videos" element={<AIVideoPage />} />
          </Routes>
          </Layout>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App;
