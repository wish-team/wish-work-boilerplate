import { createContext, useContext, useMemo, useState } from 'react';
import useLocalStorage from './useLocalStorage'

const AppContext = createContext({
  mode: undefined,
  setTheme: async (theme: string) => null,
});

export function AppWrapper({ children }) {
  const getPreferredTheme = () =>
    typeof window !== 'undefined'
      ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      : false

  const [mode, setTheme] = useLocalStorage("mode", getPreferredTheme() ? "dark" : "light")

  return (
    <AppContext.Provider value={{ mode, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
