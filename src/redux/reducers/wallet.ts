import { AnyAction } from 'redux';
import { ADD_EXPENSE, REQUEST_STARTED, REQUEST_SUCCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [
    {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    },
  ],
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  const addNewExpense = [...state.expenses, action.payload];
  console.log(addNewExpense);
  const id = state.expenses.length;
  console.log(id);

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
          id,
          value: action.payload.value,
          currency: action.payload.currency,
          method: action.payload.method,
          tag: action.payload.tag,
          description: action.payload.description,
        }],
      };
    default:
      return state;
  }
};

export default wallet;
