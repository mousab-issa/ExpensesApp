/* 
  Use the first pacakge if you wanna share with react app
*/

// import LocalizedStrings, {LocalizedStringsMethods} from 'react-localization';

import LocalizedStrings, {
  LocalizedStringsMethods,
} from 'react-native-localization';

export interface IStrings extends LocalizedStringsMethods {
  home: string;
  goals: string;
  Stats: string;
  expenses: string;
  startIncome: string;
  welcome: string;
  addTransaction: string;
  tranHistory: string;
  history: string;
  date: string;
  transactions: string;
}
let strings: IStrings;

export default strings = new LocalizedStrings({
  en: {
    home: 'Home',
    goals: 'Goals',
    Stats: 'Stats',
    expenses: 'Your Expenses',
    startIncome: 'Start Income',
    welcome: 'Welcome Back',
    addTransaction: 'Add Transaction',
    tranHistory: 'Transations Hoistory',
    history: 'History',
    date: 'Date',
    transactions: 'Transacations',
  },
  ar: {
    home: 'Home',
    goals: 'Goals',
    Stats: 'Stats',
    expenses: 'Your Expenses',
    startIncome: 'Start Income',
    welcome: 'Welcome Back',
    addTransaction: 'Add Transaction',
    tranHistory: 'Transations Hoistory',
    history: 'History',
    date: 'Date',
    transactions: 'Transacations',
  },
});
