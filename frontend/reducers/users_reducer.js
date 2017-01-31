import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

// testing
// const initialState = {
//   1: {
//     id: 1,
//     username: "Ally",
//     avatarUrl: "etcetc"
//   },
//   2: {
//     id: 2,
//     username: "Tony",
//     avatarUrl: "testtest"
//   },
// };

// const _defaultState = {};

const usersReducer = (state = {}, action) => {
  Object.freeze(state); // avoid mutating state
  // let newState = Object.assign({}, state);
  // merge(1st arg => obj to merge INTO, 2nd arg => source)
  // console.log(state);
  // let newState = Object.assign({}, state);
  // console.log(newState);
  let newState = merge({}, state);
  // console.log(newState);
  // let newState = Object.assign({}, state);
  // newState for some reason already has new dispatched action
  switch (action.type) {
    case RECEIVE_USER:
      // return merge({}, state, {[action.user.id]: action.user});
      // newState = merge({}, state);
      // console.log(newState);
      const newUser = {[action.user.id]: action.user};
      return merge(newState, newUser);
      // add it into newState
    case RECEIVE_USERS:
      newState = {};
      console.log(action);
      action.users.forEach(user => {
        newState[user.id] = user;
      });
      return merge({}, newState);
    default:
      return state;
  }
};

export default usersReducer;
