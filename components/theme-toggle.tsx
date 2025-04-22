"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { FiSun, FiMoon } from "react-icons/fi"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering after component is mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Return a placeholder with the same dimensions to avoid layout shift
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-9 h-9 border-gray-200 dark:border-gray-600">
        <span className="sr-only">Toggle theme</span>
        <div className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-9 h-9 border-gray-200 dark:border-gray-600"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="sr-only">Toggle theme</span>
      <FiSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FiMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
