/*
 * TicketPage
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Column, Row } from 'react-rasta';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Page from 'components/Page';
import CategoryPage from 'containers/CategoryPage/Loadable';
import SimpleCard from 'components/Cards/Simple';
import FeaturedCard from 'components/Cards/Featured';
import CategoryCard from 'components/Cards/Category';
import PageBlock from 'components/PageBlock';
import EventCategories from 'containers/EventCategories/Loadable';

const TicketPage = styled(Page)`
  background-color: #5c2879;
  background-image: linear-gradient(19deg, #5c2879 0%, #3c2273 100%);
`;

export default class TicketPageComponent extends React.Component {
  componentDidMount() {
    if (this.props.history.location.pathname === '/events') {
      this.props.getEvents();
    }
  }
  render() {
    const { blocks } = this.props;
    return (
      <TicketPage>
        <Helmet>
          <title>Tickets</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <EventCategories />

        {this.props.history.location.pathname === '/events' ? (
          <div>
            <PageBlock>
              <Row>
                {blocks.featured &&
                  blocks.featured.map((item) => (
                    <Column
                      key={item.id}
                      size={{
                        sm: 6,
                        md: 4
                      }}
                    >
                      <FeaturedCard item={item} />
                    </Column>
                  ))}
              </Row>
            </PageBlock>
            <PageBlock title={'Popular'}>
              <Row>
                {blocks.popular &&
                  blocks.popular.map((item) => (
                    <Column
                      key={item.id}
                      size={{
                        sm: 6,
                        md: 3
                      }}
                    >
                      <SimpleCard item={item} />
                    </Column>
                  ))}
              </Row>
            </PageBlock>
            <PageBlock>
              <Row>
                {blocks.categories &&
                  blocks.categories.map((item) => (
                    <Column
                      key={item.id}
                      size={{
                        sm: 6
                      }}
                    >
                      <CategoryCard item={item} />
                    </Column>
                  ))}
              </Row>
            </PageBlock>
            <PageBlock title={'Upcoming Events'}>
              <Row>
                {blocks.upcoming &&
                  blocks.upcoming.map((item) => (
                    <Column
                      key={item.id}
                      size={{
                        sm: 6,
                        md: 3
                      }}
                    >
                      <SimpleCard item={item} />
                    </Column>
                  ))}
              </Row>
            </PageBlock>
          </div>
        ) : (
          <Route exact path="/events/categories/:id" component={CategoryPage} />
        )}
      </TicketPage>
    );
  }
}

TicketPageComponent.propTypes = {
  getEvents: propTypes.func,
  blocks: propTypes.any,
  history: propTypes.object
};
