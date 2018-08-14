import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/Logo';
import Nav from 'components/Navigation';

class HeaderComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Logo />
        <Nav />
      </div>
    );
  }
}

export default HeaderComponent;

HeaderComponent.propTypes = {
  className: PropTypes.string
};

