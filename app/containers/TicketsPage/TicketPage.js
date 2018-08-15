/*
 * TicketPage
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Page from 'components/Page';
import styled from 'styled-components';
import SimpleCard from 'components/Cards/SimpleCard';
import { Column, Container, Row } from 'react-rasta';

const TicketPage = styled(Page)`
  background: #3C2273;
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
        <Container>
          <h1>Upcoming Events</h1>
          <Row>
            <Column size={3}><SimpleCard /></Column>
          </Row>
        </Container>
      </TicketPage>
    );
  }
}
