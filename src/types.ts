import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  user: {
    email: string,
  }
};

export type WalletType = {
  currencies: string[],
  expenses: ExpensesType[],
};

export type ExpensesType = {
  id: number,
  value: string,
  currency: string,
  method: string,
  tag: string,
  description: string,
  exchangeRates: string,
};

export type GlobalTypes = {
  user: UserType,
  wallet: WalletType,
};

export type GetState = () => ExpensesType;

export type Dispatch = ThunkDispatch<GlobalTypes, null, AnyAction>;
