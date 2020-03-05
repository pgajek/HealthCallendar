import React from 'react';
import styled from 'styled-components';

const StyledPlate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

const Plate = ({ name, value }) => (
  <StyledPlate>
    <div>{name}</div>
    <div>{value}</div>
  </StyledPlate>
);

export default Plate;
