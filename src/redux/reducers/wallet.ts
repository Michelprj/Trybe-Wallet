import { AnyAction } from 'redux';
import {
  ADD_EXPENSE,
  REQUEST_STARTED,
  REQUEST_SUCCESS,
  UPDATE_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
};

let id = 0;

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, {
          ...action.payload,
          id: id++,
        }],
      };
    case UPDATE_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};

export default wallet;
