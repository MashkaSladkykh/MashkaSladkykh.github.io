import { SET_JOBS } from './types';

const initialState = {
  jobs: [],
};

export const jobs = (state = initialState, action) => {
  switch (action.type) {
  case SET_JOBS:
    return {
      ...state,
      jobs: action.payload,
    };

  default:
    return state;
  }
};