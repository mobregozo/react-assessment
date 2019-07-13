import React from "react";
import Main from './pages/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyle } from './theme/globalStyle';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Main/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;