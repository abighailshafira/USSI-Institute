import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import symptomsReducer from './slices/symptomsSlice'
import profileReducer from './slices/profileSlice'
// import notificationReducer from './slices/notificationSlice'
// import wishlistReducer from './slices/wishlistSlice'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({ 
    auth: authReducer, 
    // symptoms: symptomsReducer, 
    // profile: profileReducer, 
    // wishlist: wishlistReducer 
}))

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})