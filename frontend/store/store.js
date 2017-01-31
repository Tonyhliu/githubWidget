import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const logger = createLogger();
// const configureStore = (preloadedState = {}) => {
//   // const store = createStore(RootReducer, applyMiddleware(logger));
//   return createStore(
//     RootReducer,
//     preloadedState,
//     applyMiddleware(logger));
// };

const configureStore = createStore(RootReducer, applyMiddleware(thunk, logger));

export default configureStore;
