import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: white;
  border-radius: 7px;
  box-shadow: 0px 0px 50px 8px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
  display: flex;
  height: 22.25em; 
  justify-content: center;
  width: 555px;
  margin-top: 10rem;

  @media (min-width: 481px) and (max-width: 769px) {
    width: 70vw;
    height: 23em;
    margin-top: 30vh;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 25em;
    margin-top: 30vh;
  }
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

  @media (min-width: 481px) and (max-width: 769px) {
    border: 1px solid #003BE5;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 0.6em;
    width: 19em;
    padding-left: 8px;
    &::placeholder {
      color: #003BE5;
    }

    &:focus {
      border: 2px solid #4c70d7;
      outline: none;
    }
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

  @media (min-width: 481px) and (max-width: 769px) {
    &:disabled {
    font-size: 12px;
    font-weight: 600;
    padding: 8px;
    width: 21em;
  }

  &:enabled {
    font-size: 12px;
    font-weight: 600;
    padding: 8px;
    width: 21em;
  }
  }
`;

export const Logo = styled.div`
  margin-bottom: 15%;
  
  @media (min-width: 481px) and (max-width: 769px) {

  }
`;
