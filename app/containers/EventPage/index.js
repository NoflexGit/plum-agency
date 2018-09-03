import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLocation } from 'containers/App/selectors';
import { makeSelectEvent } from './selectors';


import { loadEvent } from './actions';
import reducer from './reducer';
import saga from './saga';
import EventPage from './EventPage';

const mapDispatchToProps = (dispatch) => ({
  getEvent: (id) => dispatch(loadEvent(id))
});

const mapStateToProps = createStructuredSelector({
  event: makeSelectEvent(),
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'event', reducer });
const withSaga = injectSaga({ key: 'event', saga });

export default compose(withReducer, withSaga, withConnect)(EventPage);
export { mapDispatchToProps };
