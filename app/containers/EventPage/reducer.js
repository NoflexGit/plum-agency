import { fromJS } from 'immutable';

import { LOAD_EVENT, LOAD_EVENT_ERROR, LOAD_EVENT_SUCCESS } from './constants';

const initialState = fromJS({
  event: false,
  loading: false,
  error: false
});

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENT:
      return state
        .set('loading', true)
        .set('event', false)
        .set('error', false);
    case LOAD_EVENT_SUCCESS:
      return state
        .set('loading', false)
        .set('event', action.event)
        .set('error', false);
    case LOAD_EVENT_ERROR:
      return state
        .set('loading', false)
        .set('event', false)
        .set('error', true);
    default:
      return state;
  }
}

export default eventReducer;
