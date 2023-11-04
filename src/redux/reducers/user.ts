import { AnyAction } from 'redux';
import { LOGIN_WALLET } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_WALLET:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
