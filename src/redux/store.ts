import {configureStore} from '@reduxjs/toolkit';
// Slices
import mainSlice from './main/main';

const store = configureStore({
  reducer: {mainSlice},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
