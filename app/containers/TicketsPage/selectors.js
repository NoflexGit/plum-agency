/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectTickets = (state) => state.get('blocks');

const makeSelectEvents = () => createSelector(
  selectTickets,
  (ticketState) => ticketState.get('blocks')
);

export {
  selectTickets,
  makeSelectEvents,
};
