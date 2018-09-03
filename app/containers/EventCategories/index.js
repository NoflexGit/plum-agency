import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLocation } from 'containers/App/selectors';
import {
  makeSelectEvents,
  makeSelectErrors,
  makeSelectLoading
} from './selectors';
import { getCategories } from './actions';
import reducer from './reducer';
import saga from './saga';
import EventCategories from './EventCategories';

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories())
});

const mapStateToProps = createStructuredSelector({
  categories: makeSelectEvents(),
  errors: makeSelectErrors(),
  loading: makeSelectLoading(),
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'event_categories', reducer });
const withSaga = injectSaga({ key: 'event_categories', saga });

export default compose(withReducer, withSaga, withConnect)(EventCategories);
export { mapDispatchToProps };
