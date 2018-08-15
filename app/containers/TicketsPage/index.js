import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectEvents } from './selectors';

import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
import TicketPage from './TicketPage';

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(loadEvents()),
});

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tickets', reducer });
const withSaga = injectSaga({ key: 'tickets', saga });

export default compose(withReducer, withSaga, withConnect)(TicketPage);
export { mapDispatchToProps };
