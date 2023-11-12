import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: -4px 4px 7px 10px rgba(0,0,0,0.1);
  display: flex;
  height: 12em; 
  justify-content: space-around;
  left: 0%;
  margin: 0 7em ;
  top: 0%;
  position: fixed;
  right: 0%;

  label {
    display: flex;

    img {
      margin-right: 0.5em;
    }

    span {
      align-items: center;
      color: #003BE5;
      display: flex;
      flex-direction: row;
      margin-right: 0.3em;
      
      p {
        font-family: Epilogue;
        font-weight: 600;
        margin-right: 0.5em;
      }
    }
  }

  #email {
    align-items: center;
    color: #2FC18C;
    display: flex;
    font-family: Epilogue;
    font-weight: 600;

    img {
      margin-right: 0.4em;
    }
  }
`;
