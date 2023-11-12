import { useSelector } from 'react-redux';
import { GlobalTypes, UserType } from '../../types';
import { Container } from './style';

function Header() {
  const { user: { email } } = useSelector((state: UserType) => state);
  const { wallet: { expenses } } = useSelector((state: GlobalTypes) => state);

  const total = expenses.reduce((soma, expense) => {
    const { currency, exchangeRates, value }: any = expense;
    soma += exchangeRates[currency].ask * value;
    return soma;
  }, 0);

  return (
    <Container>
      <img src="logo Trybe Wallet.svg" alt="logo" />
      <label>
        <img src="Moedas.svg" alt="Moedas" />
        <span data-testid="total-field">
          <p>Total de despesas:</p>
          {total.toFixed(2)}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </label>
      <span data-testid="email-field" id="email">
        <img src="Vector.svg" alt="perfil" />
        {' '}
        {email}
      </span>
    </Container>
  );
}

export default Header;
