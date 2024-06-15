import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filter/slice';
import contactsReducer from "./contacts/slice";
import authReducer from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistedAuthReducer
    },
     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
});

export const persistor = persistStore(store);
