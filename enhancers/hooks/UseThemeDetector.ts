import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { setTheme } from 'redux/slices/appSlice'

const useThemeDetector = () => {
  const theme = useAppSelector((state) => state.app.theme)
  const getPreferredTheme = () =>
    typeof window !== 'undefined'
      ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      : false

  const dispatch = useAppDispatch()
  const [isDark] = useState(getPreferredTheme())

  console.log('useThemeDetector', theme)

  useEffect(() => {
    if (!theme) {
      const preferredTheme = isDark ? 'dark' : 'light'
      dispatch(setTheme(preferredTheme))
    }
  }, [dispatch, isDark, theme])
}

export default useThemeDetector
