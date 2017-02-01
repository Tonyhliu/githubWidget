import { RECEIVE_USERS,
        RECEIVE_USER,
        REFRESH_ALL,
        REMOVE_USER,
        LOADING,
        RECEIVE_LOCATION,
        ADD_ERROR
        } from '../actions/user_actions';
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
  users: [],
  loading: true,
  errors: [],
  location: []
};

const usersReducer = (state = _defaultState, action) => {
  Object.freeze(state); // avoid mutating state
  switch (action.type) {
    case RECEIVE_USER:
      return {
        users: [...state.users, action.user],
        loading: false,
        errors: [...state.errors]
      };
    case REFRESH_ALL:
      return _defaultState;
    case RECEIVE_USERS:
      let oldState = [];
      return {
        users: [...oldState, ...action.users],
        loading: false
      };
    case REMOVE_USER:
      let newStateArr = state.users.slice(),
          idxToReplace;
          // console.log(newStateArr);
      for (let i = 0; i < newStateArr.length; i++) {
        if (newStateArr[i].id === action.oldUser.id) {
          idxToReplace = i;
          break;
        }
      }
      for (let j = 0; j < newStateArr.length; j++) {
        if (j === idxToReplace) {
          newStateArr = newStateArr.slice(0, j).concat([action.user]).concat(newStateArr.slice(j+1));
        }
      }
      return {
        users: newStateArr,
        loading: false
      };
      case RECEIVE_LOCATION:
        return {
          location: action.location
        };
      case LOADING:
        return {
          users: [...state.users],
          loading: !state.loading
        };
      case ADD_ERROR:
        let response = [action.err.responseJSON.message];
        // console.log(response);
        return {
          users: [...state.users],
          loading: !state.loading,
          errors: response
        };
    default:
      return state;
  }
};

export default usersReducer;
