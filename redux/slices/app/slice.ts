import { createSlice } from '@reduxjs/toolkit'
import type { ThemeMode } from 'theme/type'

type AppState = {
  loading: Boolean
  theme: ThemeMode | undefined
}

const initialState: AppState = {
  loading: false,
  theme: undefined,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setTheme: (state, action) => {
      const theme = action.payload
      state.theme = theme
    },
  },
})

export default appSlice
