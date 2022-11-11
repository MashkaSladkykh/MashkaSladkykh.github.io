import {SET_JOBS, SET_JOB_DETAILS} from './types';

export const setJobs = payload => ({
  type: SET_JOBS,
  payload,
})

export const setJobDetails = payload => ({
  type: SET_JOB_DETAILS,
  payload,
})