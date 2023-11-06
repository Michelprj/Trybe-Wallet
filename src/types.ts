import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  user: {
    email: string,
  }
};

export type WalletType = {
  currencies: string[],
};

export type ExpensesType = {
  id: number,
  value: string,
  currency: string,
  method: string,
  tag: string,
  description: string,
};

export type GlobalTypes = {
  user: UserType,
  wallet: WalletType,
};

export type Dispatch = ThunkDispatch<GlobalTypes, null, AnyAction>;
