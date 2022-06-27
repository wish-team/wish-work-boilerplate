import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/store'
import appSlice from 'redux/slices/app/slice'

const useThemeDetector = () => {
  const theme = useSelector((state) => state.app.theme)
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
      dispatch(appSlice.actions.setTheme(preferredTheme))
    }
  }, [dispatch, isDark, theme])
}

export default useThemeDetector
