import {
  LOAD_EVENT,
  LOAD_EVENT_ERROR,
  LOAD_EVENT_SUCCESS
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function loadEvent(id) {
  return {
    type: LOAD_EVENT,
    payload: {
      id
    }
  };
}

/**
 */
export function eventLoaded(event) {
  return {
    type: LOAD_EVENT_SUCCESS,
    event,
  };
}

/**
 */
export function eventLoadingError() {
  return {
    type: LOAD_EVENT_ERROR
  };
}
