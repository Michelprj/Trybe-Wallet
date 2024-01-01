import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: ${(props) => props.theme.colors.primaryText};
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${(props) => props.theme.colors.image});
    background-size: 100%;

  }
`;

export default GlobalStyles;
