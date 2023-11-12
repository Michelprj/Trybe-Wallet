import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(225, 229, 235, 0.49);
    display: flex;
    flex-wrap: wrap;
    height: 21%;
    justify-content: space-evenly;
    left: 0%;
    margin: 0 7em;
    position: fixed;
    right: 0%;
    top: 30.6%;

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
`;

export const ContainerButton = styled.div`
  align-items: center;
  background: white;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  height: 17%;
  justify-content: space-evenly;
  left: 0%;
  margin: 0 7em;
  position: fixed;
  right: 0%;
  top: 51.6%;

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
`;
