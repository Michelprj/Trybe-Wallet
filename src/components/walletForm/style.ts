import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(225, 229, 235, 0.99);
    box-shadow: -16px 0 7px 0 rgba(0,0,0,0.1), 4px 0 7px 0 rgba(0,0,0,0.1);
    display: flex;
    flex-wrap: wrap;
    height: 21%;
    justify-content: space-evenly;
    left: 0%;
    margin: 0 7em;
    position: absolute;
    right: 0%;
    top: 30.6%;
    z-index: 2;

    label {
      align-items: center;
      color: #003BE5;
      display: flex;
      font-family: Epilogue;
      font-weight: 700;

      input {
        margin-left: 0.7em;
      }

      select {
        margin-left: 0.7em;
      }
    }

  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-evenly;
    margin: 0 4em;

    label {
      font-weight: 600;
      font-size: 14px;

      input {
        margin-left: 0.4em;
      }

      select {
        margin-left: 0.7em;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0 2em;
    height: 41%;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;

    label {
      font-weight: 500;
      font-size: 12px;
      display: flex;
      flex-direction: column;

      input {
        margin-left: 0.4em;
      }

      select {
        margin-left: 0.7em;
      }
    }
  }

  @media (max-width: 480px) {
    margin: 0 1em;
    height: 45%;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;

    label {
      font-weight: 500;
      font-size: 10px;
      display: flex;
      flex-direction: column;

      input {
        margin-left: 0.4em;
      }

      select {
        margin-left: 0.7em;
      }
    }
  }
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

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 2.1em;
    margin-bottom: 0.6em;
    padding-left: 0.9em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 2em;
    margin-bottom: 0.6em;
    padding: 0 20vw;
  }

  @media (max-width: 480px) {
    height: 2em;
    margin-bottom: 0.6em;
    padding: 0 10vw;
  }
`;

export const Select = styled.select`
  border: 1px solid #003BE5;
  border-radius: 5px;
  color: #003BE5;
  height: 2.5em;
  margin-bottom: 0.6em;
  padding-left: 0.9em;
  padding-right: 2em;

  &::placeholder {
    color: #003BE5;
  }

  &:focus {
    border: 2px solid #4c70d7;
    outline: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 2.1em;
    margin-bottom: 0.6em;
    padding-left: 0.9em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 2em;
    margin-bottom: 0.6em;
    padding: 0 25vw;
  }

  @media (max-width: 480px) {
    height: 2em;
    margin-bottom: 0.6em;
    padding: 0 18vw;
  }
`;

export const ContainerButton = styled.div`
  align-items: center;
  background: white;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  box-shadow: -4px 13px 7px 14px rgba(0,0,0,0.1);
  display: flex;
  flex-wrap: wrap;
  height: 17%;
  justify-content: space-evenly;
  left: 0%;
  margin: 0 7em;
  position: absolute;
  right: 0%;
  top: 51.6%;
  z-index: 1;

  button {
    background: #2FC18C;
    border: 1px solid #2FC18C;
    border-radius: 5px;
    color: #FFF;
    font-family: Epilogue;
    font-size: 15px;
    font-weight: 700;
    padding: 0.8em 7em;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 0 4em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0 2em;
    top: 71%;
  }

  @media (max-width: 480px) {
    margin: 0 1em;
    top: 75%;

    button {
    border-radius: 5px;
    color: #FFF;
    font-family: Epilogue;
    font-size: 14px;
    font-weight: 500;
    padding: 0.8em 4em;
    text-align: center;
  }
  }
`;
