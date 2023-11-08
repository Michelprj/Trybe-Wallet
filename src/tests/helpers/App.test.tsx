import { screen } from '@testing-library/dom';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

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

  it('Verifica se é possível digitar nos inputs de login.', async () => {
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
  });

  it('Verifica se o componente Wallet possui suas respectivas funções.', async () => {
    renderWithRouterAndRedux(<App />);
  });
});
