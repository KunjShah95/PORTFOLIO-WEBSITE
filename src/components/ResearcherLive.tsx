import { motion } from 'framer-motion'
import { Github, Music, Activity, ExternalLink, Globe, Calendar, GitBranch, ChevronDown, Star, GitFork, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'

// GitHub username
const GITHUB_USERNAME = 'KunjShah95'

// Month names for display
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Blue themed colors matching website
const BLUE_CONTRIBUTION_COLORS = [
  'bg-secondary/10',    // Level 0 - Empty
  'bg-secondary/30',    // Level 1 - Low
  'bg-secondary/50',    // Level 2 - Medium-Low
  'bg-secondary/70',    // Level 3 - Medium
  'bg-secondary',       // Level 4 - High
]

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  pushed_at: string
}

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

interface ContributionDay {
  date: string
  count: number
  level: number
}

// Get language color
function getLanguageColor(language?: string | null): string {
  const colors: Record<string, string> = {
    'Python': 'bg-[#3572A5]',
    'TypeScript': 'bg-[#3178C6]',
    'JavaScript': 'bg-[#F7DF1E]',
    'Go': 'bg-[#00ADD8]',
    'Rust': 'bg-[#DEA584]',
    'Java': 'bg-[#B07219]',
    'C++': 'bg-[#F34B7D]',
    'C': 'bg-[#555555]',
    'C#': 'bg-[#178600]',
    'HTML': 'bg-[#E34C26]',
    'CSS': 'bg-[#563D7C]',
    'Shell': 'bg-[#89E051]',
    'Ruby': 'bg-[#701516]',
    'PHP': 'bg-[#4F5D95]',
    'Jupyter Notebook': 'bg-[#DA5B0B]',
  }
  return colors[language || ''] || 'bg-gray-500'
}

// Parse contribution data from GitHub contribution chart SVG
async function fetchContributionData(username: string, year: number): Promise<ContributionDay[]> {
  try {
    // Use GitHub's contribution calendar endpoint
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`)
    if (!response.ok) {
      throw new Error('Failed to fetch contributions')
    }
    const data = await response.json()
    
    return data.contributions.map((day: { date: string; count: number; level: number }) => ({
      date: day.date,
      count: day.count,
      level: day.level
    }))
  } catch (error) {
    console.error('Error fetching contribution data:', error)
    return []
  }
}

export function ResearcherLive() {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)
  const [contributionData, setContributionData] = useState<ContributionDay[]>([])
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [userStats, setUserStats] = useState<GitHubUser | null>(null)
  const [totalContributions, setTotalContributions] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Available years for selection (last 5 years)
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i)

  // Fetch GitHub user data
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (response.ok) {
          const data = await response.json()
          setUserStats(data)
        }
      } catch (err) {
        console.error('Error fetching user data:', err)
      }
    }
    fetchUserData()
  }, [])

  // Fetch repositories
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30&type=all`
        )
        if (response.ok) {
          const data: GitHubRepo[] = await response.json()
          // Sort by most recently pushed
          const sortedRepos = data.sort((a, b) => 
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          setRepos(sortedRepos.slice(0, 8))
        }
      } catch (err) {
        console.error('Error fetching repos:', err)
      }
    }
    fetchRepos()
  }, [])

  // Fetch contribution data for selected year
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      setError(null)
      
      try {
        const data = await fetchContributionData(GITHUB_USERNAME, selectedYear)
        setContributionData(data)
        setTotalContributions(data.reduce((sum, day) => sum + day.count, 0))
      } catch (err) {
        setError('Failed to load contribution data')
        console.error('Error:', err)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchData()
  }, [selectedYear])

  // Group contributions by week for grid display
  const getContributionGrid = () => {
    if (contributionData.length === 0) return []
    
    const weeks: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []
    
    // Pad the first week
    const firstDay = contributionData[0]
    if (firstDay) {
      const dayOfWeek = new Date(firstDay.date).getDay()
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push({ date: '', count: 0, level: -1 })
      }
    }
    
    contributionData.forEach(day => {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        weeks.push(currentWeek)
        currentWeek = []
      }
    })
    
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: '', count: 0, level: -1 })
      }
      weeks.push(currentWeek)
    }
    
    return weeks
  }

  // Get month labels with positions
  const getMonthLabels = () => {
    const labels: { month: string; weekIndex: number }[] = []
    const weeks = getContributionGrid()
    
    weeks.forEach((week, index) => {
      const firstValidDay = week.find(d => d.date)
      if (firstValidDay) {
        const date = new Date(firstValidDay.date)
        if (date.getDate() <= 7) {
          labels.push({
            month: MONTHS[date.getMonth()],
            weekIndex: index
          })
        }
      }
    })
    
    return labels
  }

  const weeks = getContributionGrid()
  const monthLabels = getMonthLabels()

  return (
    <section id="live" className="py-32">
      <div className="container-aligned space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.6em] font-black uppercase">
              <Activity className="w-4 h-4" />
              LIVE_DATA_SYNC
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">SYSTEM <span className="text-secondary opacity-60 not-italic">VITALITY</span></h2>
          </div>
          <div className="flex items-center gap-4">
            {userStats && (
              <div className="flex items-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">{userStats.public_repos}</span>
                  <span>repos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">{userStats.followers}</span>
                  <span>followers</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* GitHub Contributions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group bg-surface/20 border border-white/5 p-8 lg:p-10 border-glow space-y-8 relative overflow-hidden rounded-2xl"
          >
            {/* Header with Year Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 flex items-center justify-center rounded-xl">
                  <Github className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-[0.4em] font-black">CONTRIBUTION GRAPH</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">GitHub Activity</h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Year Selector */}
                <div className="relative">
                  <button
                    onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-surface/50 border border-white/10 hover:border-secondary/40 transition-all rounded-full text-sm font-medium"
                  >
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>{selectedYear}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isYearDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-surface border border-white/10 rounded-xl overflow-hidden z-20 min-w-[120px] shadow-xl">
                      {years.map(year => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year)
                            setIsYearDropdownOpen(false)
                          }}
                          className={`w-full px-4 py-3 text-left text-sm hover:bg-secondary/10 transition-colors ${
                            year === selectedYear ? 'bg-secondary/20 text-secondary' : 'text-white'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-white/10 hover:border-secondary/40 transition-all rounded-full group/link"
                >
                  <ExternalLink className="w-4 h-4 text-muted group-hover/link:text-secondary transition-colors" />
                </a>
              </div>
            </div>

            {/* Total Contributions Badge */}
            <div className="flex items-center gap-4 py-4 px-5 bg-secondary/5 border border-secondary/10 rounded-xl">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    totalContributions.toLocaleString()
                  )}
                </div>
                <div className="text-xs text-muted font-mono">contributions in {selectedYear}</div>
              </div>
            </div>

            {/* Contribution Grid */}
            <div className="relative">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-secondary" />
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-20 text-muted">
                  {error}
                </div>
              ) : (
                <>
                  {/* Month Labels */}
                  <div className="flex mb-2 relative h-5">
                    {monthLabels.map((label, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          position: 'absolute',
                          left: `${(label.weekIndex / weeks.length) * 100}%`,
                        }}
                        className="text-xs font-medium text-muted/80"
                      >
                        {label.month}
                      </div>
                    ))}
                  </div>

                  {/* Grid */}
                  <div className="overflow-x-auto custom-scrollbar pb-4">
                    <div className="flex gap-[3px] min-w-max">
                      {/* Day labels */}
                      <div className="flex flex-col gap-[3px] pr-2 text-[9px] font-mono text-muted/60">
                        <div className="h-[12px]"></div>
                        <div className="h-[12px] flex items-center">Mon</div>
                        <div className="h-[12px]"></div>
                        <div className="h-[12px] flex items-center">Wed</div>
                        <div className="h-[12px]"></div>
                        <div className="h-[12px] flex items-center">Fri</div>
                        <div className="h-[12px]"></div>
                      </div>

                      {/* Weeks */}
                      {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                          {week.map((day, dayIndex) => (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`w-[12px] h-[12px] rounded-[2px] transition-all hover:ring-2 hover:ring-secondary/50 cursor-pointer ${
                                day.level === -1 
                                  ? 'bg-transparent' 
                                  : BLUE_CONTRIBUTION_COLORS[day.level] || BLUE_CONTRIBUTION_COLORS[0]
                              }`}
                              title={day.date ? `${day.date}: ${day.count} contributions` : ''}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted">
                    <span>Less</span>
                    {BLUE_CONTRIBUTION_COLORS.map((color, i) => (
                      <div key={i} className={`w-[12px] h-[12px] rounded-[2px] ${color}`} />
                    ))}
                    <span>More</span>
                  </div>
                </>
              )}
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/5 blur-[100px] pointer-events-none"></div>
          </motion.div>

          {/* Top Repositories - Real Data */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 group bg-surface/20 border border-white/5 p-8 border-glow space-y-6 relative overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-lg">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-muted uppercase tracking-[0.3em] font-bold">TOP REPOS</span>
                <h3 className="text-lg font-bold text-white tracking-tight">Recent Activity</h3>
              </div>
            </div>

            <div className="space-y-3 max-h-[420px] overflow-y-auto custom-scrollbar pr-2">
              {repos.length === 0 ? (
                <div className="flex items-center justify-center py-10">
                  <Loader2 className="w-6 h-6 animate-spin text-muted" />
                </div>
              ) : (
                repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="block p-4 bg-surface/30 border border-white/5 hover:border-primary/30 transition-all rounded-xl group/repo"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white group-hover/repo:text-primary transition-colors truncate text-sm">
                          {repo.name}
                        </div>
                        {repo.description && (
                          <p className="text-[10px] text-muted/60 mt-1 line-clamp-2">
                            {repo.description}
                          </p>
                        )}
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          {repo.language && (
                            <div className="flex items-center gap-1.5">
                              <div className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                              <span className="text-[10px] text-muted">{repo.language}</span>
                            </div>
                          )}
                          {repo.stargazers_count > 0 && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500" />
                              <span className="text-[10px] text-muted">{repo.stargazers_count}</span>
                            </div>
                          )}
                          {repo.forks_count > 0 && (
                            <div className="flex items-center gap-1">
                              <GitFork className="w-3 h-3 text-muted" />
                              <span className="text-[10px] text-muted">{repo.forks_count}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted/40 group-hover/repo:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </motion.a>
                ))
              )}
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center text-sm text-muted hover:text-primary border border-white/5 hover:border-primary/20 rounded-xl transition-all"
            >
              View all repositories →
            </a>

            {/* Background Accent */}
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-primary/5 blur-[80px] pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Spotify Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group bg-surface/20 border border-white/5 p-8 border-glow relative overflow-hidden rounded-2xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1DB954]/10 border border-[#1DB954]/20 flex items-center justify-center rounded-xl">
                <Music className="w-6 h-6 text-[#1DB954]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-muted uppercase tracking-[0.4em] font-black">RESEARCH_VIBES</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Focus Playlist</h3>
              </div>
            </div>

            <div className="lg:col-span-8 h-[152px] bg-black/40 border border-white/5 relative group/spotify rounded-xl overflow-hidden">
              <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Ueb9CjXvhS?utm_source=generator&theme=0" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="opacity-60 group-hover/spotify:opacity-100 transition-opacity duration-700"
              ></iframe>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <Globe className="w-3.5 h-3.5 text-[#1DB954] animate-pulse" />
            <span className="text-[9px] font-mono text-muted uppercase tracking-[0.3em]">STREAMING_FROM_CORE_NETWORK</span>
          </div>

          {/* Background Accent */}
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#1DB954]/5 blur-[80px] pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  )
}
