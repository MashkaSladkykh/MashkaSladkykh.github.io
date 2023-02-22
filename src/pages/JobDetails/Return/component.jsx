import { Link } from 'react-router-dom';

import {HOME} from '../../../routes/constants';

const Return = () => (
  <div className='details_return'>
    <Link to={HOME}>Return Job Board</Link>
  </div>
);
export default Return;