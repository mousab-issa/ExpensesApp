/* 
  Use the first pacakge if you wanna share with react app
*/

// import LocalizedStrings, {LocalizedStringsMethods} from 'react-localization';

import LocalizedStrings, {
  LocalizedStringsMethods,
} from 'react-native-localization';

export interface IStrings extends LocalizedStringsMethods {
  hey: string;
  Login: string;
  Signup: string;
  OrSignup: string;
  username: string;
  name: string;
  phone: string;
  pleaseEnterUserName: string;
  password: string;
  email: string;
  passInstruction: string;
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
    choose: 'Choose Your Location',
    login: 'Login Now',
    hey: 'Hey,',
    Login: 'Login',
    Signup: 'Sign up',
    OrSignup: 'Or Sign up',
    name: 'name',
    phone: 'phone',
    username: 'Username',
    email: 'email',
    pleaseEnterUserName: 'Please Enter The User Name',
    password: 'Password',
    passInstruction: 'number or letters',
    emailInstruction: 'Email e.g. m@gmail.com',
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
    error: 'Some Error Occured ',
  },
  ar: {
    choose: 'Choose Your Location',
    login: 'Login Now',
    hey: 'Hey,',
    Login: 'Login',
    name: 'name',
    phone: 'phone',
    email: 'email',
    Signup: 'Sign up',
    OrSignup: 'Or Sign up',
    username: 'Username',
    pleaseEnterUserName: 'Please Enter The User Name',
    password: 'Password',
    passInstruction: 'number or letters',
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
    error: 'Some Error Occured ',
  },
});
