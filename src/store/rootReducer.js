import { combineReducers } from 'redux';

import { jobs } from './jobs/reducer';

const rootReducer = combineReducers({
  jobs,
});

export default rootReducer;