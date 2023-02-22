import { Link } from 'react-router-dom';

import {HOME} from '../../routes/constants';
import '../../App.css';

export const Error = () => (
  <div>
    <h2 className="red">Error</h2>
    <Link to={HOME}>Go to the job list </Link>
  </div>
);