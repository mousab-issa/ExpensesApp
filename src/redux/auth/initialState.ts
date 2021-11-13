import {AuthState} from './types';

export const initialState: AuthState = {
  isSignedIn: false,
  isSignedOut: true,
  userToken: undefined,
  user: {
    id: '',
    name: 'string',
    email: 'string',
    token: 'string',
  },
  session: undefined,
  isLoading: true,
  isInitiLoading: true,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};
