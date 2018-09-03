import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_EVENT } from './constants';

import { eventLoaded, eventLoadingError } from './actions';

/**
 */
export function* getEvent(action) {
  const requestURL = `http://localhost:3010/events/${action.payload.id}`;

  try {
    const events = yield call(request, requestURL);
    yield put(eventLoaded(events));
  } catch (err) {
    yield put(eventLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getEventData() {
  yield takeLatest(LOAD_EVENT, getEvent);
}
