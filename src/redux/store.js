import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './catalog/catalogSlice';
import storage from 'redux-persist/lib/storage';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
// import { favoritesReducer } from './favorites/favoritesSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: persistedReducer,
    // favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
