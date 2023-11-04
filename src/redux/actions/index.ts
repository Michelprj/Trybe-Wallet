// Coloque aqui suas actions

export const LOGIN_WALLET = 'LOGIN_WALLET';

export const actionLogin = (email: string) => ({
  type: LOGIN_WALLET,
  payload: email,
});
