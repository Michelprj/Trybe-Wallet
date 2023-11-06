import { useSelector } from 'react-redux';
import { UserType } from '../types';

function Header() {
  const { user: { email } } = useSelector((state: UserType) => state);
  console.log(email);

  return (
    <div>
      <span data-testid="email-field">
        Email:
        {' '}
        {email}
      </span>
      <span data-testid="total-field">
        0
      </span>
      <span data-testid="header-currency-field">
        BRL
      </span>
    </div>
  );
}

export default Header;
