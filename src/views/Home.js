import React, { Component } from 'react';
import Count from 'components/molecules/Count/Count';
import MainTemplate from 'templates/MainTemplate.js';
class Home extends Component {
  state = {};
  render() {
    return (
      <MainTemplate>
        <Count glass howMany={8} />
        <Count wine howMany={4} />
        <Count snack howMany={4} />
      </MainTemplate>
    );
  }
}

export default Home;
