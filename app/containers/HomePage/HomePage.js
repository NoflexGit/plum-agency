/*
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  HomePage,
  HomePageHero,
  HomePageHeroOverlay,
  HomePageHeroImage
} from './styles';

export default class HomePageComponent extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HomePage>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <HomePageHero>
          <HomePageHeroOverlay />
          <HomePageHeroImage />
        </HomePageHero>
      </HomePage>
    );
  }
}

HomePageComponent.propTypes = {};
