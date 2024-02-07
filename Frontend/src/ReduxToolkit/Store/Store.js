// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit'; // Import combineReducers
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserAuth from '../Slices/AuthSlice';
import CartSlice from '../Slices/CartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducer = combineReducers({
  userslice: persistReducer(persistConfig, UserAuth),
  cartslice: persistReducer(persistConfig, CartSlice),
  // Add more slices here if needed
});

export const store = configureStore({
  reducer: combinedReducer,
});

export const persistor = persistStore(store);
