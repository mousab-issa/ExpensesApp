import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

// Async Actions
import {LoginUser, SignUpUser, CheckTokenValid} from './asyncActions';
// Models
import {Session, User} from './types';
// initial State
import {initialState} from './initialState';
import {reducerName} from './constatns';
import langauges from '../../common/langauges';

export const authSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    clearState: state => {
      state.isLoading = false;
      state.isInitiLoading = false;
    },
  },
  extraReducers: {
    // Login
    [LoginUser.fulfilled.type]: (state, action: PayloadAction<Session>) => {
      console.log(action.payload.email);

      state.isSignedIn = true;
      state.isSignedOut = false;
      state.userToken = action.payload.token;
      state.user.email = action.payload.email;
      state.user.name = action.payload.username;
      state.isInitiLoading = false;
      state.isLoading = false;
    },
    [LoginUser.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [LoginUser.rejected.type]: (state, action) => {
      Toast.show({
        type: 'error',
        text1: langauges.error,
        text2: langauges.error,
      });
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSignedOut = true;
      state.isInitiLoading = false;
    },
    // SignUp
    [SignUpUser.fulfilled.type]: (state, action: PayloadAction<any>) => {},
    [SignUpUser.pending.type]: (state, action) => {},
    [SignUpUser.rejected.type]: (state, action: PayloadAction<string>) => {},
    // Check if token is valid
    [CheckTokenValid.fulfilled.type]: (state, action: PayloadAction<User>) => {
      console.log(action.payload);

      state.userToken = action.payload.token;
      state.user = action.payload;
      state.isLoading = false;
      state.isInitiLoading = false;
    },
    [CheckTokenValid.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [CheckTokenValid.rejected.type]: (state, action: PayloadAction<string>) => {
      Object.assign(state, initialState);
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSignedOut = true;
      state.isInitiLoading = false;
    },
  },
});

export const {clearState} = authSlice.actions;

export default authSlice.reducer;
