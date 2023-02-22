import { Route, Routes } from 'react-router-dom';
import Jobs from '../pages/Jobs';
import {JobDetails} from '../pages/JobDetails/component';
import {Error} from '../pages/Error/component';
import {HOME, DETAILS, ALL} from './constants';

export const JobApp = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Jobs />} />
      <Route path={`:${DETAILS}`} element={<JobDetails />} />
      <Route
        path={ALL}
        element={
          <main>
            <Error />
          </main>
        }
      />
    </Routes>
  );
};