import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding-top: 80px;
`;

const PageComponent = ({ className, children }) => (
  <PageWrapper className={className}>
    { children }
  </PageWrapper>
);

export default PageComponent;

PageComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
