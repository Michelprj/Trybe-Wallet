import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: white;
  border-radius: 7px;
  box-shadow: 0px 0px 50px 8px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  height: 22.25em; 
  justify-content: space-evenly;
  width: 555px;
`;

export const BodyLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #003BE5;
  border-radius: 5px;
  height: 2.5em;
  margin-bottom: 0.6em;
  padding-left: 0.9em;
  &::placeholder {
    color: #003BE5;
  }

  &:focus {
    border: 2px solid #4c70d7;
    outline: none;
  }
`;

export const Button = styled.button`
  
  &:disabled {
    background-color: #638bff;
    border: 1px solid #003BE5;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    padding: 10px;
    text-align: center;
    width: 20.62em;
  }

  &:enabled {
    background-color: #003BE5;
    border: 1px solid #003BE5;
    border-radius: 5px;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    padding: 10px;
    text-align: center;
    width: 20.62em;
  }
`;

export const Logo = styled.div`
  #Rectangle1 {
    position: relative;
    right: 7%;
  }

  #Rectangle2 {
    position: relative;
    right: 18%;
  }

  #logo {
    left: 8%;
    position: relative;
    z-index: 1;
  }

  #Trybe {
    position: relative;
    right: 16%;
  }

  #Wallet {
    bottom: 11.4%;
    position: relative;
    right: 14%;
  }
`;
