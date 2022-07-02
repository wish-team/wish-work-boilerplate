import { createContext, useContext, useState } from 'react';


const AppContext = createContext({
  mode: undefined,
  setTheme: async (theme: string) => null,
});

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
