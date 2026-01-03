import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-border bg-surface hover:bg-surfaceHighlight transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4">
        <Sun className="absolute w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-txt" />
        <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-txt" />
      </div>
    </button>
  )
}
