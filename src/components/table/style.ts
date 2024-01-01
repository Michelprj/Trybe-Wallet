import styled from 'styled-components';

export const Container = styled.div`
  background-color: #003BE5;
  color: #2FC18C;
  text-align: center;
  position: absolute;
  top: 30.6%;
  margin: 0 4.5vw;
  padding: 40vh 4% 5% 4%;
  left: 0%;
  width: 90vw;
  border-radius: 10px;
  box-shadow: -4px 13px 7px 14px rgba(0,0,0,0.1);

  table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
  }

  th {
    color: white;
    border-bottom: 1px solid white;
    padding: 0 5px;
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

  @media (min-width: 769px) and (max-width: 1024px) {
    th {
      font-size: 13px;
      padding: 0 5px;
    }
  
    tr {
      font-size: 13px;
    }

    button {
      margin-left: 0.2em;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    top: 30.6%;
    margin: 0 1vw;
    padding: 60vh 2% 3%;
    width: 95vw;

    th {
      font-size: 1.5vw;
    }
  
    tr {
      font-size: 1.5vw;
    }

    button {
      margin-left: 0.2em;
    }

    button img {
      width: 15px;
    }
  }

  @media (max-width: 480px) {
    top: 33.6%;
    margin: 0 1vw;
    padding: 60vh 2% 3%;
    width: 95vw;

    th {
      font-size: 1.7vw;
    }
  
    tr {
      font-size: 1.7vw;
    }

    button {
      margin-left: 0.2em;
    }

    button img {
      width: 15px;
    }
  }

`;
