import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionLogin } from '../redux/actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const [login, setLogin] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const disablePassword = login.password.length >= 6;
  const disableEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/carteira');
    dispatch(actionLogin(login.email));
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        value={ login.email }
        onChange={ handleChange }
        data-testid="email-input"
      />
      <input
        type="password"
        name="password"
        value={ login.password }
        onChange={ handleChange }
        data-testid="password-input"
      />

      <button
        disabled={ !disableEmail.test(login.email) || !disablePassword }
        onClick={ handleClick }
      >
        Entrar
      </button>

    </div>
  );
}

export default Login;
