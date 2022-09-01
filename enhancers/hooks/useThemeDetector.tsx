import { useEffect, useState } from 'react'
import { useStore } from 'store/store'

const useThemeDetector = () => {
  const theme = useStore((state) => state.theme)
  const getPreferredTheme = () =>
    typeof window !== 'undefined'
      ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      : false

  const setTheme = useStore((state) => state.setTheme)
  const [isDark] = useState(getPreferredTheme())

  console.log('useThemeDetector', theme)

  useEffect(() => {
    if (!theme) {
      const preferredTheme = isDark ? 'dark' : 'light'
      setTheme(preferredTheme)
    }
  }, [isDark, setTheme, theme])

  return theme
}

export default useThemeDetector
