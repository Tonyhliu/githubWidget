import { connect } from 'react-redux';
import { receiveUsers, receiveUser, refreshAll, requestUsers, requestUser } from '../../actions/user_actions';
import allUsers from '../../reducers/selectors';
import UserList from './user_list';

const mapStateToProps = (state) => ({
  users: allUsers(state),
  state
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: () => dispatch(requestUser()),
  requestUsers: () => dispatch(requestUsers()),
  receiveUsers: (users) => dispatch(receiveUsers(users)),
  receiveUser: (user) => dispatch(receiveUser(user)),
  refreshAll: (users) => dispatch(refreshAll(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
