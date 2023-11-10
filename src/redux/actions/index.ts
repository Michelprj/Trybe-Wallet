import { Dispatch, ExpensesType } from '../../types';
import fetchAPI from '../../utils/fetchAPI';

export const LOGIN_WALLET = 'LOGIN_WALLET';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_PRICE = 'GET_PRICE';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';

// action para adicionar email de login
export const actionLogin = (email: string) => ({
  type: LOGIN_WALLET,
  payload: email,
});

// realiza busca de currencies para select
const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const getCurrency = (currencies: string[]) => ({
  type: REQUEST_SUCCESS,
  payload: currencies,
});

export const fetchCurrency = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetchAPI('https://economia.awesomeapi.com.br/json/all');

      const currencies = Object.keys(response)
        .filter((currency: string) => currency !== 'USDT');
      dispatch(getCurrency(currencies));
    } catch (error: any) {
      console.error(error.message);
    }
  };
};

// adiciona expenses com os valores adicionados
export const addExpense = (expenses: ExpensesType) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});

export const updateExpense = (expenses: ExpensesType[]) => ({
  type: UPDATE_EXPENSES,
  payload: expenses,
});

export const editExpense = (id: number | undefined) => ({
  type: EDIT_EXPENSES,
  payload: id,
});
