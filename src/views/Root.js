import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from 'views/Auth';
import BodySize from 'views/BodySize';
import DietPage from 'views/DietPage';
import { Provider } from 'react-redux';
import store from 'store/index.js';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/bodySize" component={BodySize} />
          <Route exact path="/dietPage" component={DietPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default Root;
