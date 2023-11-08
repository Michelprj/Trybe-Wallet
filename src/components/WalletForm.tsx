import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalTypes } from '../types';
import { addExpense, fetchCurrency } from '../redux/actions';
import fetchAPI from '../utils/fetchAPI';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
  exchangeRates: '',
};

function WalletForm() {
  const [values, setValues] = useState(INITIAL_STATE);
  const dispatch: Dispatch = useDispatch();
  const { wallet: { currencies } } = useSelector((state: GlobalTypes) => state);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => {
    setValues((prevState) => (
      {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    ));
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addExpense({
      ...values,
      exchangeRates: await fetchExchange(),
    }));
    setValues(INITIAL_STATE);
  };

  const fetchExchange = async () => {
    const response = await fetchAPI('https://economia.awesomeapi.com.br/json/all');
    delete response.USDT;
    return response;
  };

  return (
    <>
      <label>
        Valor:
        <input
          type="number"
          name="value"
          value={ values.value }
          onChange={ handleChange }
          data-testid="value-input"
        />
      </label>

      <label>
        Descrição:
        <input
          type="text"
          name="description"
          value={ values.description }
          onChange={ handleChange }
          data-testid="description-input"
        />
      </label>

      <select
        name="currency"
        data-testid="currency-input"
        onChange={ handleChange }
        value={ values.currency }
      >
        {
        currencies.map((currency: string) => (
          <option value={ currency } key={ currency }>{currency}</option>
        ))
        }
      </select>

      <select
        name="method"
        data-testid="method-input"
        onChange={ handleChange }
        value={ values.method }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>

      <select
        name="tag"
        data-testid="tag-input"
        onChange={ handleChange }
        value={ values.tag }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>

      <button onClick={ handleClick }>Adicionar despesa</button>
    </>
  );
}

export default WalletForm;
