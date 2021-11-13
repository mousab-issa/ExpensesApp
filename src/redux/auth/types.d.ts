// state model
export interface Session {
  token: string;
  id: string;
  username: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface AuthState {
  isSignedIn: boolean;
  isSignedOut: boolean;
  user: User;
  isLoading: boolean;
  isInitiLoading: boolean;
  userToken: string | undefined;
  isSuccess: boolean;
  isError: boolean;
  session: Session | undefined;
  errorMessage: string;
}
