/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { ApiSlice } from '../service/apiService'
import { reducers } from './rootreducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({ serializableCheck: false }).concat(ApiSlice.middleware)

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
