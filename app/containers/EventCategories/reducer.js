import { fromJS } from 'immutable';

import {
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS
} from './constants';

const initialState = fromJS({
  categories: false,
  loading: false,
  error: false
});

function eventCategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return state
        .set('loading', true)
        .set('categories', false)
        .set('error', false);
    case GET_CATEGORIES_SUCCESS:
      return state
        .set('loading', false)
        .set('categories', action.categories)
        .set('error', false);
    case GET_CATEGORIES_ERROR:
      return state
        .set('loading', false)
        .set('categories', false)
        .set('error', true);
    default:
      return state;
  }
}

export default eventCategoriesReducer;
