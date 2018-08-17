/*
 * TicketPage
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Column, Container, Row } from 'react-rasta';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Page from 'components/Page';
import SimpleCard from 'components/Cards/Simple';
import FeaturedCard from 'components/Cards/Featured';
import CategoryCard from 'components/Cards/Category';

const TicketPage = styled(Page)`
  background-color: #5c2879;
  background-image: linear-gradient(19deg, #5c2879 0%, #3c2273 100%);
`;

export default class TicketPageComponent extends React.Component {// eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events } = this.props;
    return (
      <TicketPage>
        <Helmet>
          <title>Tickets</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <Container>
          <Row>
            {events.featured && events.featured.map((item) => (
              <Column
                key={item.id}
                size={{
                  sm: 6,
                  md: 4,
                }}
              >
                <FeaturedCard item={item} />
              </Column>
            ))}
          </Row>
          <h1>Upcoming Events</h1>
          <Row>
            {events.upcoming && events.upcoming.map((item) => (
              <Column
                key={item.id}
                size={{
                  sm: 6,
                  md: 3,
                }}
              >
                <SimpleCard item={item} />
              </Column>
            ))}
          </Row>
          <Row>
            {events.categories && events.categories.map((item) => (
              <Column
                key={item.id}
                size={{
                  sm: 6,
                  md: 4,
                }}
              >
                <CategoryCard item={item} />
              </Column>
            ))}
          </Row>
        </Container>
      </TicketPage>
    );
  }
}

TicketPageComponent.propTypes = {
  getEvents: propTypes.func,
  events: propTypes.any
};

