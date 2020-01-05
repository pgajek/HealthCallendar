import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';
import AddNew from 'components/molecules/AddNew/AddNew.js';

const StyledWrapper = styled.div``;

class DietPage extends Component {
  state = {};
  render() {
    return (
      <StyledWrapper>
        <AddNew />
      </StyledWrapper>
    );
  }
}

export default DietPage;
