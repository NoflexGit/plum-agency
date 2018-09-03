import {
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS
} from './constants';

export function getCategories() {
  return {
    type: GET_CATEGORIES
  };
}

export function categoriesLoaded(categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories,
  };
}

export function categoriesLoadingError() {
  return {
    type: GET_CATEGORIES_ERROR
  };
}
