import React from 'react';
import styled from 'styled-components';
import { COLOR_WHITE } from 'styles/styles-variables';

const SimpleCard = styled.article`
  min-height: 350px;
  background-color: ${COLOR_WHITE};
  background-image: url("https://lastfm-img2.akamaized.net/i/u/770x0/8f8af602446f9be64f3fbad987722674.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const SimpleCardComponent = () => (
  <SimpleCard>
   123
  </SimpleCard>
);

export default SimpleCardComponent;
