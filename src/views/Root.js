import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from 'views/Auth';
import BodySize from 'views/BodySize';

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/bodySize" component={BodySize} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default Root;
