import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { COLOR_WHITE } from 'styles/styles-variables';

const Marker = styled.span`
  font-size: 12px;
  font-weight: 500;
  background: #FF455A;
  padding: 5px 7px;
  color: ${COLOR_WHITE};
`;

const FeaturedCardComponent = (props) => (
  <Marker>From {props.value}</Marker>
);

export default FeaturedCardComponent;

FeaturedCardComponent.propTypes = {
  value: propTypes.any
};
