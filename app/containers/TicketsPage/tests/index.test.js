import React from 'react';
import { shallow } from 'enzyme';

import TicketPage from '../index';

describe('<TicketPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<TicketPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });
});
