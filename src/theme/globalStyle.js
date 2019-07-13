import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'AlverataBl';
    src: url(${require('./Alverata-Black.otf')});
    font-style: 'Black';
  }
  
  body {
    font-size: 14px;
    font-family: sans-serif;
  }
`;