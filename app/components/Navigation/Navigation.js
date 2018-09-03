import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_WHITE } from 'styles/styles-variables';

const StyledNavLink = styled(NavLink)`
  color: ${COLOR_WHITE};
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  margin-left: 40px;
  transition: color .3s;

  &:hover {
    opacity: .9;
  }
  
  &.active {
    color: #FF455A;
  }

  &:first-child {
    margin-left: 0;
  }
`;

const Navigation = () => (
  <nav>
    <StyledNavLink exact to="/">Home</StyledNavLink>
    <StyledNavLink to="/events">Events</StyledNavLink>
    {/*<StyledNavLink to="/tickets">Contacts</StyledNavLink>*/}
  </nav>
);

export default Navigation;
