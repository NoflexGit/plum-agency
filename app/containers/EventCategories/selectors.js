import { createSelector } from 'reselect';

const selectEventCategories = (state) => state.get('event_categories');

const makeSelectEvents = () =>
  createSelector(selectEventCategories, (eventCategoriesState) =>
    eventCategoriesState.get('categories')
  );

const makeSelectErrors = () =>
  createSelector(selectEventCategories, (eventCategoriesState) =>
    eventCategoriesState.get('error')
  );

const makeSelectLoading = () =>
  createSelector(selectEventCategories, (eventCategoriesState) =>
    eventCategoriesState.get('loading')
  );

export {
  selectEventCategories,
  makeSelectEvents,
  makeSelectErrors,
  makeSelectLoading
};
