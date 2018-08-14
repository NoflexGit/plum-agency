/*
 * TicketPage
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const TicketPage = styled.div`
  background: #3C2273;
  min-height: 100vh;
`;

export default class TicketPageComponent extends React.Component {// eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TicketPage>
        <Helmet>
          <title>Tickets</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <div>123</div>
      </TicketPage>
    );
  }
}
