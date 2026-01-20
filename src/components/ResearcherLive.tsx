import { motion } from 'framer-motion'
import { Github, Music, Activity, ExternalLink, Calendar, GitBranch, ChevronDown, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { IDENTITY } from '../data/portfolio'

const GITHUB_USERNAME = IDENTITY.github_username

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CONTRIBUTION_COLORS = [
  'bg-surfaceHighlight',
  'bg-primary/20',
  'bg-primary/40',
  'bg-primary/60',
  'bg-primary',
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

async function fetchContributionData(username: string, year: number): Promise<ContributionDay[]> {
  try {
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

  const years = Array.from({ length: 5 }, (_, i) => currentYear - i)

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

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30&type=all`
        )
        if (response.ok) {
          const data: GitHubRepo[] = await response.json()
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

  const getContributionGrid = () => {
    if (contributionData.length === 0) return []

    const weeks: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []

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
    <section id="live" className="section-padding relative overflow-hidden">
      <div className="container-aligned space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary txt-mono text-xs tracking-widest font-bold uppercase">
              <Activity className="w-4 h-4" />
              LIVE_DATA_SYNC
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-txt uppercase leading-none">
              System <span className="text-muted font-light">Vitality</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            {userStats && (
              <div className="flex items-center gap-6 text-xs font-bold txt-mono text-muted uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="text-txt">{userStats.public_repos}</span>
                  <span>repos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-txt">{userStats.followers}</span>
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
            className="lg:col-span-8 bg-surface border border-border p-8 rounded-lg space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-surfaceHighlight rounded-md">
                  <Github className="w-6 h-6 text-txt" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-txt">Contribution Graph</h3>
                  <div className="text-xs text-muted font-light">
                    {isLoading ? 'Syncing...' : `${totalContributions} contributions in ${selectedYear}`}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-surfaceHighlight hover:bg-surfaceHighlight/80 transition-all rounded-sm text-xs font-bold txt-mono text-txt border border-border/50"
                  >
                    <Calendar className="w-3 h-3 text-muted" />
                    <span>{selectedYear}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isYearDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-surface border border-border rounded-sm overflow-hidden z-20 min-w-[100px] shadow-xl">
                      {years.map(year => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year)
                            setIsYearDropdownOpen(false)
                          }}
                          className={`w-full px-4 py-2 text-left text-xs hover:bg-surfaceHighlight transition-colors txt-mono ${year === selectedYear ? 'text-primary' : 'text-txt'}`}
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
                  className="p-2 border border-border/50 hover:border-primary/40 hover:text-primary transition-all rounded-sm text-muted"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative overflow-x-auto custom-scrollbar pb-2">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-6 h-6 animate-spin text-muted" />
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-12 text-sm text-muted">
                  {error}
                </div>
              ) : (
                <div className="min-w-max">
                  <div className="flex mb-2 relative h-5">
                    {monthLabels.map((label, i) => (
                      <div
                        key={i}
                        style={{
                          position: 'absolute',
                          left: `${(label.weekIndex / weeks.length) * 100}%`,
                        }}
                        className="text-[10px] font-bold text-muted uppercase tracking-wider"
                      >
                        {label.month}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-[3px]">
                    <div className="flex flex-col gap-[3px] pr-2 text-[8px] font-mono text-muted/60 pt-[15px]">
                      <div className="h-[10px]"></div>
                      <div className="h-[10px] flex items-center">Mon</div>
                      <div className="h-[10px]"></div>
                      <div className="h-[10px] flex items-center">Wed</div>
                      <div className="h-[10px]"></div>
                      <div className="h-[10px] flex items-center">Fri</div>
                      <div className="h-[10px]"></div>
                    </div>
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`w-[10px] h-[10px] rounded-[1px] ${day.level === -1 ? 'bg-transparent' : CONTRIBUTION_COLORS[day.level] || CONTRIBUTION_COLORS[0]
                              }`}
                            title={day.date ? `${day.date}: ${day.count} contributions` : ''}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Top Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-surface border border-border p-8 rounded-lg space-y-6 flex flex-col"
          >
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-txt uppercase tracking-wide">Recent Activity</h3>
            </div>

            <div className="space-y-3 overflow-y-auto custom-scrollbar pr-2 flex-grow">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-border/50 hover:border-primary/40 bg-surfaceHighlight/20 hover:bg-surfaceHighlight/50 transition-all rounded-sm group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-txt group-hover:text-primary transition-colors truncate max-w-[180px]">{repo.name}</span>
                    <ExternalLink className="w-3 h-3 text-muted/50 group-hover:text-primary transition-colors" />
                  </div>
                  {repo.description && (
                    <p className="text-[10px] text-muted line-clamp-2 mb-3 leading-relaxed">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-3 text-[10px] text-muted/60 txt-mono">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                        {repo.language}
                      </div>
                    )}
                    <span>★ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spotify Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-surface border border-border p-6 rounded-lg flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="p-3 bg-green-500/10 rounded-full">
              <Music className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div className="text-[10px] txt-mono font-bold text-muted uppercase tracking-widest">Research Vibes</div>
              <h3 className="text-lg font-bold text-txt">Focus Playlist</h3>
            </div>
          </div>

          <div className="flex-grow w-full h-[80px] rounded-lg overflow-hidden border border-border/50">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Ueb9CjXvhS?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="opacity-80 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
