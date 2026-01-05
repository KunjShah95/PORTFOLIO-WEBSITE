import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Cpu, Activity, Search, BrainCircuit, Globe } from 'lucide-react'

// KNOWLEDGE_CORE: Encoded Dossier of Kunj Shah
const KUNJ_DOSSIER = {
  identity: {
    name: "Kunj Shah",
    persona: "3rd-year Technical Researcher & AI Engineer",
    institution: "Indus University",
    location: "Global / Distributed",
    contact: "kunjkshahdeveloper@gmail.com",
    focus: ["Autonomous Systems", "Neural Architectures", "MLOps", "Agentic Intelligence"]
  },
  experience: [
    {
      company: "PHAZE_AI",
      role: "AUTOMATION_INTERN",
      period: "DEC 2024 - PRESENT",
      focus: "Enterprise automation workflows, autonomous scripts, and multi-stage pipeline triggers."
    }
  ],
  education: [
    {
      school: "INDUS UNIVERSITY",
      degree: "B.TECH COMPUTER SCIENCE [3RD YEAR]",
      period: "2023 - 2027",
      specialization: "Artificial Intelligence and Neural Networks."
    },
    {
      school: "GRADUATE_STATUS (FOUNDATIONAL)",
      degree: "ADVANCED_PHYSICS_AND_LOGIC",
      period: "2021 - 2023",
      focus: "Multi-variable calculus, computational physics, ML logic foundation."
    }
  ],
  projects: [
    {
      slug: "SENTINEL_CLI",
      desc: "AI code guard with 13+ specialized security analyzers.",
      stack: "Node.js, AI_Analyzers"
    },
    {
      slug: "AETHER_AI",
      desc: "Multi-agent orchestration framework for autonomous tasks.",
      stack: "Python, LangChain"
    },
    {
      slug: "NEURAL_TOKENIZER",
      desc: "Custom BPE tokenizer for Sanskrit preservation and GPT fine-tuning.",
      stack: "PyTorch, NLP"
    },
    {
       slug: "RESUME_MASTER",
       desc: "Semantic resume-job matching using distributed LLM logic.",
       stack: "Python, LLM"
    }
  ],
  investigations: [
    {
      title: "SYNTHETIC_MEMORY",
      focus: "Recursive state persistence in non-deterministic agent clusters.",
      stack: "Redis, Vector Databases"
    },
    {
      title: "NEURAL_PROTOCOL",
      focus: "Handshake logic for multi-modal cross-agent task synchronization.",
      stack: "gRPC, Protobuf"
    }
  ],
  stack: {
    orchestration: ["LangChain", "CrewAI", "Recursive RAG", "Tool Use"],
    mlops: ["DVC Versioning", "MLFlow", "SageMaker", "Kubeflow"],
    deep_learning: ["PyTorch", "HuggingFace", "Model Quantization", "CUDA"],
    full_stack: ["FastAPI", "NextJS 15", "Vector DBs", "Redis Cache"]
  },
  learning: ["LLM_DISTILLATION", "MULTIMODAL_RAG", "QUANTUM_LOGIC", "MLOPS_GOVERNANCE", "GRAPH_NEURAL_NETS"]
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')
  const [isBooting, setIsBooting] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const bootSequence = [
    "INITIALIZING_KUNJ_NEURAL_PROXY_V2.9...",
    "FETCHING_FULL_DOSSIER_SYNC... [DONE]",
    "INDEXING_NEURAL_HISTORY... [DONE]",
    "INDEXING_ACADEMIC_FLOW... [DONE]",
    "INDEXING_DEPLOYMENT_REGISTRY... [DONE]",
    "ESTABLISHING_LIVELINK... [READY]",
    "PROXY_ONLINE. COMPLETE_KNOWLEDGE_SYNCED."
  ]

  const startBoot = async () => {
    setIsOpen(true)
    if (messages.length === 0) {
      setIsBooting(true)
      for (const line of bootSequence) {
        setMessages(prev => [...prev, { role: 'system', content: line }])
        await new Promise(r => setTimeout(r, 400))
      }
      setIsBooting(false)
      setMessages(prev => [...prev, { role: 'assistant', content: "Greeting. I am Kunj's Neural Proxy (v2.9). My internal Knowledge Core has been fully synchronized with his complete technical, academic, and research dossier. How can I assist with your high-level inquiry?" }])
    }
  }

  const fetchExternalIntel = async (query: string) => {
    try {
      const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`);
      const data = await response.json();
      return data.AbstractText || null;
    } catch (error) {
      return null;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isBooting || isThinking) return
    
    const userMessage = input.trim()
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    const query = userMessage.toLowerCase()
    setInput('')
    setIsThinking(true)

    let response = ''
    
    // Comprehensive Logic Handlers
    if (query.includes('who') || query.includes('kunj')) {
      response = `IDENT_SCAN: ${KUNJ_DOSSIER.identity.name} is a ${KUNJ_DOSSIER.identity.persona} at ${KUNJ_DOSSIER.identity.institution}. He specializes in ${KUNJ_DOSSIER.identity.focus.join(", ")}.`
    } 
    else if (query.includes('experience') || query.includes('work') || query.includes('job')) {
      const items = KUNJ_DOSSIER.experience.map(e => `[${e.company}: ${e.role} (${e.period}) - ${e.focus}]`).join('\n');
      response = `NEURAL_HISTORY_LOG:\n${items}`;
    }
    else if (query.includes('project') || query.includes('github') || query.includes('sentinel') || query.includes('aether')) {
      const items = KUNJ_DOSSIER.projects.map(p => `[${p.slug}: ${p.desc} // STACK: ${p.stack}]`).join('\n');
      response = `DEPLOYMENT_REGISTRY:\n${items}\nFULL_ARCHIVE: github.com/KunjShah95`;
    } 
    else if (query.includes('research') || query.includes('labs') || query.includes('investigation') || query.includes('memory') || query.includes('protocol')) {
      const items = KUNJ_DOSSIER.investigations.map(i => `[${i.title}: ${i.focus} // STACK: ${i.stack}]`).join('\n');
      response = `INVESTIGATION_ARCHIVE:\n${items}`;
    }
    else if (query.includes('skill') || query.includes('tech') || query.includes('stack') || query.includes('capable')) {
      if (query.includes('extreme') || query.includes('pressure') || query.includes('stress')) {
        response = 'PSYCH_EVAL: High stress-tolerance confirmed. Kunj operates best in high-entropy research environments. Surgical stability under high-load compute and timeline constraints.';
      } else {
        const s = KUNJ_DOSSIER.stack;
        response = `CAPABILITY_MATRIX:\nORCHESTRATION: ${s.orchestration.join(", ")}\nMLOPS: ${s.mlops.join(", ")}\nDL_CORE: ${s.deep_learning.join(", ")}\nSTACK: ${s.full_stack.join(", ")}`;
      }
    } 
    else if (query.includes('education') || query.includes('university') || query.includes('college') || query.includes('study')) {
      const items = KUNJ_DOSSIER.education.map(e => `[${e.school}: ${e.degree} (${e.period}) - Focus: ${e.specialization || e.focus}]`).join('\n');
      response = `ACADEMIC_FLOW_ Dossier:\n${items}`;
    } 
    else if (query.includes('contact') || query.includes('email') || query.includes('hire')) {
      response = `COMM_LINK: Initiating logic. Direct email: ${KUNJ_DOSSIER.identity.contact}. Location: ${KUNJ_DOSSIER.identity.location}. Priority for research and agentic systems.`;
    } 
    else {
      const externalInfo = await fetchExternalIntel(userMessage);
      if (externalInfo) {
        response = `LIVE_INTEL_FETCH: ${externalInfo}`;
      } else {
        response = 'NEURAL_PROCESSOR: Query falls outside direct indexed dossiers. Protocol suggest: "Display Experience Log", "Fetch Academic Flow", or "List Investigation Archive".';
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: response, isLive: response.startsWith('LIVE_INTEL') }])
      setIsThinking(false)
    }, 800)
  }

  return (
    <>
      <button 
        onClick={startBoot}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[110] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-txt text-bg hover:bg-primary transition-all duration-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center group overflow-hidden border-glow rounded-full min-h-[48px] min-w-[48px]"
      >
        <div className="absolute inset-0 border-2 border-primary/20 group-hover:scale-110 transition-transform rounded-full"></div>
        <Cpu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:rotate-180 transition-transform duration-1000" />
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 blur-2xl group-hover:top-0 group-hover:left-0 transition-all duration-700"></div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 right-0 sm:bottom-20 sm:right-4 md:bottom-28 md:right-8 z-[110] w-full sm:w-[90vw] md:w-[450px] lg:w-[500px] h-[100dvh] sm:h-[70vh] md:h-[600px] lg:h-[700px] max-h-[100dvh] sm:max-h-[calc(100vh-100px)] md:max-h-[calc(100vh-140px)] bg-bg border-t sm:border border-primary/20 shadow-[0_0_100px_rgba(16,185,129,0.1)] flex flex-col overflow-hidden sm:rounded-2xl md:rounded-[2rem]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b border-primary/10 bg-surface/40 backdrop-blur-xl">
               <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary animate-pulse" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black font-mono tracking-[0.2em] sm:tracking-[0.3em] text-txt uppercase truncate">NEURAL_PROXY // V.2.9</span>
                    <span className="text-[7px] sm:text-[8px] font-mono text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold">STATUS: FULL_SYNC</span>
                  </div>
               </div>
               <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary animate-pulse"></div>
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-muted hover:text-txt transition-all transform hover:rotate-90 p-1 min-h-[44px] min-w-[44px] flex items-center justify-center">
                     <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
               </div>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto font-mono text-[9px] sm:text-[10px] space-y-4 sm:space-y-6 md:space-y-8 custom-scrollbar bg-academic-dots bg-[length:20px_20px]">
               {messages.map((m, i) => (
                 <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-center gap-3 mb-2 opacity-30">
                      <div className="h-[1px] w-4 bg-primary"></div>
                      <span className="text-[9px] text-txt font-black uppercase tracking-[0.3em]">{m.role === 'system' ? 'PROTOCOL' : m.role}</span>
                    </div>
                    <div className={`max-w-[92%] p-6 border relative group/msg ${
                      m.role === 'system' ? 'bg-primary/5 text-primary border-primary/20 italic font-bold' :
                      m.role === 'user' ? 'bg-secondary/5 text-txt border-secondary/20 font-bold' :
                      m.role === 'assistant' ? 'bg-surface/80 text-txt border-border shadow-xl backdrop-blur-md' :
                      'bg-surface/60 text-muted border-border shadow-xl backdrop-blur-md'
                    }`}>
                       {m.isLive && (
                          <div className="flex items-center gap-2 text-[8px] text-primary mb-2 tracking-[0.2em] font-black">
                             <Globe className="w-3 h-3 animate-spin" /> LIVE_INTELLIGENCE_STREAM
                          </div>
                       )}
                       <div className="relative z-10 leading-relaxed tracking-tight uppercase whitespace-pre-wrap">
                         {m.content}
                       </div>
                       {m.role === 'assistant' && (
                         <div className="absolute top-2 right-2 opacity-5 pointer-events-none">
                            <Cpu className="w-12 h-12 text-primary" />
                         </div>
                       )}
                       
                       {/* Message Corner Brackets */}
                       <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-primary/40 group-hover/msg:border-primary transition-colors"></div>
                       <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-primary/40 group-hover/msg:border-primary transition-colors"></div>
                    </div>
                 </div>
               ))}
               {isThinking && (
                 <div className="flex items-center gap-4">
                   <div className="w-2 h-5 bg-primary animate-pulse"></div>
                   <span className="text-primary text-[10px] animate-pulse uppercase tracking-[0.4em] font-bold">Querying_Internal_Core...</span>
                 </div>
               )}
               {isBooting && (
                 <div className="flex items-center gap-4">
                   <div className="w-2 h-5 bg-primary animate-pulse"></div>
                   <span className="text-primary text-[10px] animate-pulse uppercase tracking-[0.4em] font-bold">Downloading_Neural_Vault...</span>
                 </div>
               )}
            </div>

            {/* Input Area */}
            <div className="p-4 sm:p-6 md:p-8 border-t border-primary/10 bg-bg safe-area-inset">
               <div className="relative flex items-center group">
                  <div className="absolute left-4 sm:left-5 md:left-6 text-primary group-focus-within:text-txt transition-colors">
                    <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <input 
                    type="text"
                    disabled={isBooting || isThinking}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={isBooting ? "SYNC..." : isThinking ? "INDEXING..." : "QUERY_VAULT..."}
                    className="w-full bg-surface/50 border border-primary/10 pl-10 sm:pl-12 md:pl-16 pr-14 sm:pr-16 md:pr-20 py-3.5 sm:py-4 md:py-5 text-[10px] sm:text-[11px] font-black font-mono text-txt placeholder:text-muted/20 focus:outline-none focus:border-primary/40 transition-all uppercase tracking-[0.15em] sm:tracking-[0.2em] disabled:opacity-50 border-glow italic rounded-full min-h-[48px]"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isBooting || isThinking}
                    className="absolute right-2 sm:right-4 md:right-6 text-muted hover:text-primary transition-all p-2 hover:bg-primary/5 disabled:opacity-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
