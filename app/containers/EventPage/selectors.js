/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectEvent = (state) => state.get('event');

const makeSelectEvent = () => createSelector(
  selectEvent,
  (ticketState) => ticketState.get('event')
);

export {
  selectEvent,
  makeSelectEvent,
};
