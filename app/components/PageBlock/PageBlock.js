import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-rasta';
import { COLOR_WHITE } from 'styles/styles-variables';

const PageBlock = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 20px 0;
  line-height: 28px;
`;

const LogoComponent = (props) => (
  <Container>
    { props.title && <Title>{props.title}</Title> }
    <PageBlock>{props.children}</PageBlock>
  </Container>
);

export default LogoComponent;
