import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "./reducers.js/chat_reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { version } from "react";

// Persist config
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    chatReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware to remove serializableCheck error
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// persistStore that will store data in localstorage and remain them intact
export const persistor = persistStore(store);
