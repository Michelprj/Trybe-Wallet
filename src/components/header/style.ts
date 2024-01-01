import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: -4px 4px 7px 10px rgba(0,0,0,0.1);
  display: flex;
  height: 30.6%; 
  justify-content: space-around;
  left: 0%;
  margin: 0 7em ;
  top: 0%;
  position: absolute;
  right: 0%;

  .container-infos {
      display: flex;
      flex-direction: row;
      gap: 2vw;
      margin: 0 4vw;
    }

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

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 0 4em ;

    .logo {
      height: auto;
      width: 20vw;
    }

    label {
      img {
        height: auto;
        width: 25px;
      }

      span {
        p {
          font-size: 14px;
          font-weight: 500;
          margin-right: 0.5em;
        }
      }
    }

    #email {
      font-weight: 500;
      font-size: 14px;

      img {
        height: auto;
        width: 25px;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    margin: 0 2em;

    .logo {
      height: auto;
      width: 40vw;
    }

    label {
      img {
        height: auto;
        width: 25px;
      }

      span {
        font-size: 16px;
        p {
          font-size: 16px;
          font-weight: 600;
          margin-right: 0.5em;
        }
      }
    }

    #email {
      font-weight: 600;
      font-size: 16px;

      img {
        height: auto;
        width: 25px;
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    margin: 0 1em;

    .container-infos {
      display: flex;
      gap: 2vw;
      margin: 0 4vw;
    }

    .logo {
      height: auto;
      width: 40vw;
    }

    label {
      margin-right: 5px;
      img {
        height: auto;
        width: 15px;
      }

      span {
        font-size: 10px;
        p {
          font-size: 10px;
        }
      }
    }

    #email {
      font-weight: 600;
      font-size: 10px;

      img {
        height: auto;
        width: 15px;
      }
    }
  }
`;
