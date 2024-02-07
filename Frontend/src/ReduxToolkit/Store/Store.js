import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserAuth from '../Slices/AuthSlice';
import CartSlice from '../Slices/CartSlice';

// Set up persistence for the Redux store
const persistConfig = {
  key: 'root',
  storage,
};

// Combine the reducers for each slice
const combinedReducer = combineReducers({
  userslice: persistReducer(persistConfig, UserAuth),
  cartslice: persistReducer(persistConfig, CartSlice),
  // Add more slices here if needed
});

// Configure the Redux store with the combined reducer
const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Set up persistence for the Redux store
export const persistor = persistStore(store);

export default store;
