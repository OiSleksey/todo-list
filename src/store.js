import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
// import { applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';
import { tasksReducer } from './tasks/tasks.reducer';

const allReducers = combineReducers({
  tasks: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
