import type { PersistStorage, StorageValue } from 'zustand/middleware'
import { compress, decompress } from 'lz-string'
import type { CookieStorage, PersistedState } from './store'
import { initialStateJSON } from './store'

type StateStorage = typeof CookieStorage

export const createPersistStorage = (getStorage: () => StateStorage) => {
  const storage = getStorage()

  const persistStorage: PersistStorage<PersistedState> = {
    getItem: (name) => {
      const value = storage.getItem(name) ?? initialStateJSON

      return JSON.parse(decompress(value) ?? initialStateJSON) as StorageValue<PersistedState>
    },
    setItem: (name, newValue) => storage.setItem(name, compress(JSON.stringify(newValue))),
    removeItem: (name) => storage.removeItem(name),
  }

  return persistStorage
}
