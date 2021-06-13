import { combineReducers, createStore } from 'redux';
import menuReducer from './reducers/menu_reducer.js';

const rootReducer = combineReducers({
  menu: menuReducer,
});

const store = createStore(
  rootReducer
);

export default store;