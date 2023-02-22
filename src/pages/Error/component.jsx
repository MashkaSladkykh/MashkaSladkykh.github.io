import { Link } from 'react-router-dom';

import '../../App.css';

const Error = () => (
  <div>
    <h2 className='red'>Error</h2>
    <Link to={'/'}>Go to the job list </Link>
  </div>
);

export default Error;