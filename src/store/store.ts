import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { AuthApi } from "@/services/auth";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import {setupListeners} from '@reduxjs/toolkit/query'

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const reducers = combineReducers({
    [AuthApi.reducerPath]: AuthApi.reducer,
    authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,
                    REGISTER
                ],
            },
            immutableCheck: false,
        }).concat([AuthApi.middleware]),
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
