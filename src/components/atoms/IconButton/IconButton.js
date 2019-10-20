import React from 'react';
import styled from 'styled-components';

const IconButton = styled.button`
  width: 48px;
  height: 48px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  border-radius: 32%;
  border: 1px solid #2e561e;
  background-color: #4a4a4a;
  box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.38);
`;

export default IconButton;
