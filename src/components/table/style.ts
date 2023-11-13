import styled from 'styled-components';

export const Container = styled.table`
  background-color: #003BE5;
  color: #2FC18C;
  text-align: center;
  position: -webkit-sticky;
  top: 30.5%;
  margin: 2.45%;
  padding: 20% 4% 5% 4%;
  border-radius: 10px;
  box-shadow: -4px 13px 7px 14px rgba(0,0,0,0.1);

  th {
    color: white;
    padding: 0 2em;
    border-bottom: 1px solid white;
  }
  
  th + th {
    border-left: 1px solid white;
  }

  tr:first-child td {
    border-top: none;
    padding: 0.8em;
  }

  tr:not(:first-child) td {
    border-top: 1px solid #2FC18C;
    padding: 0.8em;
  }

  button {
    margin-left: 0.5em;
    background: transparent;
    border: none;
  }

`;
