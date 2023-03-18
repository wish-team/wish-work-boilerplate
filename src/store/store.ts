import type { ThemeMode } from '@/theme/type'
import Cookies from 'js-cookie'
import { createContext, useContext } from 'react'
import { createStore, useStore as useZustandStore } from 'zustand'
import type { StateStorage } from 'zustand/middleware'
import { persist } from 'zustand/middleware'
import { createPersistStorage } from './createPersistStorage'

export const storageName = 'wishwork-boilerplate'

export const initialState: PersistedState = {
  loading: false,
  theme: undefined,
  token: undefined,
}
export const initialStateJSON = JSON.stringify(initialState)

export const CookieStorage = {
  getItem: (name) => {
    return Cookies.get(name) ?? null
  },
  setItem: (name, value) => {
    Cookies.set(name, value, { sameSite: 'strict', expires: 1 })
  },
  removeItem: (name) => {
    return Cookies.remove(name)
  },
} satisfies StateStorage

export interface PersistedState {
  loading: boolean
  theme: ThemeMode | undefined
  token: string | undefined
}

interface StoreInterface extends PersistedState {
  toggleLoading: () => void
  toggleTheme: () => void
  setTheme: (themeMode: ThemeMode) => void
  logout: () => void
}

export type Store = ReturnType<typeof initializeStore>

const zustandContext = createContext<Store | null>(null)

export const Provider = zustandContext.Provider

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext)

  if (!store) throw new Error('Store is missing the provider')

  return useZustandStore(store, selector)
}

export const initializeStore = (preloadedState: Partial<PersistedState>) => {
  return createStore<StoreInterface>()(
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
        logout: () => set((state) => ({ ...state, token: undefined })),
      }),
      {
        name: storageName,
        storage: createPersistStorage(() => CookieStorage),
        partialize: (state) => ({ loading: state.loading, theme: state.theme, token: state.token }),
      }
    )
  )
}
