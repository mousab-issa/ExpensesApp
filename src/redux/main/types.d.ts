import {TransactionsType} from '../../common/enums';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  catagory: string;
  date: string;
  type: TransactionsType;
  description: string;
}

export interface Main {
  lang: string;
  langStrings: any[] | undefined;
  balance: number | 0;
  expenses: number | 0;
  transactions: Transaction[] | undefined;
}
