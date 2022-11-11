import {SET_JOBS, SET_JOB_DETAILS} from './types';

const initialState = {
  jobs: [],
  jobDetails: {},
};

export const jobs = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      }
      case SET_JOB_DETAILS:
        return{
          ...state,
          jobDetails: action.payload,
        }

    default:
      return state;
  }
}