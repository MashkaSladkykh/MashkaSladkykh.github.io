import { combineReducers } from 'redux';

import { jobs } from './jobs/reducer';

export const rootReducer = combineReducers({
  jobs,
});