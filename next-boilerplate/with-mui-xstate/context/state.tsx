import { createContext, useContext, useState } from 'react';

// type SharedState = {
//   mode: 'dark' | 'light'
// }

const AppContext = createContext({
  mode: undefined,
  setTheme: async (theme: string) => null,
});

// const sharedState: SharedState = {
//   /* whatever you want */
//   mode: 'dark'
// }

export function AppWrapper({ children }) {
  const [mode, setTheme] = useState('light')

  return (
    <AppContext.Provider value={{ mode, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
