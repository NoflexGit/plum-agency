import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_WHITE } from 'styles/styles-variables';

const StyledLogo = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  line-height: 24px;
  font-weight: 600;
  color: ${COLOR_WHITE};
`;

const Logo = () => (
  <Link to="/">
    <StyledLogo>Plum</StyledLogo>
  </Link>
);

export default Logo;
