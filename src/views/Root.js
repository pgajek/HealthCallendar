import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from 'views/Auth';
import BodySize from 'views/BodySize';
import DietPage from 'views/DietPage';
const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/bodySize" component={BodySize} />
        <Route exact path="/dietPage" component={DietPage} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default Root;
