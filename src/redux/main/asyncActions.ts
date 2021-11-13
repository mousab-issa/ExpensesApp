import {I18nManager} from 'react-native';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {SupportedLanguages} from '../../common/enums';
import {getAsyncItem, SetAsyncItem} from '../../helpers/common';
import {reducerName} from './constants';

export const setLanguage = createAsyncThunk(
  `${reducerName}/setLanguages`,
  async (lang: string, thunkAPI) => {
    switch (lang) {
      case SupportedLanguages.ar:
        try {
          await SetAsyncItem('Lang', SupportedLanguages.ar);
          return SupportedLanguages.ar;
        } catch (e) {
          console.error(e);
        }
      case SupportedLanguages.en:
        await SetAsyncItem('Lang', SupportedLanguages.en);
        return SupportedLanguages.en;
      default:
        return thunkAPI.rejectWithValue('Langauge is Not Supported');
    }
  },
);

export const getLanguage = createAsyncThunk(
  `${reducerName}/setLanguages`,
  async (lang: string, thunkAPI) => {
    try {
      const Langaugae = await getAsyncItem('Lang');
      return Langaugae;
    } catch (e) {
      return;
    }
  },
);
