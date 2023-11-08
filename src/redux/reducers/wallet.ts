import { AnyAction } from 'redux';
import { ADD_EXPENSE, REQUEST_STARTED, REQUEST_SUCCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
};

let id = 0;

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  const getState = state.expenses;

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
    default:
      return state;
  }
};

export default wallet;
