export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REFRESH_ALL = 'REFRESH_ALL';

import * as APIUtil from '../util/api_util';

export const requestUsers = () => (dispatch) => {
	// dispatch(startLoadingAllPokemon());
  // loading
	return APIUtil.fetchUsers()
		.then(users => dispatch(receiveUsers(users)));
};

export const requestUser = () => (dispatch) => {
	// dispatch(startLoadingSinglePokemon());
  // loading
	return APIUtil.fetchUser().then(user => {
		dispatch(receiveUser(user));
		return user;
	});
};

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const refreshAll = (users) => ({
  type: REFRESH_ALL,
  users
});
