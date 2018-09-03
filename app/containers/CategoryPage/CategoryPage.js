import React from 'react';
import propTypes from 'prop-types';
import upperFirst from 'lodash/upperFirst';
import { Helmet } from 'react-helmet';

export default class HomePageComponent extends React.PureComponent {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`${upperFirst(this.props.match.params.id)}`}</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
      </div>
    );
  }
}

HomePageComponent.propTypes = {
  match: propTypes.object
};
