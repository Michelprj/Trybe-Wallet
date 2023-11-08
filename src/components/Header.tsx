import { useSelector } from 'react-redux';
import { GlobalTypes, UserType } from '../types';

function Header() {
  const { user: { email } } = useSelector((state: UserType) => state);
  const { wallet: { expenses } } = useSelector((state: GlobalTypes) => state);

  const total = expenses.reduce((soma, expense) => {
    const { currency, exchangeRates, value }: any = expense;
    soma += exchangeRates[currency].ask * value;
    return soma;
  }, 0);

  return (
    <div>
      <span data-testid="email-field">
        Email:
        {' '}
        {email}
      </span>
      <span data-testid="total-field">
        {total.toFixed(2)}
      </span>
      <span data-testid="header-currency-field">
        BRL
      </span>
    </div>
  );
}

export default Header;
