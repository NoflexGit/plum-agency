import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLocation } from 'containers/App/selectors';
import { makeSelectEvents } from './selectors';


import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
import TicketPage from './TicketPage';

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(loadEvents())
});

const mapStateToProps = createStructuredSelector({
  blocks: makeSelectEvents(),
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'blocks', reducer });
const withSaga = injectSaga({ key: 'blocks', saga });

export default compose(withReducer, withSaga, withConnect)(TicketPage);
export { mapDispatchToProps };
