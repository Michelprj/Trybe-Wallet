import { screen } from '@testing-library/dom';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import { ADD_EXPENSE, EDIT_EXPENSES, REQUEST_STARTED, REQUEST_SUCCESS, UPDATE_EXPENSES } from '../../redux/actions';
import wallet from '../../redux/reducers/wallet';
import WalletForm from '../../components/walletForm/WalletForm';

describe('Teste se a aplicação cobre 60% de testes.', () => {
  it('Verifica se a página de login possui os devidos campos.', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByPlaceholderText(/senha/i);
    expect(inputPassword).toBeInTheDocument();

    const btnElement = screen.getByRole('button', { name: /entrar/i });
    expect(btnElement).toBeInTheDocument();
  });

  it('Verifica se é possível digitar nos inputs de login, e após acessar a página Wallet com seus respectibos .', async () => {
    const email = 'test@trybe.com';
    const password = '123456';
    const { user } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    await user.type(inputEmail, email);
    expect(inputEmail).toHaveValue(email);

    const inputPassword = screen.getByPlaceholderText(/senha/i);
    await user.type(inputPassword, password);
    expect(inputPassword).toHaveValue(password);

    const btnElement = screen.getByRole('button', { name: /entrar/i });
    await user.click(btnElement);
    const emailHeader = screen.getByText(/email:/i);
    expect(emailHeader).toBeInTheDocument();

    const inputValue = screen.getByRole('spinbutton', { name: /valor:/i });
    expect(inputValue).toBeInTheDocument();
    await user.type(inputValue, '100');
    expect(inputValue).toHaveValue(100);

    const inputDesctiption = screen.getByRole('spinbutton', { name: /valor:/i });
    expect(inputDesctiption).toBeInTheDocument();

    const btnAdd = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(btnAdd).toBeInTheDocument();

    const removeElement = screen.getByRole('columnheader', { name: /editar\/excluir/i });
    expect(removeElement).toBeInTheDocument();
  });

  it('Verifica se os estados são alterados corretamente.', async () => {
    const { store, user } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    expect(store.getState().wallet.isFetching).toBe(true);

    const inputValue = screen.getByRole('spinbutton', { name: /valor:/i });
    await user.type(inputValue, '100');
    expect(inputValue).toHaveValue(100);

    const btnAdd = screen.getByRole('button', { name: /adicionar despesa/i });
    await user.click(btnAdd);

    expect(store.getState().wallet.expenses.length).toBe(0);
  });
});

describe('Verifica se todas as actions são chamadas corretamente.', () => {
  it('Testa a action REQUEST_STARTED', () => {
    const action = { type: REQUEST_STARTED };
    const newState = wallet(undefined, action);

    expect(newState.isFetching).toEqual(true);
  });

  it('Testa a action REQUEST_SUCCESS', () => {
    const mockCurrencies = ['USD', 'EUR'];
    const action = { type: REQUEST_SUCCESS, payload: mockCurrencies };
    const newState = wallet(undefined, action);

    expect(newState.isFetching).toEqual(false);
    expect(newState.currencies).toEqual(mockCurrencies);
  });

  it('Testa a action ADD_EXPENSE', () => {
    const mockExpense = { amount: 50, description: 'Groceries' };
    const action = { type: ADD_EXPENSE, payload: mockExpense };
    const newState = wallet(undefined, action);

    expect(newState.expenses).toHaveLength(1);
    expect(newState.expenses[0]).toEqual(expect.objectContaining(mockExpense));
  });

  it('Testa a action UPDATE_EXPENSES', () => {
    const mockExpenses = [{ id: 1, amount: 50, description: 'Groceries' }];
    const action = { type: UPDATE_EXPENSES, payload: mockExpenses };
    const newState = wallet(undefined, action);

    expect(newState.expenses).toEqual(mockExpenses);
    expect(newState.editor).toEqual(false);
  });

  it('Testa a action EDIT_EXPENSES', () => {
    const mockIdToEdit = 1;
    const action = { type: EDIT_EXPENSES, payload: mockIdToEdit };
    const newState = wallet(undefined, action);

    expect(newState.editor).toEqual(true);
    expect(newState.idToEdit).toEqual(mockIdToEdit);
  });
});

describe('Verifica se o componente é renderizado.', () => {
  const valueInput = 'value-input';
  const descriptionInput = 'description-input';
  it('Testa se o componente é renderizado corretamente.', () => {
    renderWithRouterAndRedux(<WalletForm />);

    expect(screen.getByTestId(valueInput)).toBeInTheDocument();
    expect(screen.getByTestId(descriptionInput)).toBeInTheDocument();
  });
});
