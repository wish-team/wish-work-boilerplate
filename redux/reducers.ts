import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import { appSlice } from './slices';

const rootPersistConfig = {
	key: 'root',
	// blacklist: ['app'],
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	app: appSlice.reducer
});

export default persistReducer(rootPersistConfig, rootReducer);
