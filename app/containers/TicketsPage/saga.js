import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_EVENTS } from './constants';

import { eventsLoaded, eventsLoadingError } from './actions';

/**
 */
export function* getRepos() {
  const requestURL = 'http://localhost:3010/blocks';

  try {
    const events = yield call(request, requestURL);
    yield put(eventsLoaded(events));
  } catch (err) {
    yield put(eventsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_EVENTS, getRepos);
}
