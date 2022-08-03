import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from 'redux/store'

export type Props = {
  children: React.ReactNode
}

const WithRedux = ({ children }: Props) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={children}>
      {children}
    </PersistGate>
  </Provider>
)

export default WithRedux
