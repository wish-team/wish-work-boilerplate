import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

// Libs
import { persistor, store } from 'redux/store'

export type Props = {
  children: React.ReactNode
}

/* ReduxProvider Component =================== */

/*
    Warning: Did not expect server HTML to contain a <div> in <div>.
    using process.browser (deprecated) results in a hydration error (difference between server & client)
*/

const WithRedux = ({ children }: Props) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  </Provider>
)

// Export default
export default WithRedux
