import { fromJS } from 'immutable';

import { LOAD_EVENTS, LOAD_EVENTS_ERROR, LOAD_EVENTS_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  blocks: false,
  loading: false,
  error: false
});

function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENTS:
      return state
        .set('loading', true)
        .set('blocks', false)
        .set('error', false);
    case LOAD_EVENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('blocks', action.events)
        .set('error', false);
    case LOAD_EVENTS_ERROR:
      return state
        .set('loading', false)
        .set('blocks', false)
        .set('error', true);
    default:
      return state;
  }
}

export default ticketsReducer;
