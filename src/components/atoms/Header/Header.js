import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const Header = styled.h1`
  font-size: ${({ big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${theme.bold};
`;

export default Header;
