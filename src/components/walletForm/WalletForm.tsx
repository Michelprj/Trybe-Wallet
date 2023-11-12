import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalTypes } from '../../types';
import { addExpense, fetchCurrency, updateExpense } from '../../redux/actions';
import fetchAPI from '../../utils/fetchAPI';
import { Container, ContainerButton, Input, Select } from './style';

const INITIAL_STATE = {
  id: 0,
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
  const { wallet: {
    currencies,
    expenses,
    editor,
    idToEdit } } = useSelector((state: GlobalTypes) => state);

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

  const valuesToEdit = expenses
    .find((expense) => expense.id === idToEdit);

  useEffect(() => {
    if (editor && valuesToEdit) {
      const { id,
        value,
        description,
        currency, method,
        tag,
        exchangeRates } = valuesToEdit;

      setValues({
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      });
    }
  }, [editor]);

  const handleEdit = () => {
    const editedValues = expenses.map((expense) => (idToEdit === expense.id
      ? values
      : expense));
    dispatch(updateExpense(editedValues));
    setValues(INITIAL_STATE);
  };

  return (
    <>
      <Container>
        <label htmlFor="value">
          Valor
          <Input
            type="number"
            name="value"
            value={ values.value }
            onChange={ handleChange }
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description">
          Descrição da despesa
          <Input
            type="text"
            name="description"
            value={ values.description }
            onChange={ handleChange }
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currency">
          Moeda
          <Select
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
          </Select>
        </label>

        <label htmlFor="method">
          Método de pagamento
          <Select
            name="method"
            data-testid="method-input"
            onChange={ handleChange }
            value={ values.method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </Select>
        </label>

        <label htmlFor="tag">
          Categoria da despesa
          <Select
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
          </Select>
        </label>
      </Container>
      <ContainerButton>
        {
        editor
          ? <button onClick={ handleEdit }>Editar despesa</button>
          : <button onClick={ handleClick }>Adicionar despesa</button>
      }
      </ContainerButton>
    </>
  );
}

export default WalletForm;
