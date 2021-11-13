export const END_POINTS = {
  Auth: {
    baseUrl: 'https://serverexpensesinterview.herokuapp.com',
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
