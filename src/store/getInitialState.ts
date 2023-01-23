import Cookie from 'cookie'
import type { IncomingHttpHeaders } from 'http'
import { decompressFromEncodedURIComponent } from 'lz-string'
import type { PersistedState } from './store'
import { initialStateJSON, storageName } from './store'

const getInitialState = (headers: IncomingHttpHeaders): PersistedState => {
  if (headers.cookie) {
    const cookies = Cookie.parse(headers.cookie)

    if (!cookies[storageName]) {
      return JSON.parse(initialStateJSON)
    }

    const state = JSON.parse(
      decompressFromEncodedURIComponent(cookies[storageName]) ?? initialStateJSON
    )

    return state && state.state ? { ...state.state } : JSON.parse(initialStateJSON)
  }

  return JSON.parse(initialStateJSON)
}

export default getInitialState
