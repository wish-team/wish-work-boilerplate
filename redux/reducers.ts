import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

import { appSlice } from './slices'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

/*
	redux-persist error in server came from this file.
	just change back storage to 'storage: storage' in rootPersistConfig
	if you wanna go back
	more info: https://github.com/vercel/next.js/discussions/15687
*/

const createNoopStorage = () => {
  return {
    getItem(_key: unknown) {
      return Promise.resolve(null)
    },
    setItem(_key: unknown, value: unknown) {
      return Promise.resolve(value)
    },
    removeItem(_key: unknown) {
      return Promise.resolve()
    },
  }
}

const storageMod = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

const rootPersistConfig = {
  key: 'root',
  // blacklist: ['app'],
  version: 1,
  storage: storageMod,
}

const rootReducer = combineReducers({
  app: appSlice.reducer,
})

export default persistReducer(rootPersistConfig, rootReducer)
