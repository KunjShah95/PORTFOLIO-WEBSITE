import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Globe, Sparkles } from 'lucide-react'
import { IDENTITY, PROJECTS, EXPERIENCE, EDUCATION, SKILL_GROUPS } from '../data/portfolio'

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string, isLive?: boolean }[]>([])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  const openAssistant = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: "Hello! I'm Kunj's AI Assistant. I can tell you about his projects, experience, tech stack, or answer general questions using real-time search. How can I help?"
        }
      ])
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
    if (!input.trim() || isThinking) return

    const userMessage = input.trim()
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    const query = userMessage.toLowerCase()
    setInput('')
    setIsThinking(true)

    let response = ''

    // Simple Keyword Matching Logic
    if (query.includes('who') || query.includes('kunj') || query.includes('name')) {
      response = `${IDENTITY.name} is a ${IDENTITY.persona} based in ${IDENTITY.location}. He specializes in ${IDENTITY.focus.join(", ")}.`;
    }
    else if (query.includes('experience') || query.includes('work') || query.includes('job') || query.includes('intern')) {
      const exp = EXPERIENCE[0];
      response = `Kunj is currently an ${exp.role} at ${exp.company} (${exp.period}).\n${exp.description}`;
    }
    else if (query.includes('project') || query.includes('build') || query.includes('portfolio')) {
      const items = PROJECTS.map(p => `• ${p.title}: ${p.desc} [${p.tech.join(', ')}]`).join('\n\n');
      response = `Here are some key projects:\n\n${items}\n\nYou can view more details on the Projects page.`;
    }
    else if (query.includes('skill') || query.includes('tech') || query.includes('stack')) {
      const skills = SKILL_GROUPS.map(g => `• ${g.category.replace(/_/g, ' ')}: ${g.skills.join(', ')}`).join('\n');
      response = `Technical Capabilities:\n\n${skills}`;
    }
    else if (query.includes('education') || query.includes('degree') || query.includes('college')) {
      const edu = EDUCATION[0];
      response = `Kunj is pursuing a ${edu.degree} at ${edu.school} (${edu.period}), specializing in ${edu.specialization}`;
    }
    else if (query.includes('contact') || query.includes('email') || query.includes('hire')) {
      response = `You can reach Kunj directly at ${IDENTITY.contact}. He is open to discussing high-stakes AI engineering projects.`;
    }
    else {
      // Fallback to External Search
      const externalInfo = await fetchExternalIntel(userMessage);
      if (externalInfo) {
        response = `${externalInfo}\n\n(Source: Web Search)`;
      } else {
        response = "I couldn't find specific information on that in my knowledge base or via quick search. Would you like to know about Kunj's projects or skills instead?";
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: response, isLive: response.includes('Source: Web Search') }])
      setIsThinking(false)
    }, 600) // Short, natural delay
  }

  return (
    <>
      <button
        onClick={openAssistant}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[110] w-12 h-12 sm:w-14 sm:h-14 bg-txt text-bg hover:bg-primary transition-all duration-300 shadow-2xl flex items-center justify-center group rounded-full border border-primary/20"
      >
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform text-primary" />
        <span className="sr-only">AI Assistant</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-24 sm:right-8 z-[110] w-[calc(100vw-32px)] sm:w-[400px] h-[500px] sm:h-[600px] max-h-[80vh] bg-bg/95 backdrop-blur-xl border border-border shadow-2xl flex flex-col overflow-hidden rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-bold tracking-wider uppercase text-txt">Kunj's Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-surface rounded-full transition-colors">
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-3 sm:p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed ${m.role === 'user'
                    ? 'bg-txt text-bg rounded-br-none'
                    : 'bg-surface border border-border text-txt rounded-bl-none'
                    }`}>
                    {m.isLive && (
                      <div className="flex items-center gap-1.5 text-[10px] text-primary mb-2 font-bold uppercase tracking-wider">
                        <Globe className="w-3 h-3" /> Web Search Result
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{m.content}</div>
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex items-start">
                  <div className="bg-surface border border-border text-txt rounded-2xl rounded-bl-none p-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-muted/50 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-muted/50 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-muted/50 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-surface/50 border-t border-border">
              <div className="relative flex items-center">
                <input
                  type="text"
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about projects, skills, or search web..."
                  className="w-full bg-bg border border-border rounded-full pl-4 pr-12 py-3 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors text-txt placeholder:text-muted"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isThinking}
                  className="absolute right-1.5 p-2 bg-txt text-bg rounded-full hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
