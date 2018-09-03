import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_CATEGORIES } from './constants';

import { categoriesLoaded, categoriesLoadingError } from './actions';

/**
 */
export function* getCategories() {
  const requestURL = 'http://localhost:3010/categories';

  try {
    const categories = yield call(request, requestURL);
    yield put(categoriesLoaded(categories));
  } catch (err) {
    yield put(categoriesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}
