export const END_POINTS = {
  Auth: {
    baseUrl: 'http://localhost:4000',
    login: function (): string {
      return this.baseUrl + '/sign-in';
    },
    signUp: function (): string {
      return this.baseUrl + '/sign-up';
    },
    checkToken: function (): string {
      return this.baseUrl + '/validate-token';
    },
  },
};
