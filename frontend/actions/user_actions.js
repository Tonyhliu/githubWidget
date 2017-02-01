export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REMOVE_USER = 'REMOVE_USER';
export const REFRESH_ALL = 'REFRESH_ALL';

import * as APIUtil from '../util/api_util';

export const requestUsers = () => (dispatch) => {
	// dispatch(startLoadingAllPokemon());
  // loading
	return APIUtil.fetchUsers()
		.then(users => {
      let arr = [];
      for (let i = 0; i < 3; i++) {
        arr.push(users[i]);
      }

      var usersArr = [];
      for (let j = 0; j < arr.length; j++) {
        let user = APIUtil.fetchUser(arr[j].login).then(u => {
          usersArr.push(u);
        }).then(() => {
          if (usersArr.length === 3) {
            dispatch(receiveUsers(usersArr));
          }
        });
      }
    });
};

export const requestUser = () => (dispatch) => {
	// dispatch(startLoadingSinglePokemon());
  // loading
	return APIUtil.fetchUser().then(user => {
		dispatch(receiveUser(user));
	});
};

export const removeUser = (oldUser) => (dispatch) => {
  return APIUtil.fetchUsers().then(users => {
    let random = Math.round((Math.random() * (users.length - 1) + 1));
    let user = users[random];
    dispatch(replacedUser(oldUser, user));
  });
};

export const refreshAllUsers = () => (dispatch) => {
  dispatch(refreshAll());
  dispatch(requestUsers());
};

export const replacedUser = (oldUser, user) => ({
  type: REMOVE_USER,
  oldUser,
  user
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const refreshAll = () => ({
  type: REFRESH_ALL
});
