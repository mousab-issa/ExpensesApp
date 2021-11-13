import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {I18nManager} from 'react-native';
import Constants from '../../common/constants';
import {TransactionsType} from '../../common/enums';
import {setLanguage} from './asyncActions';
import {reducerName} from './constants';
// Initial State
import {initialState} from './initialState';
import {Transaction} from './types';

export const mainSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    main: (state, action: PayloadAction<any>) => {},
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      if (action.payload.type === TransactionsType.Income) {
        state.balance += action.payload.amount;
      } else {
        state.balance -= action.payload.amount;
        state.expenses += Math.abs(action.payload.amount);
      }
      state.transactions?.push(action.payload);
    },
  },
  extraReducers: {
    [setLanguage.fulfilled.type]: (state, action) => {
      state.lang = action.payload;
    },
    [setLanguage.pending.type]: (state, action) => {},
    [setLanguage.rejected.type]: (state, action) => {
      state.lang = Constants.Lang.en;
      I18nManager.forceRTL(false);
    },
  },
});

export const {main, addTransaction} = mainSlice.actions;

export default mainSlice.reducer;
