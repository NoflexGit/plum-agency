import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-rasta';

import { COLOR_WHITE, COLOR_RED } from 'styles/styles-variables';

const EventCategories = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 70px;
`;

const CategoryLink = styled(NavLink)`
  position: relative;
  color: ${COLOR_WHITE};
  margin-right: 55px;
  font-size: 14px;
  padding-bottom: 20px;
  display: inline-block;

  &:hover {
    color: ${COLOR_RED};
  }

  &.active {
    &:before {
      content: '';
      bottom: -1px;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${COLOR_RED};
    }
  }
`;

export default class EventCategoriesComponent extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { loading, categories, errors } = this.props;

    if (!loading && categories) {
      return (
        <Container>
          <EventCategories>
            {categories.map((category) => (
              <CategoryLink
                exact
                key={category.id}
                to={`/events/categories/${category.title.toLowerCase()}`}
              >
                {category.title}
              </CategoryLink>
            ))}
          </EventCategories>
        </Container>
      );
    }

    return null;
  }
}

EventCategoriesComponent.propTypes = {
  getCategories: propTypes.func,
  loading: propTypes.bool,
  errors: propTypes.any,
  categories: propTypes.any
};
