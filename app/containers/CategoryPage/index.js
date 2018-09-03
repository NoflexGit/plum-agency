import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLocation } from 'containers/App/selectors';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import reducer from './reducer';
import saga from './saga';
import CategoryPage from './CategoryPage';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = createStructuredSelector({
  items: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(CategoryPage);
export { mapDispatchToProps };
