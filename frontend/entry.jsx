import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import allUsers from './reducers/selectors';
import { receiveUser, receiveUsers } from './actions/user_actions';
// window.store = configureStore();
window.store = configureStore;
window.allUsers = allUsers;
window.receiveUser = receiveUser;
window.receiveUsers = receiveUsers;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;
  // const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
