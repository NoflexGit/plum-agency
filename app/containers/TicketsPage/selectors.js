/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectTickets = (state) => state.get('tickets');

const makeSelectEvents = () => createSelector(
  selectTickets,
  (ticketState) => ticketState.get('events')
);

export {
  selectTickets,
  makeSelectEvents,
};
