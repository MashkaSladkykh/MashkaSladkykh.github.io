import {combineReducers} from "redux";

import {jobs} from './jobs/reducer';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const rootReducer = combineReducers({
  jobs,
  persistedState,
});

export default rootReducer;