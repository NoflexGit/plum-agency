import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../index';

describe('<Logo />', () => {
  it('should render correct', () => {
    const renderedComponent = shallow(<Logo />);
    expect(renderedComponent.text()).toContain('Plum');
  });
});
