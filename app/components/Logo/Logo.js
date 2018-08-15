import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_WHITE } from 'styles/styles-variables';

const Logo = styled(Link)`
  font-size: 24px;
  text-transform: uppercase;
  line-height: 18px;
  font-weight: 600;
  color: ${COLOR_WHITE};
`;

const LogoComponent = () => (
  <Logo to={'/'}>Plum</Logo>
);

export default LogoComponent;
