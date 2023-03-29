import Cookie from 'cookie'
import type { IncomingHttpHeaders } from 'http'
import { decompress } from 'lz-string'
import type { PersistedState } from './store'
import { initialState, storageName } from './store'

const getInitialState = (
  headers: IncomingHttpHeaders,
  overrideState?: Partial<PersistedState>
): PersistedState => {
  const parsedInitialState = JSON.parse(JSON.stringify({ ...initialState, ...overrideState }))

  if (headers.cookie) {
    const cookies = Cookie.parse(headers.cookie)

    if (!cookies[storageName]) {
      return parsedInitialState
    }

    const state = JSON.parse(decompress(cookies[storageName]) ?? JSON.stringify(parsedInitialState))

    return state && state.state ? { ...state.state, ...overrideState } : parsedInitialState
  }

  return parsedInitialState
}

export default getInitialState
