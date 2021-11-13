import {configureStore} from '@reduxjs/toolkit';
// Slices
import mainSlice from './main/main';
import authSlice from './auth/auth';

const store = configureStore({
  reducer: {mainSlice, authSlice},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
