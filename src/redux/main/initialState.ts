import {TransactionsType} from '../../common/enums';
import {Main, Transaction} from './types';

export const initialState: Main = {
  lang: 'en',
  langStrings: undefined,
  balance: 0,
  expenses: 0,
  transactions: [],
};
