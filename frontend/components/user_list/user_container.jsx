import { connect } from 'react-redux';
import { removeUser,
        refreshAllUsers,
        requestUsers,
        requestUser,
        requestLocation,
        isLoading }
        from '../../actions/user_actions';
import allUsers from '../../reducers/selectors';
import UserList from './user_list';

const mapStateToProps = (state) => ({
  users: allUsers(state),
  loading: state.loading,
  location: state.location,
  state
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: () => dispatch(requestUser()),
  requestUsers: () => dispatch(requestUsers()),
  removeUser: (user) => dispatch(removeUser(user)),
  requestLocation: () => dispatch(requestLocation()),
  isLoading: () => dispatch(isLoading()),
  refreshAllUsers: (users) => dispatch(refreshAllUsers(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
