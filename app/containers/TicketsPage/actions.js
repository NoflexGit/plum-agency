import {
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
  LOAD_EVENTS_SUCCESS
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function loadEvents() {
  return {
    type: LOAD_EVENTS
  };
}

/**
 */
export function eventsLoaded(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

/**
 */
export function eventsLoadingError() {
  return {
    type: LOAD_EVENTS_ERROR
  };
}
