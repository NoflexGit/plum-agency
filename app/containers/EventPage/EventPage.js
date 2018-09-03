/*
 * TicketPage
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Column, Row, Container } from 'react-rasta';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Page from 'components/Page';

const EventPage = styled(Page)`
  position: relative;
  background-color: #5c2879;
  background-image: linear-gradient(19deg, #5c2879 0%, #3c2273 100%);
`;

const EventPageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 50%;
  width: 100%;
  filter: blur(8px);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,0));
  z-index: 0;
`;

const EventPageInfo = styled(Container)`
  position: relative;
  z-index: 1;
`;

export default class TicketPageComponent extends React.Component {
  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
  }
  render() {
    return (
      <EventPage >
        <Helmet>
          <title>Tickets</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <EventPageBackground background={this.props.event.picture} />
        < EventPageInfo>
          <div>123</div>
        </EventPageInfo>
      </EventPage>
    );
  }
}

TicketPageComponent.propTypes = {
  getEvent: propTypes.func,
  match: propTypes.object,
  event: propTypes.any
};
