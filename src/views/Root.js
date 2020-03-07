import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from 'views/Auth';
import BodySize from 'views/BodySize.js';
import DietPage from 'views/DietPage.js';
import BodySizeList from 'views/BodySizeList.js';
import { Provider } from 'react-redux';
import store from 'store/index.js';
import BodySizeDetails from './BodySizeDetails';
import Home from 'views/Home';
import ProfilePage from 'views/ProfilePage';
import TrainingPage from 'views/TrainingPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Profile" component={ProfilePage} />
          <Route exact path="/bodySize" component={BodySize} />
          <Route exact path="/dietPage" component={DietPage} />
          <Route exact path="/bodySizeList" component={BodySizeList} />
          <Route exact path="/training" component={TrainingPage} />
          <Route path="/bodySizeList/:id" component={BodySizeDetails} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default Root;
