import { Route, Routes } from 'react-router-dom';
import Jobs from '../pages/Jobs';
import JobDetails from '../pages/JobDetails';
import Error from '../pages/Error';

const JobApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Jobs />} />
      <Route path=':jobId' element={<JobDetails />} />
      <Route
        path='*'
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