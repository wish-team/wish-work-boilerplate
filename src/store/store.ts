import Cookies from 'js-cookie'
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'
import type { ThemeMode } from '@/theme/type'
import type { StoreApi } from 'zustand'
import create from 'zustand'
import createContext from 'zustand/context'
import type { StateStorage } from 'zustand/middleware'
import { persist } from 'zustand/middleware'

export const storageName = 'wishwork-boilerplate'

export const initialState: PersistedState = {
  loading: false,
  theme: undefined,
  token: undefined,
}
export const initialStateJSON = JSON.stringify(initialState)

const CookieStorage: StateStorage = {
  getItem: (name) => {
    return Cookies.get(name) ?? null
  },
  setItem: (name, value) => {
    Cookies.set(name, value, { sameSite: 'strict', expires: 1 })
  },
  removeItem: (name) => {
    return Cookies.remove(name)
  },
}

export interface PersistedState {
  loading: boolean
  theme: ThemeMode | undefined
  token: string | undefined
}

interface StoreInterface extends PersistedState {
  toggleLoading: () => void
  toggleTheme: () => void
  setTheme: (themeMode: ThemeMode) => void
}

const zustandContext = createContext<StoreApi<StoreInterface>>()

export const Provider = zustandContext.Provider

export const useStore = zustandContext.useStore

export const initializeStore = (preloadedState: Partial<PersistedState>) => {
  return create<StoreInterface>()(
    persist(
      (set) => ({
        ...initialState,
        ...preloadedState,
        toggleLoading: () =>
          set((state) => ({
            ...state,
            loading: !state.loading,
          })),
        toggleTheme: () =>
          set((state) => ({
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
        setTheme: (theme: ThemeMode) =>
          set((state) => ({
            ...state,
            theme,
          })),
      }),
      {
        name: storageName,
        getStorage: () => CookieStorage,
        partialize: (state) => ({ loading: state.loading, theme: state.theme, token: state.token }),
        serialize: (state) => compressToEncodedURIComponent(JSON.stringify(state)),
        deserialize: (str) =>
          JSON.parse(decompressFromEncodedURIComponent(str) ?? initialStateJSON),
      }
    )
  )
}
