import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

// Libs
import { store, persistor } from 'redux/store'
import ConditionalWrapper from './ConditionalWrapper'

type Props = {
  children: React.ReactElement
}

const PersistWrapper = (c: Props) => (
  <PersistGate loading={null} persistor={persistor}>
    {c}
  </PersistGate>
)

/* ReduxProvider Component =================== */

/*
    Warning: Did not expect server HTML to contain a <div> in <div>.
    using process.browser (deprecated) results in a hydration error (difference between server & client)
*/

const WithRedux = ({ children }: Props) => (
  <Provider store={store}>
    <ConditionalWrapper condition={process.browser} wrapper={PersistWrapper}>
      {children}
    </ConditionalWrapper>
  </Provider>
)

// Export default
export default WithRedux
