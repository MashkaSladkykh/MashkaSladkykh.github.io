import { Route, Routes } from 'react-router-dom';
import Jobs from '../pages/Jobs';
import JobDetails from '../pages/JobDetails';
import Error from '../pages/Error';
import {HOME, DETAILS, ALL} from './constants';

const JobApp = () => {
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

export default JobApp;