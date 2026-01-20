import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, Layout, Microscope, Activity, Code2, ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'

const projectData: Record<string, any> = {
  'cinepulse': {
    title: 'CinePulse',
    category: 'NLP & RECOMMENDATION SYSTEMS',
    problem: 'Standard movie recommenders rely heavily on collaborative filtering, often failing during the cold-start phase and ignoring the granular emotional state of the user. CinePulse addresses the disconnect between a user\'s current mood and their cinematic preferences.',
    architecture: 'Dual-stream encoder system utilizing BERT for textual emotion extraction and a CLIP-inspired visual encoder for movie aesthetics. Results are indexed in Vald, a high-performance vector search engine, for low-latency retrieval.',
    ml_techniques: [
      'Sentiment & Emotion Classification (BERT/RoBERTa)',
      'Vector Embeddings & Semantic Search',
      'Similarity Matching using Cosine Distance',
      'Cold-start resolving via content-based filtering'
    ],
    decisions: 'Chose Vald as the primary vector database to handle high-concurrency requests with sub-millisecond response times. Opted for content-based embeddings over collaborative filtering to ensure high-quality recommendations for new movies and users.',
    outcomes: [
      '92% Accuracy in emotion detection from user prompts.',
      'Reduced recommendation latency to <50ms.',
      'Successfully handled 10k+ concurrent requests in stress testing.'
    ],
    tech: ['Python', 'PyTorch', 'Transformers', 'Vald', 'FastAPI'],
    github: 'https://github.com/KunjShah95/CinePulse'
  },
  'gap-miner': {
    title: 'GAP Miner',
    category: 'SEMANTIC INTELLIGENCE',
    problem: 'The rapid evolution of tech stacks makes it difficult for students and professionals to identify specific skill gaps between their current resumes and target Job Descriptions (JD). GAP Miner automates this career-critical analysis.',
    architecture: 'A multi-agent agentic workflow. The first agent parses the JD and Resume; the second performs semantic skill extraction; the third computes the delta using embedding-based distance; and the final agent generates a tailored learning roadmap.',
    ml_techniques: [
      'Semantic Text Extraction & Parsing',
      'Llama-3 for Natural Language Inference',
      'LangChain for Agent Orchestration',
      'Embedding-based Gap Analysis'
    ],
    decisions: 'Implemented Llama-3 locally using Ollama to ensure data privacy for user resumes. Used LangChain to manage the multi-step reasoning required for generating complex roadmaps.',
    outcomes: [
      'Reduced manual skill gap analysis time by 85%.',
      'Achieved 95% precision in extracting technical stacks from messy resume formats.',
      'Generated over 500+ personalized roadmaps during beta phase.'
    ],
    tech: ['Llama-3', 'LangChain', 'FastAPI', 'React', 'Ollama'],
    github: 'https://github.com/KunjShah95/GAP-Miner'
  },
  'railway-inspection': {
    title: 'Railway Inspection',
    category: 'COMPUTER VISION',
    problem: 'Manual inspection of railway wagon undercarriages is hazardous and inefficient. Real-time constraints and varying lighting conditions make automated computer vision solutions extremely challenging in field environments.',
    architecture: 'A high-speed vision pipeline consisting of multi-camera synchronized ingestion, real-time motion deblurring, and a YOLOv8-based defect detection engine running on NVIDIA Jetson edge devices.',
    ml_techniques: [
      'YOLOv8 Object Detection & Segmentation',
      'Custom Motion Deblurring Filters',
      'Low-light Image Enhancement (CLAHE + Deep Learning)',
      'Real-time Stream Ingestion/Processing'
    ],
    decisions: 'Implemented the core pipeline in C++ with Triton Kernels to meet the 30ms latency requirement for wagons moving at speed. Used a vLLM optimized YOLOv8 model for maximum throughput.',
    outcomes: [
      '99.5% Defect detection rate in varying weather conditions.',
      'Latency maintained below 25ms per frame.',
      'Reduced manual inspection time by 12x per train.'
    ],
    tech: ['C++', 'OpenCV', 'YOLOv8', 'vLLM', 'Triton'],
    github: 'https://github.com/KunjShah95/Railway-Inspection'
  },
  'upi-fraud-guard': {
    title: 'UPI Fraud Guard',
    category: 'PREDICTIVE ANALYTICS',
    problem: 'UPI transactions generate massive volumes of data where fraudulent events are rare (needle in a haystack). Detecting these anomalies in real-time without blocking legitimate users is a critical challenge for fintech stability.',
    architecture: 'A hybrid anomaly detection system combining classic machine learning for known patterns and unsupervised learning for novel fraud vectors. Built with a focus on high-recall feature engineering.',
    ml_techniques: [
      'SMOTE for Class Imbalance Handling',
      'Isolation Forests for Anomaly Detection',
      'XGBoost Gradient Boosting',
      'Feature Engineering (Time-decaying transaction velocity)'
    ],
    decisions: 'Prioritized Precision and Recall over simple Accuracy to minimize "false alarms" that frustrate users. Utilized a sliding window approach for transaction velocity features.',
    outcomes: [
      'Detected 94% of fraud attempts in historical test sets.',
      'False Positive Rate kept below 0.1%.',
      'System processes transactions in under 10ms for real-time blocking.'
    ],
    tech: ['Scikit-learn', 'XGBoost', 'Pandas', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/KunjShah95/UPI-Fraud-Detection'
  }
}

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projectData[slug || '']

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-black">Project Not Found</h1>
        <Link to="/projects" className="text-primary hover:underline uppercase font-mono tracking-widest text-sm">Back to Registry</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title={`${project.title} | Case Study`}
        description={project.desc}
      />

      <div className="container-aligned">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/projects" className="group inline-flex items-center gap-2 text-muted hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest font-bold">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Registry
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start border-b border-border/50 pb-16">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold txt-mono text-primary uppercase tracking-widest">{project.category}</div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-txt tracking-tight uppercase leading-none">
                {project.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-muted font-light leading-relaxed max-w-3xl">
              {project.problem}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 border border-border bg-surface rounded-lg space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-bold txt-mono text-muted uppercase tracking-widest">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-2 py-1 bg-surfaceHighlight rounded-sm text-[10px] font-bold txt-mono text-muted uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-border/50">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-txt text-bg rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors shadow-lg hover:shadow-primary/20">
                  <Github className="w-4 h-4" /> View Source
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 py-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-primary">
              <Layout className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-txt uppercase tracking-tight">System Architecture</h2>
            </div>
            <div className="text-muted font-light leading-relaxed border-l-2 border-primary/20 pl-6">
              {project.architecture}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-primary">
              <Microscope className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-txt uppercase tracking-tight">AI Techniques</h2>
            </div>
            <ul className="space-y-3">
              {project.ml_techniques.map((tech: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted font-light">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-primary">
              <Code2 className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-txt uppercase tracking-tight">Engineering Decisions</h2>
            </div>
            <div className="text-muted font-light leading-relaxed border-l-2 border-primary/20 pl-6">
              {project.decisions}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-primary">
              <Activity className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-txt uppercase tracking-tight">Outcomes & Metrics</h2>
            </div>
            <ul className="space-y-4">
              {project.outcomes.map((metric: string, i: number) => (
                <li key={i} className="flex items-start gap-4 p-4 border border-border/50 bg-surface/30 rounded-sm">
                  <div className="text-primary font-bold txt-mono text-xl">0{i + 1}</div>
                  <div className="text-sm text-muted font-light leading-relaxed">{metric}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>


        <div className="mt-20 pt-20 border-t border-border/50 flex flex-col items-center space-y-4">
          <h3 className="text-xs font-bold txt-mono text-muted uppercase tracking-widest">Next Case Study</h3>
          <Link
            to={slug === 'cinepulse' ? '/projects/gap-miner' : '/projects/cinepulse'}
            className="group flex items-center gap-4 text-3xl sm:text-5xl font-black text-txt uppercase tracking-tight hover:text-primary transition-colors"
          >
            {slug === 'cinepulse' ? 'GAP Miner' : 'CinePulse'}
            <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}
