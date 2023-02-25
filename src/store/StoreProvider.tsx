import { useRef } from 'react'
import type { PersistedState, Store } from './store'
import { initializeStore, Provider } from './store'

type StoreProviderProps = React.PropsWithChildren<PersistedState>

const StoreProvider = ({ children, ...props }: StoreProviderProps) => {
  const storeRef = useRef<Store>()

  if (!storeRef.current) {
    storeRef.current = initializeStore(props)
  }

  return <Provider value={storeRef.current}>{children}</Provider>
}

export default StoreProvider
