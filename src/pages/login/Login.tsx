import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { actionLogin } from '../../redux/actions';
import { BodyLogin, Button, Container, Input, Logo } from './style';

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
    <Container>
      <BodyLogin>
        <Logo>
          <img
            src="logo.png"
            alt="emoji"
          />
        </Logo>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={ login.email }
          onChange={ handleChange }
          data-testid="email-input"
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={ login.password }
          onChange={ handleChange }
          data-testid="password-input"
        />

        <Button
          disabled={ !disableEmail.test(login.email) || !disablePassword }
          onClick={ handleClick }
        >
          Entrar
        </Button>
      </BodyLogin>

    </Container>
  );
}

export default Login;
