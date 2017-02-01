import { RECEIVE_USERS,
        RECEIVE_USER,
        REFRESH_ALL,
        REMOVE_USER } from '../actions/user_actions';
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
const _defaultState = {
  users: []
};

const usersReducer = (state = _defaultState, action) => {
  Object.freeze(state); // avoid mutating state
  // let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      // const newUser = {[action.user.id]: action.user};
      // return merge(newState, newUser);
      // add it into newState
      return {
        users: [...state.users, action.user]
      };
    case REFRESH_ALL:
      return _defaultState;
    case RECEIVE_USERS:
      let oldState = [];
      return {
        users: [...oldState, ...action.users]
      };
    case REMOVE_USER:
      // let keys = Object.keys(newState);
      // let idxToReplace,
      //     returnState = {};
      // for (let i = 0; i< keys.length; i++) {
      //   let currentId = action.oldUser.id.toString();
      //   if (keys[i] === currentId) {
      //     idxToReplace = i;
      //     break;
      //   }
      // }
      //
      // // keys = [51,52,53];
      // for (let j = 0; j < keys.length; j++) {
      //   if (j === idxToReplace) {
      //     returnState[action.user.id] = action.user;
      //   } else {
      //     returnState[keys[j]] = newState[keys[j]];
      //   }
      // }
      // return merge({}, returnState);
      let newStateArr = state.users.slice(),
          idxToReplace;
      // console.log(state.users);
      // console.log(action.oldUser);
      for (let i = 0; i < newStateArr.length; i++) {
        if (newStateArr[i].id === action.oldUser.id) {
          idxToReplace = i;
          break;
        }
      }
      // console.log(newStateArr);
      for (let j = 0; j < newStateArr.length; j++) {
        if (j === idxToReplace) {
          newStateArr = newStateArr.slice(0, j).concat([action.user]).concat(newStateArr.slice(j+1));
        }
      }
      return {
        users: newStateArr
      };
      // console.log(idxToReplace);
    default:
      return state;
  }
};

export default usersReducer;
